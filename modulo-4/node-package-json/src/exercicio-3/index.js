const listaDeTarefas = [
    "lavar a louça",
    "passear com o cachorro",
    "codar",
    "limpar o quarto"
]

const addTarefa = process.argv[2] 

process.argv[2] && listaDeTarefas.push(addTarefa)

addTarefa && console.log("Adicionado com sucesso!")

console.log(`Lista Atualizada: ${listaDeTarefas}`)