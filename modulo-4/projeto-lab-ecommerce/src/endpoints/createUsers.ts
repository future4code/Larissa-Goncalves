import { connection } from "../data/connection";
import {Request, Response} from "express"
import { users } from "../types";

export const createUsers = async (req:Request, res:Response):Promise<void> => {
    try{
        const {name, email, password} = req.body
        const id = Date.now().toString()

        if(!name || !email || !password) {
            res.statusCode = 401
            throw new Error('Encontramos um erro, preecha todos os campos corretamente')
        }

        const usersCreated: users = {
            id,
            name,
            email,
            password
        }

        await connection('labecommerce_users').insert(usersCreated)
        res.status(201).send('usuário cadastrado com sucesso!')
        console.log('caiu no try')

    }catch(err: any){
        console.log(err.message);
        console.log('caiu no catch')

        if(res.statusCode === 201){
            res.status(401).send('internal server error')
        }else{
            res.send(err.message)
        }
    }

}