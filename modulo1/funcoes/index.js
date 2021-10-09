//Exercícios de interpretação de códigos-----------------------

//1

//A) Vai multipicar o valor da variavel por 5, ficando assim 10 e 50.

//B) Vai dar undeffined ,pq diferente de uma variavel que não precisa estar presente para dar o resultado 
//o "console.log" precisa estar declarado.


//2

//A) Ela pede um texto ao usuário, e trasforma as letras em minúsculas e procura a palavra "cenoura" no texto
//se achar retorna true e se não retorna false.

//B)
//1- Eu gosto de cenouras ="eu gosto de cenouras", true.
// CENOURA e bom pra vista ="cenoura e bom pra vista" true.
// Cenouras crescem na terra ="cenouras crescem na terra" true.

//Exercícios de escrita de códigos-----------------------------

//1

//A)
function infosLari() { //sem informação no parâmetro
    console.log("Eu sou a larissa,tenho 19,moro no Rio e sou estudante")
 }
  infosLari()
 
 //B)
  function infos (nome,idade,cidade,profissao){
     console.log(`Eu sou ${nome},tenho ${idade} anos,moro no ${cidade} e sou ${profissao}`)
  }
 
 infos("larissa",19,"rio","estudante")
 
 //2
 
 //A)
  
 function somaDosNumeros(number1,number2) {
    const adicao = number1 +number2
    return adicao
 }
  console.log(somaDosNumeros(3, 3))
 
 //B)
 function maiorQueOSegundo(number1,number2){
    const comparacao = number1>=number2
    return comparacao
 }
 console.log(maiorQueOSegundo (10, 5))
 
 //C)
 function parOuNao(number1){
    const ePar = (number1%2 == 0)
    return ePar
 }
  console.log(parOuNao(6))
 
 //D)
 function mensagem(texto){
    const frase = texto.toUpperCase()
    return ` a frase tem ${frase.length} letras,${frase}`
 }
   console.log(mensagem("batata"))
 
 
 //3 
 function subtracao(num1,num2){
    const sub = Number(num1) - Number(num2)
    return sub
 }
 
 function soma(num1,num2){  
    const so = Number(num1) + Number(num2)
    return so
 }
 
 function multiplicacao(num1,num2){
    const multi = Number(num1) * Number(num2)
    return multi
 }
 
 function divisao(num1,num2){
    const divi = Number(num1) / Number(num2)
    return divi
 }
 
 const primeiroNum = prompt("insira um número:")
 const segundoNum = prompt("insira outro número:")
 
 console.log(`Números inseridos:${primeiroNum} e ${segundoNum}`)
 console.log(`soma:${soma(primeiroNum, segundoNum)}`)
 console.log(`subtração:${subtracao(primeiroNum, segundoNum)}`)
 console.log(`multiplicação:${multiplicacao(primeiroNum, segundoNum)}`)
 console.log(`divisão:${divisao(primeiroNum, segundoNum)}`)
 
 //Desafios 
 //1
 
 //A)
 
 const arrow = (rosa) => {
    return console.log(rosa)
 }
 //B)
 const aa = (oo, ii) => {
    const ee = oo + ii
    
    
 }
 arrow(aa)