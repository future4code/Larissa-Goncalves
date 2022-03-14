import { recipesTableName } from '../types/user';
import { getTokenData } from '../services/authenticator';
import { Request, Response } from "express";
import generateId from '../services/idGenerator';
import connection from '../connection';

export default async function createRecipes(
    req: Request,
    res: Response
    ): Promise<void> {
        try{
            const token = req.headers.authorization
            const {title, description} = req.body

            const tokenData = getTokenData(token!)

            if(!tokenData){
                res.statusCode = 401
                throw new Error('Token de autorização invalido, tente novamente')
            }

            if(!title || !description){
                res.statusCode = 422
                throw new Error('Título e descrição obrigatórios, preencha todos os campos')
            }

            const id = generateId()

            const createdAt = new Date()

            await connection(recipesTableName).insert({
                id,
                title,
                description,
                created_at: createdAt,
                author_id: tokenData!.id

            })


            res.send('Receita criada com sucesso!')

    }catch(error:any){
        console.log(error.message)

        if(res.statusCode === 200){
            res.send('Preencha todos os dados')
        }
        
    }

    
}