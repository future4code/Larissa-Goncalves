function checaRenovacaoRG(anoAtual : number, anoNascimento: number, anoEmissao : number): boolean{
  
   
 
    const idade = anoAtual - anoNascimento
    const tempoCarteira = anoAtual - anoEmissao
 
    const cond1 = idade <= 20 && tempoCarteira >= 5
    const cond2 = idade > 20 && idade <= 50 && tempoCarteira >= 10
    const cond3 = idade > 50 && tempoCarteira >= 15
 
    return (cond1 || cond2 || cond3)
 }
 
 const anoAtual : number = Number(process.argv[2])
 const anoNascimento : number = Number(process.argv[3])
 const anoEmissao : number = Number (process.argv[4])


 console.log(checaRenovacaoRG(anoAtual, anoNascimento, anoEmissao))