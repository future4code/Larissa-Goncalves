import { toDoList } from './data';
import express from 'express'
import cors from 'cors'
import { Request, Response } from 'express';

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3001, () => {
    console.log("Server is running in http://localhost:3001")
})

//1
app.get("/ping", (req: Request, res: Response) => {
    res.send("pong!").status(200)
    console.log("PING PONG is running")
})

//4
app.get("/list", (req: Request, res: Response) => {
    console.log('deu um boleano');
    

    res.send(toDoList).status(200)
    
})