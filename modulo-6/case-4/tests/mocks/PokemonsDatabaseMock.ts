import { pokemonsIdMock1, pokemonsIdMock2, pokemonsByIdFamilyMock1, pokemonsByIdFamilyMock2, pokemonsByGeneration1, pokemonsByGeneration2 } from './PokemonsModelMock';
import { Pokemons } from "../../src/model/Pokemons";


export class PokemonsDatabaseMock {

    async getAllPokemons(): Promise<Pokemons[] | undefined | any> {
        return ({ pokemonsIdMock1, pokemonsIdMock2 })
    }

    async getPokemonsById(id: number): Promise<Pokemons | any> {
        if (id === 1) {
            return pokemonsIdMock1
        } else if (id === 2) {
            return pokemonsIdMock2
        } else {
            undefined
        }
    }

    async getPokemonsByFamilyId(family_id: number): Promise<Pokemons[] | undefined | any> {
        if (family_id === 96) {
            return pokemonsByIdFamilyMock1
        } else if (family_id === 18) {
            return pokemonsByIdFamilyMock2
        } else {
            undefined
        }
    }

    async getPokemonsByGeneration(generation: number): Promise<Pokemons[] | any> {
        if (generation === 390) {
            return pokemonsByGeneration1
        } else if (generation === 152) {
            return pokemonsByGeneration2
        } else {
            undefined
        }
    }

    async getInfoPokemons(id: number): Promise<Pokemons | any> {
        if (id === 1) {
            return pokemonsIdMock1
        } else if (id === 2) {
            return pokemonsIdMock2
        } else {
            undefined
        }
    }

    async getPokemonsByName(name: string): Promise<Pokemons[] | any> {
        if (name === "Charmeleon") {
            return pokemonsIdMock1
        } else if (name === "Bulbasaur") {
            return pokemonsIdMock2
        } else {
            undefined
        }
    }
}

