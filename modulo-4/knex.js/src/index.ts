import express, { Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { connection } from "./connection";
import { Request, Response } from "express";

const app: Express = express();
app.use(express.json());
app.use(cors());

//EXERCÍCIOS KNEX.JS
//1
const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = '${id}'
    `)
  
      return result[0][0]
    // await connection('Actor')
    // .select().where('id', id);
  }
  
  //A - temos a  resposta no console.log mas não no postman ele não retorna um corpo para requisição. ERROR MENSAGE: 'no body returned for response'
  //B -
  const searchActor = async (name: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = "${name}"
    `)
    return result
  }

  app.get
//C -
const countActors = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `);
    const count = result[0][0].count;
    return count;
  };

  //2
  //A-
  /*minha própria lógica aplicada, sentido? tem? fazer a requisição par ver, por que o raw difere a função?*/
  const changeSalary = async (id: string, salary: number ): Promise<any> => {
    //   await connection('Actor')
    //   .update({salary: salary,})
    //   .where('id', id);
    const result = await connection.raw(`
    UPDATE Actor 
    SET salary = '${salary}'
    WHERE id = '${id}'`);
    return result;
  };

  //B-
  //Lógica dos notion
const deleteActor = async (id: string): Promise<void> => {
    await connection('Actor')
    .delete()
    .where('id',id);
};
  //C-
  const avgSalary = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
      .avg("salary as average")
      .where({ gender });
  
    return result[0].average;
  };

  //3
  //A-
  app.get("/users/:id", async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
    //   await getActorById(req.body.id, req.body.salary);
    //   res.status(200).send({
    //     message: "Success",})
  
     console.log(await getActorById(id)) 
      res.end()
    } catch (error: any) {
          console.log(error.message)
      res.status(500).send("Unexpected error")
    }
  }) 

  //B-
  app.get("/actor", async (req: Request, res: Response) => {
    try {
      const count = await countActors(req.query.gender as string);
      res.status(200).send({
        quantity: count,
      });
    } catch (err: any) {
      res.status(400).send({
        message: err.message,
      });
    }
  });


  //4
  //A-
  app.put("/actor", async (req: Request, res: Response) => {
    try {
      await changeSalary(req.body.id, req.body.salary);
      res.status(200).send({
        message: "Success",
      });
    } catch (err: any) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

  //B-
  app.delete("/actor/:id", async (req: Request, res: Response) => {
    try {
      await deleteActor(req.params.id);
    } catch (err: any) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

//CONEXÃO COM O SERVIDOR -->
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});