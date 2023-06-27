import { Tool } from '@prisma/client'
import { Request, Response } from 'express'
import prisma from '~/db'
import { dataTool, responseJson } from '~/untils/index'

const ToolController = {
  getById: async (req: Request, res: Response) => {
    try {
      const toolId = req.params.id
      const tool = await prisma.tool.findFirst({ where: { id: Number(toolId) } })
      if (!tool) return responseJson(res, 200, false, 'Không tim thấy tool')
      await prisma.tool.update({ where: { id: tool.id }, data: { click: tool.click + 1 } })
      return responseJson(res, 200, true, { tool })
    } catch (error) {
      return responseJson(res, 200, false, 'Không tim thấy tool')
    }
  },

  getAll: async (req: Request, res: Response) => {
    try {
      const tools = await prisma.tool.findMany()
      return responseJson(res, 200, true, { tool: tools })
    } catch (error) {
      return responseJson(res, 200, false, error)
    }
  },

  addTool: async (req: Request, res: Response) => {
    try {
      const tool: Tool = req.body
      const newTool = await prisma.tool.create({ data: dataTool(tool) })
      return responseJson(res, 200, true, newTool)
    } catch (error: any) {
      console.log(error.message)
      return responseJson(res, 200, false, 'Điền đủ thông tin')
    }
  },

  editTool: async (req: Request, res: Response) => {
    try {
      const tool: Tool = req.body
      const updateTool = await prisma.tool.update({ where: { id: Number(tool.id) }, data: dataTool(tool) })
      return responseJson(res, 200, true, updateTool)
    } catch (error: any) {
      console.log(error.message)
      return responseJson(res, 200, false, 'Không tim thấy tool')
    }
  },

  editKey: async (req: Request, res: Response) => {
    try {
      const tool: Tool = req.body
      const updateTool = await prisma.tool.update({ where: { id: tool.id }, data: { ...tool } })
      return responseJson(res, 200, true, updateTool)
    } catch {
      return responseJson(res, 200, false, 'Không tim thấy tool')
    }
  },

  deleteTool: async (req: Request, res: Response) => {
    try {
      const tool: Tool = req.body
      const deleteTool = await prisma.tool.delete({ where: { id: tool.id } })
      return responseJson(res, 200, true, deleteTool)
    } catch {
      return responseJson(res, 200, false, 'Không tim thấy tool')
    }
  }
}
export default ToolController
