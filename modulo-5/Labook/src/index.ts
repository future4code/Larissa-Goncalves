import { postRouter } from './router/PostRouter';
import { userRouter } from './router/UserRouter';
import app from './app'


app.use('/users', userRouter)
app.use('/posts', postRouter)













