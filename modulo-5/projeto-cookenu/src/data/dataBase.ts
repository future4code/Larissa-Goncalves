import {Knex, knex } from "knex";

export class dataBase{
    protected static connection: Knex = knex({
        client: "mysql",
        connection: {
        host: process.env.DB_HOST,
        port: 3003,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
      }
    })
}

//exemplo
// dataBase.connection()