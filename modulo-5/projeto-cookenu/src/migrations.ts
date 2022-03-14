import connection from "./connection";
import { recipesTableName, userTableName } from "./types/user";

        connection.raw(`
            CREATE TABLE IF NOT EXISTS ${userTableName} (
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL UNIQUE,
                password VARCHAR(255) NOT NULL
            );

            CREATE TABLE IF NOT EXISTS ${recipesTableName}(
                id VARCHAR(255) PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                description VARCHAR(255) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                author_id VARCHAR(255),
                FOREIGN KEY (author_id) REFERENCES ${userTableName} (id)
            );

        `).then( () => console.log(
            'Tabela criada com sucesso!'
            )).catch(error => 
                console.log('algo deu errado')
            ).finally( () => {
                connection.destroy()
            })


 