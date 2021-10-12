// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(num1, num2) {
  // implemente sua lógica aqui
  const altura = Number(prompt("digite a altura:"))
  const largura = Number(prompt("digite a largura:"))

  const resultado =  altura * largura

  console.log(resultado) 
}
 

// EXERCÍCIO 02
function imprimeIdade(num1,num2) {
  // implemente sua lógica aqui
  const anoaAtual= Number(prompt("digite o ano atual:"))
  const anoDeNascimento = Number(prompt("digite o ano do seu nascimento:"))

  const resultado = anoaAtual - anoDeNascimento
  console.log(resultado)
}
  

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return imc = peso / (altura * altura)
}
  // console.log(calculaIMC(68, 1,65))


// EXERCÍCIO 04
function imprimeInformacoesUsuario(nome, idade, email) {
  const a = prompt("qual o seu nome?")
  const b = Number(prompt("qual a sua idade?"))
  const c = prompt("qual o seu email?")
  const mensagem = `Meu nome é ${a}, tenho ${b} anos, e o meu email é ${c}.`
  console.log(mensagem)
  
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL. 
}
   

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("digite a primeira cor:")
  const cor2 = prompt("digite a segunda cor:")
  const cor3 = prompt("digite a segunda cor:")
  const resultado = [cor1, cor2, cor3]
  console. log(resultado)
  // implemente sua lógica aqui

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  var texto = "oi".toUpperCase()
  return(texto)

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const a =Number(3000) / Number(100)
  const b =Number(5500) / Number(50)
  const resultado = (a, b)
  return (resultado)
  // implemente sua lógica aqui

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}