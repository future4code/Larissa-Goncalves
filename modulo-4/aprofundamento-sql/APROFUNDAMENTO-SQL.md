use `carver-larissa-de-souza-lanes-goncalves`;

SET SQL_SAFE_UPDATES = 0;

#1
-- a
#Altera a tabela ator apagando a coluna salário.
-- b
#Altera a tabela ator e muda a coluna genero para sexo fazendo o banco de dados só aceitar strings até 6 agora.
-- c
#Altera a tabela ator e a coluna genero fazendo aceitar só 255 caractéres.
-- d
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

#2
-- a
UPDATE Actor SET name =" Fernandinha montenegro" WHERE id = "003";
UPDATE Actor SET birth_date = "1930-10-12" WHERE id = "003";
-- b
UPDATE Actor SET name = "JULIANA PAES" WHERE id = "005";
UPDATE Actor SET name = "juliana paes" WHERE id = "005";
-- c
UPDATE Actor SET 
name = "ana maria braga",
birth_date = "2020-02-10",
salary = 6030,
gender = "female"
WHERE id = "001";
-- d 
UPDATE Actor SET name = "Larissa" WHERE id = "010";
/*Não houve nenhum erro na atualização*/

#3
-- a
DELETE from Actor WHERE id = "002";
-- b
DELETE FROM Actor
WHERE
	gender = "male" AND
	salary > 1000000;

#4
-- a
SELECT MAX(salary) as menor_salario_entre_todos  FROM Actor;
-- b
SELECT MIN(salary) as  menor_salario_entre_as_atrizes  FROM Actor WHERE gender = "female";
-- c 
SELECT COUNT(*) as QUANTAS_ATRIZES FROM Actor WHERE gender = "female";
-- d-
SELECT SUM(salary) as A_soma_de_todos_os_salario  FROM Actor;

#5
-- a
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;
# conta quantos atores e atrizes de cada genero há na tabela
-- b 
SELECT id, name FROM Actor
ORDER BY name DESC;
# Id e nome em ordem decrescente a partir do nome
-- c
SELECT * FROM Actor
ORDER BY salary;
# ordem salarial crescente não declarou o tipo então ficou default
-- d 
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
# separou por ordem salarial decrescente com um limite de tres pessoas
-- e
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;
# media salarial dos homens e das mulheres 

#6

-- a
ALTER TABLE Movie ADD playing_limit_date DATE;
-- b 
ALTER TABLE Movie CHANGE rating rating FLOAT;
-- c
UPDATE Movie
SET
	playing_limit_date = "2020-12-31"
WHERE id = "001";
-- d
DELETE FROM Movie WHERE id = "001";

SELECT * from Actor;