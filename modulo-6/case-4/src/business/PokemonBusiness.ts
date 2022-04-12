import { PokemonsDatabase } from './../data/PokemonDatabase';
import { CustomError } from './../error/CustomError';


class PokemonsBusiness {

    constructor(
        private pokemonsDatabase: PokemonsDatabase
    ){}

    async getAllPokemons(){
        try{

        }catch(error){

        }
    }

    async getPokemonsById(id:number){
        try{
            if(!id){
               throw new CustomError(403, "Passe o id do pokemon")
            }

            const poke = (async () => {
                const data = await this.pokemonsDatabase.getPokemonsById(id)
                return data
            })

            const dataPoke = await poke()

            if(!dataPoke){
                throw new CustomError(422, "Pokemon não encontrado")
            }

            return dataPoke

        }catch(error){
            if(error instanceof Error){
                throw new CustomError(500, error.message)
            }else {
                throw new CustomError(422, "Error ao encontrar o pokemon pelo id")
            }

        }
    }

    async getPokemonsByFamilyId(){
        try{

        }catch(error){

        }
    }

    async getPokemonsByGeneration(){
        try{

        }catch(error){

        }
    }



}

export default new PokemonsBusiness(
    new PokemonsDatabase()
)