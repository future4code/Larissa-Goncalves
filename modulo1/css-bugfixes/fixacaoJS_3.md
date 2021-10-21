### Exercícios de JS da aula de Css-parte2
```
function calculaNota(ex, p1, p2) {
  let mediaDoAluno =Number((ex + p1 + p2 )/3)
    // Escreva seu código aqui
    if ( mediaDoAluno >= 9){
      return "A"
    }else if(mediaDoAluno < 9 && mediaDoAluno >= 7.5){
      return "B"
    }else if (mediaDoAluno < 7.5 && mediaDoAluno >= 6){
      return"C"
    }else{
      return"D"
    }
    
  }
  ```