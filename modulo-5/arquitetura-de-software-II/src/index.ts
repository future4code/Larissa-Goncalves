import { taskRouter } from './routes/taskRouter';
import { userRouter } from './routes/userRouter';
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())

app.use('/user', userRouter)
app.use('task', taskRouter)

app.listen(3003, () => {
    console.log("servidor rodando na porta 3003")
})


