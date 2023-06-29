import { Request, Response } from 'express'
import prisma from '~/db'
import { responseJson } from '~/untils/index'

const LogController = {
  getAll: async (req: Request, res: Response) => {
    try {
      const log = (await prisma.log.findMany()).sort()
      return responseJson(res, 200, true, { log })
    } catch (error) {
      return responseJson(res, 200, false, error)
    }
  }
}
export default LogController
