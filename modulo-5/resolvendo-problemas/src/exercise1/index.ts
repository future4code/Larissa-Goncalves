//Receber dois parametros no input e retornar um output true or false

const oneEdit = ( A:string, B:string): boolean => {
    //verifica se os dois paramentos tem "match" algo em comum e se tem o número de letras diferentes
    if (Math.abs(A.length - B.length) > 1) return false
    //se não ele inclúi as e verifica
    if (A.length > B.length) return A.includes(B)
    if (B.length > A.length) return B.includes(A)

    let charsDiffCount = 0
    for (let i = 0; i < A.length; i++) {
    if (A[i] !== B[i]) charsDiffCount++
}

    // Retorna true se a diferença é 1, false caso contrário
    //se a diferença for mais de um ele entende que a palavra não foi criada a partir
    // desta mesma palavra
    return charsDiffCount === 1
}

console.log(oneEdit("maça", "maçaa"))