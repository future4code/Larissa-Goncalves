import { PokemonsDatabase } from './../src/data/PokemonDatabase';
import { PokemonsBusiness } from '../src/business/PokemonsBusiness';
import { PokemonsDatabaseMock } from './mocks/PokemonsDatabaseMock';
import { pokemonsIdMock1 } from './mocks/PokemonsModelMock';

const pokemonBusinessMock = new PokemonsBusiness(
    new PokemonsDatabaseMock() as PokemonsDatabase
)

describe("testes pokemon business", () => {

    test("caso a paginação não seja passada", async () => {
        expect.assertions(2)
        try{
            await pokemonBusinessMock.getAllPokemons(1, 6)

        }catch(e: any){
            expect(e.message).toEqual("Preencha corretamente todos os dados da paginação")
            expect(e.statusCode).toBe(400)
        }
    })
    

    test("pegar o pokemon pelo id", async() => {
        expect.assertions(1)

        try{
            await pokemonBusinessMock.getPokemonsById(1)

        }catch(e: any){
            expect(e.message).toEqual("Passe o id do pokemon")
            expect(e.statusCode).toBe(403)

        }
    })

    test("Pegar o pokemon pelo nome", async() => {
        expect.assertions(1)

        try{

            const result = await pokemonBusinessMock.getPokemonByName("Bulbasaur")

            return result

        }catch(e: any){
            expect(e.message).toEqual("Passe o nome do pokemon")
            expect(e.statusCode).toBe(403)
        }
  
    })

    test("informe um id valido para pegar as infos", async() => {
        expect.assertions(2)
        try{
            const result = await pokemonBusinessMock.getInfoPokemons(1)
            expect(result).toEqual(pokemonsIdMock1)

        }catch(e: any){
            expect(e.message).toEqual("Pokemon não encontrado")
            expect(e.statusCode).toBe(403)
        }
    })

})