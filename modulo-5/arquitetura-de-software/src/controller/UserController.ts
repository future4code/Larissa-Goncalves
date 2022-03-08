import { UserBusiness } from './../business/UserBusiness';
import { Request, Response } from "express"


export class UserController{

    signup = async (
        req: Request,
        res: Response
     ) => {
        try {
           const { name, email, password, role } = req.body
            
           const userBusiness = new UserBusiness()
           const token = await userBusiness.signup(name, email, password, role)

           res.status(201).send({
                 message: "Usuário criado!",
                 token
              })
     
        } catch (error: any) {
           res.status(401).send(error.message)
        }
     }

    login = async (
        req: Request, res: Response
     
     ): Promise<void> => {
     
        try {
           const { email, password } = req.body

           const userBusiness = new UserBusiness()
           const token = await userBusiness.login(email, password)
     
           res.send({
              message: "Usuário logado com sucesso!",
              token
           })
     
        } catch (error: any) {
           res.status(400).send(error.message)
        }
    }
}