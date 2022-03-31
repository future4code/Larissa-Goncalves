import {AddressInfo} from "net";
import express from "express"
import dotenv from "dotenv"

dotenv.config();

const app = express();
app.use(express.json());

const server = app.listen(3007, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Servidor rodando em http://localhost:${address.port}`);
    } else {
      console.error(`Falha ao rodar o servidor.`);
    }
  });

  export default app;
  