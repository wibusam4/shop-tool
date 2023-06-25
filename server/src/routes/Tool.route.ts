import express from 'express'
import ToolController from '~/controller/Tool.controller'
import admin from '~/middlewares/admin.middleware'
import login from '~/middlewares/login.middleware'

const ToolRoute = express.Router()

ToolRoute.get('/all', ToolController.getAll)
ToolRoute.post('/add', login, admin, ToolController.addTool)
ToolRoute.put('/edit', login, admin, ToolController.editTool)
ToolRoute.delete('/delete', login, admin, ToolController.deleteTool)
ToolRoute.get('/:id', ToolController.getById)

export default ToolRoute
