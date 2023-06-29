import express from 'express'
import UserController from '../controller/User.controller'
import login from '~/middlewares/login.middleware'
import admin from '~/middlewares/admin.middleware'

const UserRoute = express.Router()

UserRoute.get('/get', login, UserController.getByEmail)
UserRoute.post('/get', login, admin, UserController.getById)
UserRoute.get('/getall', login, admin, UserController.getAll)
UserRoute.post('/changemoney', login, admin, UserController.changeMoney)
UserRoute.post('/changepass', login, UserController.changePassword)
UserRoute.post('/buytool', login, UserController.buyTool)
UserRoute.put('/edit', login, admin, UserController.edit)
UserRoute.delete('/delete', login, admin, UserController.delete)

export default UserRoute
