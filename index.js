/* Escreva um projeto que escreva os números de 1 a 1000, substituindo os múltiplos
de 3 por `fizz` e os múltiplos de 5 por `buzz`. Os multiplos de 3 e 5 são
substituídos por `FizzBuzz`.
*/

for(i = 1; i <= 100; i++){ 
  multiplo3 = i%3 // 0.33 = 1%3
  multiplo5 = i%5
  multiplo35 = i%15
  if(multiplo35 == 0){ 
    console.log('FizzBuzz', i)
  }
  else if(multiplo3 == 0){ // if 0.33
    console.log('fizz', i)
  }
  else if(multiplo5 == 0){ // if 0.2
    console.log('buzz', i)
  }
  else 
    console.log(i)
}

/* Coloquei o múltiplo 3 e 5 antes pois se ele já for múltiplodos dois já imprime
o fizzbuzz, se eu colocasse lá embaixo ele iria primeiro ler os dois primeiros e 
após iria imprimir o fizzbuzz, exemplo: 
*/
