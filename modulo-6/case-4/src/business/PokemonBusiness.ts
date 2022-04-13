import { PokemonsDatabase } from './../data/PokemonDatabase';
import { CustomError } from './../error/CustomError';


class PokemonsBusiness {

    constructor(
        private pokemonsDatabase: PokemonsDatabase
    ){}

    async getAllPokemons(){
        try{
            const result = await this.pokemonsDatabase.getAllPokemons()

            return result

        }catch(error){
            if(error instanceof Error){
                throw new CustomError(500, error.message)
            }else {
                throw new CustomError(422, "Error ao encontrar o pokemon pelo id")
            }
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

    async getPokemonsByFamilyId(family_id: number){
        try{
            if(!family_id){
                throw new CustomError(422, "Passe um id da familia")
            }

            const pokeFamily = (async ( ) => {
                const data = await this.pokemonsDatabase.getPokemonsByFamilyId(family_id)
                return data
            })

            const dataFamily = await pokeFamily()

            if(!dataFamily){
                throw new CustomError(422, "Familia do pokemon não encontrado")
            }

            return dataFamily

        }catch(error){
            if(error instanceof Error){
                throw new CustomError(500, error.message)
            }else {
                throw new CustomError(422, "Error ao encontrar o pokemon pelo id da familia")
            }

        }
    }

    async getPokemonsByGeneration(generation: number){
        try{
            if(!generation && generation > 7){
                throw new CustomError(422, "geração invalida so tem 7")
            }

            const result = await this.pokemonsDatabase.getPokemonsByGeneration(generation)

            return result

        }catch(error){
            if(error instanceof Error){
                throw new CustomError(500, error.message)
            }else {
                throw new CustomError(422, "Error ao encontrar geração de pokemons")
            }
        }
    }

    async getInfoPokemons(id: number){
        try{
            if(!id){
                throw new CustomError(403, "Passe o id do pokemon")
             }
 
             const pokeInfo = (async () => {
                 const data = await this.pokemonsDatabase.getInfoPokemons(id)
                 return data
             })
 
             const dataPokeInfo = await pokeInfo()
 
             if(!dataPokeInfo){
                 throw new CustomError(422, "Pokemon não encontrado")
             }
 
             return dataPokeInfo

        }catch(error){
            if(error instanceof Error){
                throw new CustomError(500, error.message)
            }else {
                throw new CustomError(422, "Error ao encontrar info de pokemons")
            }
        }
    }

    async getPokemonByName(name: string){
        try{
            if(!name){
                throw new CustomError(403, "Passe o nome do pokemon")
             }
 
             const pokeName = (async () => {
                 const data = await this.pokemonsDatabase.getPokemonsByName(name)
                 return data
             })
 
             const dataPokeName = await pokeName()
 
             if(!dataPokeName){
                 throw new CustomError(422, "Pokemon não encontrado")
             }
 
             return dataPokeName

        }catch(error){
            if(error instanceof Error){
                throw new CustomError(500, error.message)
            }else {
                throw new CustomError(422, "Error ao encontrar pokemons pelo nome")
            }
        }
    }



}

export default new PokemonsBusiness(
    new PokemonsDatabase()
)