import { Request, Response } from 'express'
import prisma from '~/db'
import { RequestHasLogin } from '~/type'
import { responseJson } from '~/untils/index'

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
  }
}
export default TransactionController
