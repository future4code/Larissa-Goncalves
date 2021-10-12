//Exercícios de interpretação de códigos.

//1
//a
//matheus nachtergaele, por que ele está na posição 0 do array.
//séria o selton mello que está na posição 1 do array elenco.
//canal globo já que ele a posição 2 nas transmissoes hoje.

//2
//a vai ser impresso as informações do cachorro do gato e da tartaruga.
//b o elemento spread é usado para espalhar os elementos de um array

//3
//a deu erro de syntax 
//b porque o indentificador "pessoa" já foi declarado.


//Exercícios de escrita de código.

//1

//a)
const pessoa = {
    nome: "larissa",
    apelidos: ["lari", "lissa", "lala"]
}
function nomes(){
    const pessoa = (`Eu sou ${pessoa.nome}, mas pode me chamar de: 
    ${pessoa.apelidos[0]},${pessoa.apelidos[1]},ou ${pessoa.apelidos[2]}`)
    return(pessoa)
}
    console.log(pessoa)

//b)
// const novapessoa = {...pessoa,apelidos = ["larissinha", "la", "L"]}
// console.log(novapessoa)
// function pessoa (novapessoa){
//     const nova = [...pessoa,apelidos = "larissinha", "la", "L"]
//     return (nova)
// }
// console.log(novapessoa)

//2
const pessoaA = {
    nome:"lara",
    idade: 50,
    profissao: "advogada"
}

function funcaoDoUsuarioA(pessoaA) {
    const resultado = [`${nome}, ${nome.length}, ${idade}, ${profissao}, ${profissao.length}`]
    return(pessoaA)
}
    console.log(pessoaA)


const pessoaB = {
    nome: "karina",
    idade: 28,
    profissao: "nutricionista"
}

function funcaoDoUsuario(pessoaB){
    const resultado = [`${nome}, ${nome.length}, ${idade}, ${profissao}, ${profissao.length}`]
    return(pessoaB)
}
    console.log(pessoaB)

//3
const carrinho = [frutas0, frutas1, frutas2]

const melao = {
    nome: "melão",
    disponibilidade: true
}

const melancia = {
    nome: "melancia",
    disponibilidade: true
}

const limao = {
    nome: "limão",
    disponibilidade: true 
}
const frutas0 = (melao) => {
    carrinho.push(melao)
    return(frutas0)
}
const frutas1 = (melancia) => {
    carrinho.push(melancia)
    return(frutas1)
}
const frutas2 = (limao) => {
    carrinho.push(limao)
    return(frutas2)
}

console.log(carrinho )

//DESAFIOS 
//1 
const nomeDoUsuario = prompt("seu nome:")
const idadeDoUsuario = Number(prompt("sua idade:"))
const profissaoDoUsuario = prompt("sua profissão:")

const informacoes = {
    nome: nomeDoUsuario,
    idade: idadeDoUsuario,
    profissao: profissaoDoUsuario
}
const resultado = () => {
    const resultado = (`${nomeDoUsuario},${idadeDoUsuario},${profissaoDoUsuario}`)
    return(resultado)
}   
    console.log(resultado)

//2
const filmeA = {
    nome: "operação cúpido",
    anodelancamento: 1999,
}
const filmeB = {
    nome: "um olhar no paraíso",
    anodelancamento: 2010,
}
function trueorfalse(filmeA, filmeB){
    const a = Number(filmeA) < Number(filmeB)
    const b = Number(filmeA) === Number(filmeB)
    return
}
    console.log(filmeA, filmeB)

//3