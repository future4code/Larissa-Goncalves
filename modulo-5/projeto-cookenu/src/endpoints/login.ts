import { generateToken } from './../services/authenticator';
import { compareHash } from './../services/hashManager';
import { userTableName } from './../types/user';
import { Request, Response } from "express"
import connection from "../connection"

export default async function login (
    req: Request,
    res: Response
    ): Promise<void>{
        try{
            const {email, password} = req.body

            if(!email || !password){
                res.statusCode = 422
                throw new Error ('Preencha corretamente os campos Email e password')
            }
            
            const [user] = await connection(userTableName).where({email})

            const passwordOk: boolean = compareHash(password, user.password)

            if(!user || !passwordOk){
                res.statusCode = 401
                throw new Error ('email ou senha incorreto, tente novamente')
            }

            const token = generateToken({id: user.id})

            res.send({token})

        }catch(error){
            console.log('algo deu errado')

            if(res.statusCode === 200){
                res.status(500).send('Error interno, tente novamente')
            }else{
                res.status(401).send('Digite corretamente o dados')
            }
        }
    }
