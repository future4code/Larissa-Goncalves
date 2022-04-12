import { PokemonsController } from './../controller/PokemonController';
import express from 'express';


export const pokemonRouter = express.Router()

const pokemonController = new PokemonsController()

pokemonRouter.get("/by/:id", pokemonController.getPokemonsById)