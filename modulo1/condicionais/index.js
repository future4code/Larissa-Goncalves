//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGOS.
//1
/*A) O código quer saber se o número que o usuário vai digitar é 
divisivel por 2 e restando 0 para ser true.*/
//B) Para números pares que vão restar 0.
//C) Para números ímpares que vão restar 1.

//2
//A) Para informar o valor da fruta escolhida para o usuário.
//B) ("O preço da fruta ", maçã, " é ", "R$ ", 2.25)
//C) ("O preço da fruta ", pera, " é ", "R$ ", 5.0) por que o break da a parada do case, sem ele o programa ainda rodaria.

//3
//A) Pedindo ao usuário um número.
//B) primeiro vai dar "esse número passou no teste. o -10 vai dar um erro por que o console.log dele tá fora do escopo do bloco de if.
//C) sim, vai ter um erro no console, porque o que foi chamado foi o id do bloco e não da função inicial.

//EXERCÍCIOS DE ESCRITA DE CÓDIGOS.
//1------------------------------------------------------------------

const idadeDoUsuario = Number(prompt("Qual a sua idade?"))

    if(idadeDoUsuario >= 18) {
        console.log("você pode dirigir!")

    }else {
        console.log("Desculpe,você não pode dirigir!")
    }
        
//2-------------------------------------------------------------------

const turnoDoUsuario1 = prompt("Em qual turno você estuda M/V/N ?").toUpperCase()

    if(turnoDoUsuario1 === "M"){
        console.log("Bom dia!")
    }else if (turnoDoUsuario1 === "V"){
        console.log("Boa tarde!")
    }else if (turnoDoUsuario1 === "N"){
        console.log("Boa noite!")
    }

//3-------------------------------------------------------------------

const turnoDoUsuario2 = prompt("Em qual turno você estuda M/V/N ?").toUpperCase()

    switch (turnoDoUsuario2)
    {
        case "M":
            console.log("Bom dia!")
            break;
        case "V":
            console.log("Boa tarde!")
            break;
        case "N":
            console.log("Boa noite!")
            break;
        default:
    }       

//4----------------------------------------------------------------------

const generoDoFilme = prompt("Gênero do filme que quer assistir:")
const precoDoIngresso = prompt("Preço do ingresso:")

    if(generoDoFilme === "fantasia" && precoDoIngresso <= 15){
        console.log("Bom filme!")
    }else {
        console.log("Que pena,escolha outro filme :(")
    }
    
/----------------------------///DESAFIOS///-----------------------------/
//1

const generoDoFilme1 = prompt("Gênero do filme que quer assistir:")
const precoDoIngresso1 = prompt("Preço do ingresso:")
const lanchinho = prompt("qual lanchinho você vai querer:")


    if(generoDoFilme1 === "fantasia" && precoDoIngresso1 <= 15){
        console.log(`Bom filme!,e aproveite o seu ${lanchinho}.`)
    }else {
        console.log("Que pena,escolha outro filme :(")
    }

//2-------------------------------------------------------------------------

const nomeCompleto = prompt("Digite seu nome completo:")
const tipoDeJogo = prompt("Digite o tipo de jogo: IN-internacional ou DO-domestico").toUpperCase()
const etapaDoJogo = prompt("Digite a etapa do jogo: SF-semi-final, DT-decisão de terceiro lugar ou FI-final").toUpperCase()
const categoriaDoJogo = Number(prompt("Digite a categoria do jogo 1,2,3 ou 4?"))
const numeroDeIngressos= Number(prompt("Digite a quantidade de ingressos:"))
   
let totalDoValor 
let valorDoIngresso
let valorDoDolar = 4.10


