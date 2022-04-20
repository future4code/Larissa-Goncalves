import { InputSignUp, InputLogin } from './../model/UserType';
import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

const userBusiness = new UserBusiness

export class UserController{
    
    signup = async(req: Request, res: Response) => {

        try{

            const input : InputSignUp = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }

            const token = await userBusiness.signup(input)

            res.status(200).send(`usuário criado com sucesso! ${token}`)

        }catch(error: any){
            res.status(400).send(error.message)
        }
    }

    login = async(req: Request, res: Response) => {

        try{

            const input : InputLogin = {
                email: req.body.email,
                password: req.body.password
            }

            const token = await userBusiness.login(input)

            res.status(200).send(`você está logado ${token}`)

        }catch(error: any){
            let message = error.sqlMessage || error.message
            res.statusCode = 400
      
            res.send({ message })
          
        }
    }
}