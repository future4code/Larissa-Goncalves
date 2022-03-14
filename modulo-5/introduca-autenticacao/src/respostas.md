### Exercícios Aula Intro-autenticação

### 1)
```
A)Usar strings vai ser sempre melhor, já que dá para usar caracteres especiais, diferente de Number.
```
#

### 2)
```
A) Primeiro tem o arquivo que conecta o meu servidor ao meu banco de dados SQL, depois tem uma função createUser que usa o metódo aync/await e faz a connection inserindo a tipagem dos dados ao meu endpoint.

B)
CREATE TABLE User (
		id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
```
#
### 3)
```
A)Para o arquivo JWT_KEY ver o token como uma string

```
