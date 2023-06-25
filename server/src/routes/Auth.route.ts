import express from 'express'
import UserController from '../controller/User.controller'
const AuthRoute = express.Router()

AuthRoute.post('/register', UserController.register)
AuthRoute.post('/login', UserController.login)

export default AuthRoute
