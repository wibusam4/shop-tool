import config from '~/config'
import jwt from 'jsonwebtoken'
import { User } from '@prisma/client'
import * as requestIp from 'request-ip'
import { Response, Request } from 'express'

export const responseJson = (res: Response, code: number, success: boolean, message: string | object | unknown) => {
  return res.status(code).json({ success: success, message: message })
}

export const validateEmail = (value: string) => {
  const expression = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  return expression.test(value)
}

export const signToken = (user: User) => {
  const token = jwt.sign(
    {
      id: user.id,
      name: user.name,
      email: user.email,
      money: user.money,
      role: user.role,
      vip: user.vip
    },
    config.JWT_SECRET_KEY || 'wibusama',
    {
      expiresIn: '2h'
    }
  )
  return token
}

export const dataLog = (userId: number, content: string, req: Request) => {
  const yourIP = requestIp.getClientIp(req)
  return { userId: userId, content: `${content}, IP:${yourIP}` }
}

export const dataTransaction = (userId: number, oldMoney: number, newMoney: number, money: number, content: string) => {
  return { userId, oldMoney, newMoney, money, content }
}
