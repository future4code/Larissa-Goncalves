import { DogDTO } from './../model/DogModel';
import { DogBusiness } from './../business/DogBusiness';
import { Request, Response } from "express"

export class DogController {

   async createWalk(req: Request, res: Response) {
        try{
            const {date, duration, petNumber, start, finish, status } = req.body
            
            const result =  await DogBusiness.createWalk(
               date,
               duration,
               petNumber,
               start,
               finish,
               status
            );
             
             res.status(200).send(result);
             
          } catch (error) {
             
             if (error instanceof Error) {
                res.status(400).send(error.message);
            } else {
               res.send({ message: "Algo deu errado ao cadastrar passeio" })
            }
          }
       

    } 
}

export default new DogController(
)