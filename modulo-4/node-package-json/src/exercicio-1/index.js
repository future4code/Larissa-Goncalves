//Exercício 1

// A)
//Utilizando o process e a ordem do index

// B)
const nome = process.argv[2]
const idade = Number(process.argv[3])

// C)
const novaIdade = idade + 7;

console.log(`olá ${nome}! Você tem ${idade} anos. Em sete anos você terá ${novaIdade}`)