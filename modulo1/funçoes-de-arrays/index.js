//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGOS
//1
//a vai imprimir os nomes e os apelidos seguidos do array.

//2
//a só os nomes, por que os apelidos não foram chamados.

//3
//a vai imprimir somente os apelidos diferentes de chijo.

//EXERCÍCIOS DE ESCRITA DE CÓDIGOS
//1-----------------------------------------------------------------------------------
const doguinhosDoPet = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 //a  Crie um novo array que contenha apenas o nome dos doguinhos-------------------------
//ok

 const pegarNomesDosPets = (doguinhosDoPet) => {
        return doguinhosDoPet.nome 
     }
      const nomeDospets =  doguinhosDoPet.map(pegarNomesDosPets)
      console.log(nomeDospets)
    
 //b Crie um novo array apenas com os cachorros salsicha------------------------------------
//ok

 const novoArraySalshichas = doguinhosDoPet.filter((salsicha) => {
    return salsicha.raca === "Salsicha"
 })
  
  console.log(novoArraySalshichas)

 //c Crie um novo array que possuirá mensagens para enviar para todos os clientes que ---------
 //são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% 
 //para tosar o/a [NOME]!"
//no

 const novoArrayPoodle = doguinhosDoPet.filter((poodle) => {

    return poodle.raca === "Poodle"
 })
    console.log(novoArrayPoodle)
    console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${doguinhosDoPet.nome}`)

 //2----------------------------------------------------------------------------------------
 const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
 //a crie um novo array que contenha apenas o nome de cada item
//ok

 const pegarNomeDosProdutos = (produtos) => {
         return produtos.nome
 }
 const nomeDosProdutos = produtos.map(pegarNomeDosProdutos)
        console.log(nomeDosProdutos)

 //b Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles
//ok

    const nomesEPrecos = produtos.filter((item) => {
        return item !== item.categoria
    })
        console.log(nomesEPrecos)

 //c Crie um novo array que contenha apenas os objetos da categoria Bebidas
//ok
 const bebidas = produtos.filter ((item) => {
        return item.categoria === "Bebidas"
 })
        console.log(bebidas)
  
 //d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
//no

 const palavraYpe = produtos.filter ((item) => {
    console.log(produtos.includes("Ypê"))
 })   
    if(item.nome === "Ypê") {
      //  return(palavraYpe)
    }
    console.log(palavraYpe)

 //e Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". 
 //Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"
//no 

 const soYpe = produtos.filter((item, index) => {
    return item.nome === "Ypê"
 })   
    console.log(soYpe)

 //////////////////////////////DESAFIOS////////////////////////////////////////////////////

//  //1
//  const pokemons = [
//     { nome: "Bulbasaur", tipo: "grama" },
//     { nome: "Bellsprout", tipo: "grama" },
//     { nome: "Charmander", tipo: "fogo" },
//     { nome: "Vulpix", tipo: "fogo" },
//     { nome: "Squirtle", tipo: "água" },
//     { nome: "Psyduck", tipo: "água" },
//  ]
//  //a Crie um novo array que contenha apenas o nome dos pokémons em ordem alfabética

//  //b  Crie um novo array apenas com os tipos dos pokémons, sem repetição

//  const poke = pokemons.filter((item, index, array) => {
//     return item.tipo === "água", "grama"
//  })
 
//  console.log(poke)