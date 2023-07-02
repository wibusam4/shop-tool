import express from 'express'
import login from '~/middlewares/login.middleware'
import admin from '~/middlewares/admin.middleware'
import TransactionController from '~/controller/Transaction.controller'

const TransactionRoute = express.Router()

TransactionRoute.get('/balance', login, admin, TransactionController.getAllBalance)
TransactionRoute.get('/tool', login, admin, TransactionController.getAllTool)

export default TransactionRoute
