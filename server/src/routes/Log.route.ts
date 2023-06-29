import express from 'express'
import LogController from '~/controller/Log.controller'
import admin from '~/middlewares/admin.middleware'
import login from '~/middlewares/login.middleware'

const LogRoute = express.Router()

LogRoute.get('/all', login, admin, LogController.getAll)

export default LogRoute
