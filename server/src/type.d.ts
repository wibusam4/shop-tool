import { Role } from '@prisma/client'
import { Request } from 'express'

export type FormLogin = {
  email: string
  password: string
  name?: string
}

export interface RequestHasLogin extends Request {
  email?: string
  role?: Role
}
