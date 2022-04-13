import { Pokemons, PokemonsByIdFamily, PokemonsGeneration } from './../../src/model/Pokemons';

export const pokemonsIdMock1 = new Pokemons(

    1,
    "Charmeleon",
    5,
    1,
    2,
    0,
    2,
    "fire",
    "",
    "Sunny/clear",
    "",
    403,
    158,
    129,
    116,
    0,
    1,
    1,
    0
    
)

export const pokemonsIdMock2 = new Pokemons(

    2,
    "Bulbasaur",
    5,
    3,
    2,
    0,
    18,
    "fire",
    "",
    "Sunny/clear",
    "",
    403,
    158,
    129,
    116,
    0,
    1,
    1,
    0
    
)

export const pokemonsByIdFamilyMock1: PokemonsByIdFamily = {
    id: 1,
    name :"Bulbasaur",
    pokedex_number:5,
    generation:3,
    family_id: 96,
    evolution_stage: 2
}

export const pokemonsByIdFamilyMock2: PokemonsByIdFamily = {
    id: 2,
    name :"Charmander",
    pokedex_number:2,
    generation:3,
    family_id: 18,
    evolution_stage: 2
}

export const pokemonsByGeneration1 : PokemonsGeneration = {
    id: 390,
    name: "Turtwig",
    generation: 4,
    family_id: 0
}

export const pokemonsByGeneration2 : PokemonsGeneration = {
    id: 152,
    name: "Chikorita",
    generation: 2,
    family_id: 80
}