if(tipoDeJogo === "DO" && etapaDoJogo === "SF"){
    let valorDaCategoria

    switch (categoriaDoJogo)
        {
            case 1:
                valorDaCategoria = 1320
                break;
            case 2:
                valorDaCategoria = 880
                break;
            case 3:
                valorDaCategoria = 550
                break;
            case 4:
                valorDaCategoria = 220
                break;
            default:

        } 
        
    totalDoValor = (numeroDeIngressos * valorDaCategoria)
    valorDoIngresso = valorDaCategoria

} else if (tipoDeJogo === "DO" && etapaDoJogo === "DT"){
        let valorDaCategoria
    
    switch (categoriaDoJogo)
        {
            case 1:
                valorDaCategoria = 660
                break;
            case 2:
                valorDaCategoria = 440
                break;
            case 3:
                valorDaCategoria = 330
                break;
            case 4:
                valorDaCategoria = 170
                break;
            default:
    
        } 
        
        totalDoValor = (numeroDeIngressos * valorDaCategoria)
        valorDoIngresso = valorDaCategoria
    
    } else if(tipoDeJogo === "DO" && etapaDoJogo === "FI") {
        let valorDaCategoria
    
     switch (categoriaDoJogo)
        {
            case 1:
                valorDaCategoria = 1980
                break;
            case 2:
                valorDaCategoria = 1320
                break;
            case 3:
                valorDaCategoria = 880
                break;
            case 4:
                valorDaCategoria = 330
                break;
            default:
    
        } 
        
        totalDoValor = (numeroDeIngressos * valorDaCategoria)
        valorDoIngresso = valorDaCategoria
    }

    if(tipoDeJogo === "IN" && etapaDoJogo === "SF"){
        let valorDaCategoria
    
    switch (categoriaDoJogo)
        {
            case 1:
                valorDaCategoria = 1320
                break;
            case 2:
                valorDaCategoria = 880
                break;
            case 3:
                valorDaCategoria = 550
                break;
            case 4:
                valorDaCategoria = 220
                break;
            default:
    
        } 
        
        totalDoValor = ((numeroDeIngressos * valorDaCategoria) / valorDoDolar)
        valorDoIngresso = (valorDaCategoria / valorDoDolar)
    
    } else if (tipoDeJogo === "IN" && etapaDoJogo === "DT"){
            let valorDaCategoria
        
        switch (categoriaDoJogo)
            {
                case 1:
                    valorDaCategoria = 660
                    break;
                case 2:
                    valorDaCategoria = 440
                    break;
                case 3:
                    valorDaCategoria = 330
                    break;
                case 4:
                    valorDaCategoria = 170
                    break;
                default:
        
            } 
            
            totalDoValor = ((numeroDeIngressos * valorDaCategoria)/ valorDoDolar)

            valorDoIngresso = (valorDaCategoria / valorDoDolar )
        
        } else if(tipoDeJogo === "IN" && etapaDoJogo === "FI") {
            let valorDaCategoria
        
         switch (categoriaDoJogo)
            {
                case 1:
                    valorDaCategoria = 1980
                    break;
                case 2:
                    valorDaCategoria = 1320
                    break;
                case 3:
                    valorDaCategoria = 880
                    break;
                case 4:
                    valorDaCategoria = 330
                    break;
                default:
        
            } 
            
            totalDoValor = ((numeroDeIngressos * valorDaCategoria) / valorDoDolar )
            valorDoIngresso = (valorDaCategoria / valorDoDolar )
        
    
        }

let jogo 
switch (etapaDoJogo)
    {
        case "SF":
            jogo = "Semi-final"
            break;
        case "DT":
            jogo = "Decisão de terceiro"
            break;
        case "FI":
            jogo = "Final"
            break;
        default:

    }       
    
let tipo
switch (tipoDeJogo)
    {
        case "DO":
            tipo = "Nacional"
            break;
        case "IN":
            tipo = "Internacional"
            break;
        default:
    }     

console.log(`Nome do cliente:${nomeCompleto}`)
console.log(`Tipo do jogo:${tipo}`)
console.log(`Etapa do jogo:${jogo}`)
console.log(`Categoria:${categoriaDoJogo}`)
console.log(`Quantidade de ingressos:${numeroDeIngressos}`)

 if(tipoDeJogo === "IN"){
    console.log(`valor de ingresso: U$ ${valorDoIngresso}`)
    console.log(`Valor total:U$ ${totalDoValor}`)
 }else if(tipoDeJogo === "DO") {
    console.log(`Valor do ingresso:R$${valorDoIngresso}`)
    console.log(`Valor total:R$ ${totalDoValor}`)
 }