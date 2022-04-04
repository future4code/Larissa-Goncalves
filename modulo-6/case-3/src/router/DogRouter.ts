import { DogController } from './../controller/DogController';
import express from "express";


export const DogRouter = express.Router();

const dogController = new DogController();

DogRouter.post('/createWalk', dogController.createWalk);