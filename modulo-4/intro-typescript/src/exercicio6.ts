function operacoes (number1 : number, number2 : number) {

    const soma = number1 + number2
    const subt = number1 - number2
    const mult = number1 * number2
    var compara = 0
    if(number1 >= number2){
        compara = number1
    }else if (number1 <= number2){
        compara = number2
    }
    
    return(`soma:${soma} subtração:${subt} multiplicação:${mult} o maior é o:${compara}`)
}

const number1: number = Number (process.argv[2])
const number2: number = Number (process.argv[3])

console.log(operacoes(number1, number2))