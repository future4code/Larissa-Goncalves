import { UserBusiness } from './../business/UserBusiness';
import { Request, Response } from "express";

const userBusiness = new UserBusiness

export class UserController{
    
    signup = async(req: Request, res: Response) => {
        try{
            //pede um req no body do user
            const {name, email, password} = req.body

            //gera um novo token?? como assim
            const token = await userBusiness.signup(name, email, password)
            
            //se tudo der certo manda a mensagem de sucesso
            res.status(200).send({
                message: 'Usuário criado com sucesso!',
                token
            })
            
            
            //se der errado manda a mensagem de error
        }catch(error: any){
            res.status(400).send(error.message)
        }
    }
}