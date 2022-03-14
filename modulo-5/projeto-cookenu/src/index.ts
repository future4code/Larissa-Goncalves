import app from "./app";
import signUp from './endpoints/signUp';
import login from './endpoints/login';
import getProfile from './endpoints/getProfile';
import getUserById from './endpoints/getUserById';
import createRecipes from './endpoints/createRecipes';
import getRecipesById from './endpoints/getRecipeById';


app.post('/users/signup', signUp)
app.post('/users/login', login)
app.get('/users/profile', getProfile)
app.get('/users/:id/profile', getUserById)


app.post('/recipes', createRecipes)
app.get('/recipes/:id', getRecipesById)



