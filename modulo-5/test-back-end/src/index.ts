import app from "./app";
import { connection } from "./connection"
import { userRouter } from "./router/userRouter";

app.use("/users", userRouter);

connection.raw('SHOW TABLES').then(console.log)

