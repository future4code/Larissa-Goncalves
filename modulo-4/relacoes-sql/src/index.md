import express, { Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { Request, Response } from "express";
import { connection } from "./connection";

const app: Express = express();
app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});

//1- A uma chave estrangeira é um foreign key que referencia a primary key de uma outra tabela
//B
 CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"001",
    "Muito bom!",
    7,
		"004"
);

//C 
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"002",
    "Muito bom!",
    7,
		"010"
);
//diz que não pode ser feito um update em uma linha que não tem um filho válido

//D 
--ALTER TABLE Movie DROP COLUMN rating;

//E
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (carver-thiago-daurizio-feitoza-pereira.Rating, CONSTRAINT Rating_ibfk_1 FOREIGN KEY (movie_id) REFERENCES Movies (id))
// não posso apagar algo que está relacionado 



//2- A
CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
-- a tabela pega o id do filme e o id do ator e referencia a tabela de filmes e a de ator pelo id

# B
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"004",
    "001"
);
# C
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"000",
    "001"
);
/*23:06:09	INSERT INTO MovieCast(movie_id, actor_id) VALUES(   "000",     "001" )
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails 
(`carver-larissa-de-souza-lanes-goncalves`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`)
 REFERENCES `Movie` (`id`))	0,137 sec*/

a referencia da foreign key não acha o id do filme preocurado

# D
DELETE FROM Actor 
WHERE id = "001";

01:35:03	DELETE FROM Actor  WHERE id = '001'	Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`carver-larissa-de-souza-lanes-goncalves`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))	0,138 sec

//não posso apagar um ator sem apagar antes as referencias desse ator em outras tabelas

#3 - A
SELECT * FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;

//o operador on diz qual dado deve ser entrege no caso o dado do id do filme e da avaliação

#B
SELECT m.id as movie_id, r.rate as rating FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;