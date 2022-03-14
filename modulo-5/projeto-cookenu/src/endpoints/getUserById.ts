import { userTableName } from './../types/user';
import { getTokenData } from './../services/authenticator';
import { Request, Response } from "express";
import connection from '../connection';

export default async function getUserById (
    req: Request,
    res: Response
    ): Promise<void>{
    
        try{

            const token: string = req.headers.authorization!
            const idUser = req.params.id

            const tokenData = getTokenData(token)

            if(!tokenData){
                res.statusCode = 401
                throw new Error('Token de autorização invalido, tente novamente')
            }

            const [user] = await connection(userTableName).where({id: idUser})

            if(!user){
                res.statusCode = 404
                throw new Error('Usuário não encontrado')
            }

            res.send({
                id: user.id,
                email: user.email,
                name: user.name
            })

        }catch(error: any){
            console.log(error.message)

        }
}