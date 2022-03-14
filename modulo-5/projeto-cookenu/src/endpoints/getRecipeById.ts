import { recipesTableName } from './../types/user';
import { Request, Response } from "express";
import connection from "../connection";

export default async function getRecipesById(
    req: Request,
    res: Response
    ): Promise<void> {
        try{
            const [recipe] = await connection(recipesTableName).where({id: req.params.id})

            if(!recipe){
                res.statusCode = 404
                throw new Error('Receita não encontrada')
            }

            res.send({
                id: recipe.id,
                title: recipe.title,
                description: recipe.description,
                createdAt: recipe.create_at
            })

    }catch(error:any){
        console.log(error.message)

        if(res.statusCode === 200){
            res.status(500).send('Erro interno')
        }else{
            res.send(error.message)
        }
    }

    
}