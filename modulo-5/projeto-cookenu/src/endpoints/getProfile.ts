import { userTableName } from './../types/user';
import { getTokenData } from './../services/authenticator';
import { Request, Response } from "express";
import connection from '../connection';

export default async function getProfile(
    req: Request,
    res: Response
): Promise<void>{
    try{
        const token: string = req.headers.authorization!

        const tokenData = getTokenData(token)

        if(!tokenData){
            res.statusCode = 401
            throw new Error ('Token de autorização invalido, tente novamente')
        }

        const [user] = await connection(userTableName).where({id: tokenData?.id})

        if(!user){
            res.statusCode = 404
            throw new Error('Usuário não encontrado')
        }

        res.send({
            id: user.id,
            name: user.name,
            email:  user.email
        })

    }catch(error: any){
        console.log(error.message)

    }

}