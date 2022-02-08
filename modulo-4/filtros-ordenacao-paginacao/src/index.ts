// import { getAllUsers } from './endpoints/getAllUsers';
import { app } from "./app";
import { getAllRecipes } from "./endpoints/getAllRecipes";

app.get("/recipes", getAllRecipes)
// app.get("/users", getAllUsers)