import { UserBusiness } from './../business/UserBusiness';
import { Request, Response } from "express"

export class UserController{
    constructor(
        private userBusiness = UserBusiness   
    ){}
    signup = async (
        req: Request,
        res: Response
     ) => {
        try {
           const { name, nickname, email, password, role } = req.body
     
           const token: string = await this.userBusiness.signupBusiness({
              name, nickname, email, password, role
           })
     
           res
              .status(201)
              .send({
                 message: "Usuário criado!",
                 token
              })
     
        } catch (error: any) {
           res.status(400).send(error.message)
        }
     }

     login = async (
        req: Request,
        res: Response
     ): Promise<void> => {
        try {
           const { email, password } = req.body
     
           const token: string = await this.userBusiness.loginBusiness(email, password)
     
           res.send({
              message: "Usuário logado!",
              token
           })
     
        } catch (error: any) {
           res.status(400).send(error.message)
        }
     }
}