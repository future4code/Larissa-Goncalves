import express, { application } from 'express'
import cors from 'cors'
import { Request, Response } from 'express'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3001, () => {
    console.log('Você esta na porta 3001')
})
