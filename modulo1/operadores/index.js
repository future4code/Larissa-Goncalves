//Exercícios de interpretação de código :

//1
/*false = porque && precisa que todos sejam true para ser verdadeiro
  false = precisa que todos sejam true para ser verdadeiro
  false = precisa que todos sejam || para ser false
  boolean = foi usada o comando typeof, que mostra o tipo da variável*/

  //2
/* vai aparecer para o usuário "digite um número" e "digite outro número"
   o programa devia somar o primeiro número + o segundo número, 
   mas ele concatenou os números e trasformou em strings */

//3
/* o código falta adicionar a parte dos valores de numbers para as variaveis
e para os números não se concatenarem */ 

//Exercícios de criação de códigos :

//1

const idadeDoUsuario =prompt("qual é a sua idade?");

const idadeDoAmigo=prompt("qual é a idade do seu melhor amigo(a)?");

console.log("sua idade é maior do que a do seu melhor amigo(a)?",idadeDoUsuario >= idadeDoAmigo);

console.log("a diferença de idade é:",idadeDoUsuario % idadeDoAmigo);

//2

const par=prompt("escreva um número par:");

console.log("resto:",par % 2);

//o padrão é sempre o mesmo, o de restar 0, já que um número par dividido para dois nunca resta nada.
//se inserir um número ímpar ele resta sempre 1 por que o programa só calcula números pares.

//3

const idadeAnos=prompt("qual a sua idade em anos ?");

console.log(meses= idadeAnos * 12 ,dias =idadeAnos * 365,horas = 24 * 365 * idadeAnos);

console.log("a sua idade em meses é:",meses,"meses","a  sua idade em dias é:",dias,"dias","a sua idade em horas é:",horas,"horas");

//4

const primeiroNumero=prompt("escreva um número:");

const segundoNumero=prompt("escreva outro número:");

console.log("o primeiro número é maior que o segundo?",primeiroNumero > segundoNumero);

console.log("o primeiro número é igual ao segundo?",primeiroNumero === segundoNumero);

console.log("o primeiro número é divisível pelo segundo?",primeiroNumero >- segundoNumero);

console.log("o segundo número é divisível pelo primeiro?",segundoNumero >- primeiroNumero);







