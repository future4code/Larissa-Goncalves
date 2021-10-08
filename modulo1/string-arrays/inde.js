//Exercícios de interpretação de código

//1

// a-vai dar undefined por que a array não está especificada.
// b-o comando null representa um valor nulo e vazio.
// c-vai dizer o tamanho da string,poís é o que comando length executa.
// d-preocurou o número 3
// e-preocurou o número 19
// f-preocurou o número 6

//2

/*o touppercase transforma todas as letras da frase que o usuario escrver em maiúsculas e o 
replaceall vai trocar todas as letras A por letras I, o comando lenght diz o tamanho de uma string */

 /*subi num ônibus em marrocos
 ficaria: SUBI NUM ONIBUS EM MIRROCOS*/
 
//Exercícios de criação de código

//1 tudo funcionando

const nomeDoUsuario=prompt("Qual o seu nome?")
const emailDoUsuario=prompt("Qual o seu email?")

//CONCATENAÇÃO//

const frase = "Olá,o email" + emailDoUsuario + "foi cadastrado com sucesso" + "Bem vindo(a)" + nomeDoUsuario + "!"
console.log(frase)

//TEMPLATE STRING//

const frase = `Olá,o email ${emailDoUsuario} foi cadastrado com sucesso , bem vido(a) ${nomeDoUsuario} !`
console.log(frase)

//2

const comidasPreferidas = ["macarrão","lasanha","empanado","sorvete","batata frita"]

console.log(comidasPreferidas)

console.log("essas são as minhas comidas preferidas:")

console.log(comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log(comidasPreferidas[2])
console.log(comidasPreferidas[3])
console.log(comidasPreferidas[4])

const usuario =prompt("qual a sua comida preferida?")

//Não está funcionando---------parte de substituir e imprimir um novo
const novaLista = `comidasPreferidas`.replaceAll("macarrão", "usuario")
console.log(novaLista)

//3 falta-----adicionar dentro das arryas

const listaDeTarefas = []

const primeiraTarefa = prompt("1 tarefa do dia:")
const segundaTarefa = prompt("2 tarefa do dia:")
const terceiraTarefa = prompt("3 tarefa do dia:")

console.log(listaDeTarefas)

const indice=prompt("indice da tarefa que vocẽ já realizou? 0,1 ou 2")

console.log(feito)

//DESAFIO---- usar cada palavra da frase dentro de um array

//1
const frase=prompt("diga-me uma frase")

//2 ---- achar o índice do abacaxi

var frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
console.log(frutas.length)
