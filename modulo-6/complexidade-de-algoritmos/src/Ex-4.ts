function verifyIfExistRepeatedNumbers(listOfNumbers: number[]): boolean {
    for (let i = 0; i < listOfNumbers.length; i++) {
      if (listOfNumbers.indexOf(listOfNumbers[i]) !== i) {
        return true;
      }
    }
    return false;
  }

  //complexidade o(n) elevado a 2

  //O for gera um loop fazendo com que a complexidade do código rode 2 vezes até completar a chamada