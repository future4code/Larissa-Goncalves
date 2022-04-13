import { Request, Response } from "express"
import PokemonBusiness from "../business/PokemonBusiness"

export class PokemonsController {

    async getAllPokemons(){
        try{

        }catch(error){

        }
    }

    async getPokemonsById(req: Request, res: Response){
        try{
            const id: any = req.params.id

            const result = await PokemonBusiness.getPokemonsById(id)
            res.status(200).send(result)

        }catch(error){
            if (error instanceof Error) {
                res.status(400).send(error.message);
            } else {
                res.send({ message: "Algo deu errado ao encontrar pokemon" })
            }
        }
    }

    async getPokemonsByFamilyId(req: Request, res: Response){
        try{
            const family_id  = Number(req.params.family_id)

            const result = await PokemonBusiness.getPokemonsByFamilyId(family_id)
            res.status(200).send(result)

        }catch(error){
            if (error instanceof Error) {
                res.status(400).send(error.message);
            } else {
                res.send({ message: "Algo deu errado ao encontrar pokemon" })
            }
        }
    }

    async getPokemonsByGeneration(req: Request, res: Response){
        try{
            const generation = Number(req.params.generation)

            const result = await PokemonBusiness.getPokemonsByGeneration(generation)

            res.status(200).send(result)

        }catch(error){
            if (error instanceof Error) {
                res.status(400).send(error.message);
            } else {
                res.send({ message: "Algo deu errado ao buscar geração" })
            }
        }
    }

    
}

export default new PokemonsController()