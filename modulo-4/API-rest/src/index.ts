import express from 'express'
import cors from 'cors'
import { Request, Response} from 'express'

const app = express()

app.use(express.json())


app.listen(3001, () => {
    console.log('server is running in door 3001')
})

app.get('/', (req: Request, res: Response) => {
    res.send('deu certo a req').status(200)
})
