import { generateToken } from './../services/authenticator';
import { HashManager } from './../services/hashManager';
import { userTableName } from './../types/user';
import { Request, Response } from "express";
import connection from "../connection";
import generateId from "../services/idGenerator";


export default async function signUp (
    req: Request,
    res: Response
    ): Promise<void>{
    try{
        const {name, email, password} = req.body

        if(!name || !email || !password){
            res.statusCode = 422
            throw new Error ('preencha corretamente todos campos')
        }

        const id: string = generateId()

        const cypherPassword: string = HashManager(password)

        if(password.length > 6){
            res.statusCode = 422
            throw new Error ('Senha muito longa, Por favor insira uma nova senha')
        }

        const [user] = await connection(userTableName).where({email})

        if(user){
            res.statusCode = 409
            throw new Error('Email já cadastrado, insira um novo email')
        }

        const token : string = generateToken({id})


        await connection(userTableName).insert({
            id,
            name, 
            email, 
            password : cypherPassword
        })

        res.send(token)
        

    }catch(error: any){
        console.log(error.message);
        res.status(401).send(error.message)

    }

}
