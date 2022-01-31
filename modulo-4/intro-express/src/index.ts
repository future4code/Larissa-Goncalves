import { posts } from './posts';
import { users } from './arrays';
import express from "express"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

const server = 3003
app.listen(server, () => {
    console.log(`O servidor esta rodando na porta ${server}`)
})


//1

app.get('/', (req, res) => {
    console.log('deu certooo!')

    res.send("okkk").status(200)
})

//2

type usersInfos = {
    id: number,
    name: string,
    email: string,
    phone: string,
    website: string,
}

//3
//arrays.ts

//4

app.get('/users', (req, res) => {
    res.status(200).send(users)
})

//5
type posts = {
    id: number,
    userId: number,
    title : string, 
    body: string,
}


//6
//Criei fora porém agora acho que dentro do arrays de usuários seria uma forma melhor de consumir a API


//7

app.get('/posts', (req, res) => {
    res.status(200).send(posts)
})

//8

app.get('/posts/:id', (req, res) => {
    console.log('query', req.params.id)
    const id = Number(req.params.id)

    const postsMessage : posts[] = posts.filter(post => {
        if(post.id === id){
            return post
        } 
    })
    res.status(201).send(postsMessage)
})

