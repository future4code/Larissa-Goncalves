import { UserController } from './controller/UserController';
import { app } from "./controller/app"

const userController = new UserController()


app.post('/signup', userController.signup )
app.post('/login', userController.login )



