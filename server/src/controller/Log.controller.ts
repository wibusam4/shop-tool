import { Request, Response } from 'express'
import prisma from '~/db'
import { RequestHasLogin } from '~/type'
import { responseJson } from '~/untils/index'

const LogController = {
  getAll: async (req: Request, res: Response) => {
    try {
      const log = (await prisma.log.findMany()).sort()
      return responseJson(res, 200, true, { log })
    } catch (error) {
      return responseJson(res, 200, false, error)
    }
  },

  getById: async (req: RequestHasLogin, res: Response) => {
    try {
      const id = req.id
      const log = await prisma.log.findMany({ where: { id } })
    } catch (error) {
      console.log(error)
      responseJson(res, 200, false, 'Không tìm thấy ID')
    }
  }
}
export default LogController
