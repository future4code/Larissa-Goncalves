import { postBusiness } from './../business/PostBusiness';
import { InputCreatePost, InputGetId, posts } from './../model/PostType';
import { Request, Response } from "express"


export class postController{

    createPost = async (req: Request, res: Response) => {

        try{

            const token: string = req.headers.authorization as string

            const input: InputCreatePost = {
                photo: req.body.photo, 
                description: req.body.description , 
                role: req.body.role,
                token
            }

            await new postBusiness().createPost(input)
     
            res.status(201).send({ })

        }catch(error: any){
            throw new Error(error.message)
        }

    }

    getPostById = async (req: Request, res: Response) =>{
        try {

            const input: InputGetId = {
                id: req.params.id
            }

            const post : posts = await new postBusiness().getPostById(input)

            res.status(200).send(`post encontrado: ${post}`)
    

         } catch (error: any) {
            let message = error.sqlMessage || error.message
            res.statusCode = 400
            res.send({ message })
         }
    }

 }
 
 
  

