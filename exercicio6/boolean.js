/**6. Crie uma função que receba um número como parâmetro e 
 * verifique se ele é um quadrado perfeito. 
 * Um quadrado perfeito é um número que pode ser expresso 
 * como o produto de dois números iguais. 
 * Retorne true se for um quadrado perfeito e false se não for. */

function quadradoPerfeito(numero) {
  if(Math.sqrt(numero) % 1 === 0){
    return true;
  } else {
    return false;
  }
}

console.log(quadradoPerfeito(51));