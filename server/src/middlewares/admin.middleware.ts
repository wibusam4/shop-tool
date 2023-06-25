import { NextFunction, Response } from 'express'
import { responseJson } from '~/untils'
import { RequestHasLogin } from '~/type'

const admin = async (req: RequestHasLogin, res: Response, next: NextFunction) => {
  if (req.role && req.role === 'ADMIN') {
    next()
    return
  }
  return responseJson(res, 200, false, 'Bạn không có quyền truy cập')
}

export default admin
