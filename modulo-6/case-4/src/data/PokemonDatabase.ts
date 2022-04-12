import { Pokemons } from './../model/Pokemons';
import { BaseDatabase, table_name } from './BaseDataBase';


export class PokemonsDatabase extends BaseDatabase{

    private toModel(dbModel?: any): Pokemons | undefined{
        return(
            dbModel && new Pokemons(
                dbModel.id,
                dbModel.name,
                dbModel.pokedex_number,
                dbModel.generation,
                dbModel.evolution_stage,
                dbModel.evolved,
                dbModel.family_id,
                dbModel.type_1 ,
                dbModel.type_2 ,
                dbModel.weather_1,
                dbModel.weather_2,
                dbModel.stat_total,
                dbModel.atk,
                dbModel.def,
                dbModel.sta,
                dbModel.legendary,
                dbModel.aquireable,
                dbModel.spawns,
                dbModel.shiny,
            )
        )
    }

    async getAllPokemons(){
        try{

        }catch(error){

        }
    }

    async getPokemonsById(id: number): Promise<Pokemons|any>{
        try{
            const result = await BaseDatabase.connection.raw(`
                SELECT * FROM ${table_name} WHERE id = '${id}'
            `)
            return this.toModel(result[0][0]);

        }catch(error){
            if(error instanceof Error){
                throw new Error(error.message)
            }
        }
    }

    async getPokemonsByFamilyId(family_id: number){
        try{
            const result = await BaseDatabase.connection.raw(`
                SELECT * FROM ${table_name} WHERE id = '${family_id}'
            `)
            return this.toModel(result[0][0]);

        }catch(error){
            if(error instanceof Error){
                throw new Error(error.message)
            }
        }
    }

    async getPokemonsByGeneration(){
        try{

        }catch(error){

        }
    }


}