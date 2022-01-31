import { toDoList, tasks } from './data';
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
  const tasksTrue : tasks[] = toDoList.filter((item) => {
      if(item.completed === true){ return item}
  })
    res.send(tasksTrue).status(200)
    console.log('tasks completed')
})

//5

app.post('/add', (req: Request, res: Response) => {
    const {title, completed} = req.body
    toDoList.push({userId:Date.now(), id: toDoList.length + 1, title, completed })
    res.send(toDoList).status(200)
})

//6

app.put("/edditCompleted/:id", (req: Request, res: Response) => {
    const tasksEddit = Number(req.params.id)

    toDoList.map((tasks: any) => {
        if(tasksEddit === tasks.id){
            if(tasks.completed === true){return tasks.completed = false}
            else{return tasks.completed = true}
        }
    })
    res.send(toDoList).status(200)
})

//7

app.delete("/delete", (req: Request, res: Response) => {
    const delTasks = Number(req.query.id)

    toDoList.map((tasks: any) => {
        if(tasks.id === delTasks){return toDoList.splice}
    })
    res.send(toDoList).status(200)
})

//8

app.get('/user', (req :Request, res :Response) => {
    const id = Number(req.query.id)

    const taks : tasks[] = toDoList.filter((item) => {
        if (id === item.userId) {
            return item
        }
    })

    res.status(200).send(taks)
})




