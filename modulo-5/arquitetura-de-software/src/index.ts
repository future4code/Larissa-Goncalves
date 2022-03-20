import { TaskController } from './controller/TaskController';
import { UserController } from './controller/UserController';
import { app } from "./controller/app"

const userController = new UserController()
const taskController = new TaskController()

app.post('/User/signup', userController.signup )
app.post('/User/login', userController.login )


app.put('/task', taskController.createTask)
app.get('/task/:id', taskController.getTaskById)


