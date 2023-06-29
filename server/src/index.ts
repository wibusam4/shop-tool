import cors from 'cors'
import dotenv from 'dotenv'
import config from './config'
import express from 'express'
import AuthRoute from './routes/Auth.route'
import ToolRoute from './routes/Tool.route'
import UserRoute from './routes/User.route'
import LogRoute from './routes/Log.route'

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('from wibusama without love 🖕')
})

app.use('/auth', AuthRoute)
app.use('/tool', ToolRoute)
app.use('/user', UserRoute)
app.use('/log', LogRoute)

app.listen(config.PORT, () => {
  return console.log(`Server is running at http://localhost:${config.PORT}`)
})
