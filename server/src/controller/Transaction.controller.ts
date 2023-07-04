import { Request, Response } from 'express'
import prisma from '~/db'
import { RequestHasLogin } from '~/type'
import { responseJson, timeToMilisencond } from '~/untils/index'

const TransactionController = {
  getAllBalance: async (req: Request, res: Response) => {
    try {
      const transaction = (await prisma.transaction.findMany()).sort()
      return responseJson(res, 200, true, { transaction })
    } catch (error) {
      return responseJson(res, 200, false, error)
    }
  },

  getBalanceById: async (req: RequestHasLogin, res: Response) => {
    try {
      const id = req.id
      const transaction = await prisma.transaction.findMany({ where: { userId: id } })
      return responseJson(res, 200, true, { transaction })
    } catch (error) {
      console.log(error)
      responseJson(res, 200, false, 'Không tìm thấy ID')
    }
  },

  getAllTool: async (req: Request, res: Response) => {
    try {
      const transaction = (
        await prisma.historyBuyTool.findMany({ include: { tool: { select: { nameTool: true } } } })
      ).sort()
      return responseJson(res, 200, true, { transaction })
    } catch (error) {
      return responseJson(res, 200, false, error)
    }
  },

  getTransToolById: async (req: RequestHasLogin, res: Response) => {
    try {
      const id = req.id
      const transaction = await prisma.historyBuyTool.findMany({
        orderBy: [
          {
            id: 'asc'
          }
        ],
        where: { userId: id },
        include: { tool: { select: { nameTool: true } } }
      })
      return responseJson(res, 200, true, { transaction })
    } catch (error) {
      console.log(error)
      responseJson(res, 200, false, 'Không tìm thấy ID')
    }
  },

  editKeyTransTool: async (req: RequestHasLogin, res: Response) => {
    try {
      const { id, toolId, key } = req.body
      const userId: number = req.id as number
      if (!toolId || !key) return responseJson(res, 200, false, 'Điền thiếu thông tin')
      const match = { id: Number(id), toolId: Number(toolId), userId }
      const transTool = await prisma.historyBuyTool.findFirst({
        where: match
      })
      if (!transTool) return responseJson(res, 200, false, 'Không tìm thấy tool')
      const monthMiliSecond = 30 * 24 * 60 * 60 * 1000
      const dayMiliSecond = 24 * 60 * 60 * 1000
      if (timeToMilisencond(transTool.createdAt) > monthMiliSecond && transTool.type == 0)
        return responseJson(res, 200, false, 'Key đã hết hạn')
      if (timeToMilisencond(transTool.updatedAt) < dayMiliSecond)
        return responseJson(res, 200, false, 'Chưa đủ thời gian sửa')
      await prisma.historyBuyTool.update({ where: { id: transTool.id }, data: { key: key } })
      responseJson(res, 200, true, 'Sửa key thành công')
    } catch (error) {
      console.log(error)
      responseJson(res, 200, false, 'Không tìm thấy ID')
    }
  }
}
export default TransactionController
