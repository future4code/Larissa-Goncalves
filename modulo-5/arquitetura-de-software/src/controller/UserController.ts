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
           res.status(400).send(error.message)
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



   //  gelAllUsers = async (
   //    req: Request,
   //    res: Response
   //  ): Promise<void> => {
   //    try {
   //      const token = req.headers.authorization!;
   //      const users = await UserBusiness.get(token);
        
   //      res.send({
   //        users: users
   //      })
   //      .status(200);
  
   //    } catch (error: any) {
   //      res.send({ message: error.message }).status(error.status);
   //    }
   //  }
   //  deleteUser = async (
   //    req: Request,
   //    res: Response
   //  ) Promise<void> => {
   //    try {
   //      const input = {
   //        id: req.params.id,
   //        token: req.headers.authorization!
   //    }
  
   //    await UserBusiness.delete(input);
        
   //      res.send({
   //        message: "Usuário apagado 
   //      })
   //      .status(200);
  
   //    } catch (error: any) {
   //      res.send({ message: error.message }).status(error.status);
   //    }
   //  }
  
}