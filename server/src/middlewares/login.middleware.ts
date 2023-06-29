import { NextFunction, Request, Response } from 'express'
import prisma from '~/db'
import jwt from 'jsonwebtoken'
import config from '../config'
import { responseJson } from '~/untils'
import { RequestHasLogin } from '~/type'

const login = async (req: RequestHasLogin, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization
  const token = authHeader && authHeader.split(' ')[1]
  if (!token) return responseJson(res, 200, false, 'Bạn chưa đăng nhập')
  try {
    const decode: any = jwt.verify(token, config.JWT_SECRET_KEY)
    if (!decode) return responseJson(res, 200, false, 'Bạn chưa đăng nhập')
    const user = await prisma.user.findFirst({
      where: {
        email: decode.email
      }
    })
    if (user) {
      req.email = user.email
      req.role = user.role
      req.id = user.id
      next()
      return
    }
    return responseJson(res, 200, false, 'Bạn chưa đăng nhập')
  } catch (error) {
    console.log(error)
    return responseJson(res, 200, false, 'Bạn chưa đăng nhập')
  }
}

export default login
