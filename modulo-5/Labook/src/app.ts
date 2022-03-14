import  dotenv  from 'dotenv';
import express, { Express} from "express"
import cors from "cors"

dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())

app.listen(3001, () => {
    console.log("Server running on port 3001")
 })

 export default app;