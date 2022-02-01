USE `carver-larissa-de-souza-lanes-goncalves`;

###1

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

/*
A - O float representa um número não inteiro onde recebe mais de uma casa decimal, o varchar é o comando de tipagem que diz que o meu id, 
name e gender serão textos tipo strings.
o date pede uma data sem tempo e em formato ano/mes/dia, Not null diz que é obrigatório o dado ser inserido, 
e o primary key representa como o usuário vai ser encontrado no banco de dados e por tanto se torna obrigátorio. 
entre parênteses está a quantidade máxima
de strings que podem ser enviadas ao banco de dados.
*/

/* 
B - o show databases retornou duas linhas, uma com a informação do schema e outra com o meu dataBase de usuário do banco de dados.
O Show tables me retorna a pasta onde foi criada a minha tabela.
*/

SHOW DATABASES;
SHOW TABLES;

###C - Descreve a tabela e a tipagem de cada coluna da tabela selecionada mais se é not null ou null de undefined.

DESCRIBE Actor;

###2

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

###A)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"002",
"Gloria Pires",
 1200000 ,
 "1963-08-23",
 "feme"
), 
(
"002",
"Suzanna vieira",
 150000 ,
 "1945-01-20",
 "feme"
);

#B- Ele da o erro 'Duplicate entry '002' for key 'PRIMARY', que traduzida fica 'Entrada duplicada '002' para chave 'PRIMARY'.

###C- Mesagem de ERRO ->'A contagem de colunas não corresponde a quantidade de parâmetros' Mesagem de OK -> 'Uma linha afetada'

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

###D- Mensagem de ERRO -> 'Código do erro: 1364. O campo 'name' não possui um valor padrão 0,133 seg' Mesagem de OK -> '1 linha afetada'

INSERT INTO Actor (id,name, salary, birth_date, gender)
VALUES(
  "004",
  "Caio castro",
  400000,
  "1949-04-18", 
  "male"
);

###E- Mensagem de Erro -> 'Valor de data incorreto : '1950' para a coluna 'birth_date' na linha 1 0,133 seg' Mensagem de OK -> '1 linha afetada'
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

###F-
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);

###3
###A
SELECT id, name from Actor WHERE gender = "female";
###B
SELECT salary, name from Actor WHERE name = "Tony ramos";
###C
SELECT id, name from Actor WHERE gender = "invalid";
#todos seriam invalidos ja que não há pessoas com o genero invalido.
###D
SELECT id, name, salary from Actor WHERE salary > 500000;
###E
SELECT id, name from Actor WHERE id = "002";
#Mensagem de ERRO -> 'Coluna desconhecida 'nome' na 'lista de campos' 0,133 seg' Mensagem de OK  -> '1 linha retornada '

###4
###A-ele compara as strings checando de há as letras A e j no inicio do nome e acha um salário maior que 300000
###B
SELECT id, name from Actor WHERE (name NOT LIKE 'A%' OR name NOT LIKE 'a%') AND salary > 3500000;
###C
SELECT id, name FROM Actor WHERE name LIKE "%g%" OR name LIKE "%G%";
###D
SELECT id, name FROM Actor WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")AND salary BETWEEN 350000 AND 900000;





