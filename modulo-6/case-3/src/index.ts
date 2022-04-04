import app from "./app";
import { DogRouter } from "./router/DogRouter";

// connection.raw('SHOW TABLES').then(console.log)

app.use('/dog', DogRouter)


