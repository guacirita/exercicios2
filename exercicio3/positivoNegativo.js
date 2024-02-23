/**3. Faça um programa, com uma função que necessite de um argumento. 
 * A função retorna o valor de caractere ‘P’, se seu argumento for positivo, 
 * e ‘N’, se seu argumento for zero ou negativo. */

function argumento(idade) {
  if (idade > 18) {
    return "P";
  } else {
    return "N";
  }
}

console.log(argumento(55));
console.log(argumento(16));