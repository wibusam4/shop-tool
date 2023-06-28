import prisma from '~/db'
import bcrypt from 'bcrypt'
import { FormLogin, RequestHasLogin } from '~/type'
import { Request, Response } from 'express'
import { dataLog, dataTransaction, responseJson, signToken, validateEmail } from '~/untils/index'

const saltRounds = 10

const UserController = {
  login: async (req: Request, res: Response) => {
    try {
      const { email, password }: FormLogin = req.body

      if (!email || !password) return responseJson(res, 200, false, 'Điền thiếu thông tin')

      if (!validateEmail(email)) return responseJson(res, 200, false, 'Email không đúng định dạng')

      const user = await prisma.user.findFirst({ where: { email } })

      if (!user) return responseJson(res, 200, false, 'Email không đúng hoặc chưa đăng kí')

      const match = await bcrypt.compare(password, user.password)

      if (!match) return responseJson(res, 200, false, 'Mật khẩu không chính xác')

      await prisma.log.create({ data: dataLog(user.id, 'Đăng nhập', req) })

      const token = signToken(user)

      responseJson(res, 200, true, { token, user })
    } catch {
      return responseJson(res, 200, false, 'Có lỗi xảy ra')
    }
  },

  register: async (req: Request, res: Response) => {
    try {
      const { name, email, password }: FormLogin = req.body

      if (!name || !email || !password) return responseJson(res, 200, false, 'Điền thiếu thông tin')

      if (!validateEmail(email)) return responseJson(res, 200, false, 'Email không đúng định dạng')

      const passwordHash = await bcrypt.hash(password, saltRounds)
      const user = await prisma.user.create({ data: { name, email, password: passwordHash } })
      await prisma.log.create({ data: dataLog(user.id, 'Đăng kí', req) })
      const token = signToken(user)

      responseJson(res, 200, true, { token, user })
    } catch {
      return responseJson(res, 200, false, 'Email đã tồn tại')
    }
  },

  getByEmail: async (req: RequestHasLogin, res: Response) => {
    try {
      const email = req.email

      const user = await prisma.user.findFirst({ where: { email } })

      if (!user) return responseJson(res, 200, false, 'Không tìm thấy user')

      responseJson(res, 200, true, { user })
    } catch {
      return responseJson(res, 200, false, 'Không tìm thấy user')
    }
  },

  getById: async (req: RequestHasLogin, res: Response) => {
    try {
      const id = req.body.id
      const user = await prisma.user.findFirst({ where: { id: Number(id) } })

      if (!user) return responseJson(res, 200, false, 'Không tìm thấy user')

      responseJson(res, 200, true, { user })
    } catch (error: any) {
      console.log(error.message)
      return responseJson(res, 200, false, 'Không tìm thấy user')
    }
  },

  getAll: async (req: Request, res: Response) => {
    try {
      const users = await prisma.user.findMany()

      responseJson(res, 200, true, { users })
    } catch {
      return responseJson(res, 200, false, 'Xảy ra lỗi')
    }
  },

  changeMoney: async (req: Request, res: Response) => {
    try {
      const { userId, money } = req.body
      if (!userId || !money) return responseJson(res, 200, false, 'Điền thiếu thông tin')
      let user = await prisma.user.findFirst({ where: { id: Number(userId) } })
      if (!user) return responseJson(res, 200, false, 'Không tìm thấy user')
      const newMoney = user.money + Number(money)
      const oldMoney = user.money
      user = await prisma.user.update({ where: { id: user.id }, data: { money: newMoney } })
      await prisma.transaction.create({
        data: {
          userId: user.id,
          oldMoney,
          newMoney,
          money: Number(money),
          content: `${Number(money) > 0 ? 'Cộng tiền' : 'Trừ tiền'} userId: ${user.id}`
        }
      })
      await prisma.log.create({
        data: dataLog(1, `Cộng tiền userId: ${user.id}`, req)
      })
      responseJson(res, 200, true, 'Cộng tiền thành công')
    } catch (error: any) {
      return responseJson(res, 200, false, error.message)
    }
  },

  changePassword: async (req: RequestHasLogin, res: Response) => {
    try {
      const email = req.email
      const { oldPassword, newPassword } = req.body
      if (!oldPassword || !newPassword) return responseJson(res, 200, false, 'Điền thiếu thông tin')

      let user = await prisma.user.findFirst({ where: { email } })

      if (!user) return responseJson(res, 200, false, 'Không tìm thấy user')

      const match = await bcrypt.compare(oldPassword, user.password)
      if (!match) return responseJson(res, 200, false, 'Mật khẩu không khớp')

      const hashNewPassword = await bcrypt.hash(newPassword, saltRounds)

      user = await prisma.user.update({ where: { email }, data: { password: hashNewPassword } })
      await prisma.log.create({ data: dataLog(user.id, 'Đổi mật khẩu', req) })
      responseJson(res, 200, true, { user })
    } catch {
      return responseJson(res, 200, false, 'Không tìm thấy user')
    }
  },

  buyTool: async (req: RequestHasLogin, res: Response) => {
    try {
      const email = req.email
      const { toolId, type, server } = req.body
      let user = await prisma.user.findFirst({ where: { email } })

      if (!user) {
        await prisma.log.create({ data: dataLog(999999, 'Bug API, Auth Email', req) })
        return responseJson(res, 200, false, 'Không tìm thấy user')
      }

      if (!toolId || !type || !server) {
        await prisma.log.create({ data: dataLog(user.id, 'Bug API, Sai param mua tool', req) })
        return responseJson(res, 200, false, 'Điền thiếu thông tin')
      }

      const tool = await prisma.tool.findFirst({ where: { id: Number(toolId) } })
      if (!tool) {
        await prisma.log.create({ data: dataLog(user.id, 'Bug API, Không tìm thấy tool', req) })
        return responseJson(res, 200, false, 'Không tìm thấy tool')
      }

      if (type === '0') {
        if (user.money < tool.priceMonth) {
          await prisma.log.create({ data: dataLog(user.id, 'Bug API, Thiếu tiền mua tool', req) })
          return responseJson(res, 200, false, 'Bạn không đủ tiền')
        }
        const newMoney = user.money - tool.priceMonth
        const oldMoney = user.money
        user = await prisma.user.update({ where: { email: user.email }, data: { money: newMoney } })
        await prisma.transaction.create({
          data: dataTransaction(user.id, oldMoney, newMoney, tool.priceMonth, `Mua tool ${tool.nameTool}`)
        })
        const buyTool = await prisma.historyBuyTool.create({
          data: { userId: user.id, toolId: tool.id, server: Number(server), type: 0 }
        })
        await prisma.log.create({ data: dataLog(user.id, `Mua tool tháng, Tool ${tool.nameTool}`, req) })
        return responseJson(res, 200, true, { buyTool })
      }
      if (type === '1') {
        if (user.money < tool.priceYear) {
          await prisma.log.create({ data: dataLog(user.id, 'Bug API, Thiếu tiền mua tool', req) })
          return responseJson(res, 200, false, 'Bạn không đủ tiền')
        }
        const newMoney = user.money - tool.priceYear
        const oldMoney = user.money
        user = await prisma.user.update({ where: { email: user.email }, data: { money: newMoney } })
        await prisma.transaction.create({
          data: dataTransaction(user.id, oldMoney, newMoney, tool.priceYear, `Mua tool ${tool.nameTool}`)
        })
        const buyTool = await prisma.historyBuyTool.create({
          data: { userId: user.id, toolId: tool.id, server: Number(server), type: 1 }
        })
        await prisma.log.create({ data: dataLog(user.id, `Mua tool năm, Tool ${tool.nameTool}`, req) })
        return responseJson(res, 200, true, { buyTool })
      }

      await prisma.log.create({ data: dataLog(user.id, `Bug API, Khác type tool`, req) })
      responseJson(res, 200, true, 'Chọn giá tháng hoặc năm')
    } catch (error) {
      return responseJson(res, 200, false, error)
    }
  },

  delete: async (req: Request, res: Response) => {
    try {
      const { email } = req.body
      if (!email) return responseJson(res, 200, false, 'Điền thiếu thông tin')

      const user = await prisma.user.delete({ where: { email } })

      if (!user) return responseJson(res, 200, false, 'Không tìm thấy user')

      responseJson(res, 200, true, { user })
    } catch {
      return responseJson(res, 200, false, 'Không tìm thấy user')
    }
  }
}
export default UserController
