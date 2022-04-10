import dotenv from 'dotenv';
import knex from "knex";
import { table_name } from './data/BaseData';


dotenv.config();

export const connection = knex({
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
          user: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_SCHEMA,
          port: 3306,
          multipleStatements: true,
    },
});

    connection.raw(`
        CREATE TABLE IF NOT EXISTS ${table_name}(
            id VARCHAR(255) PRIMARY KEY,
            date DATE NOT NULL,
            duration ENUM("30", "60") DEFAULT "30",
            pet_number INT NOT NULL,
            start VARCHAR(255) NOT NULL,
            finish VARCHAR(225) NOT NULL,
            status ENUM("FINALIZADO", "PENDENTE", "EM ANDAMENTO") DEFAULT "PENDENTE",
            price VARCHAR(255) NOT NULL
        );  

        
    `).then(() => console.log(
        'Tabelas criadas com sucesso!'
    )).catch(error => 
        console.log('Algo deu errado', error.message)
        ).finally(() => {
            connection.destroy()
        })

