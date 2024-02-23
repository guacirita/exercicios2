/**4. Crie uma função que receba uma string como parâmetro e 
 * retorne a mesma string com todas as letras em maiusculo. 
 * Faça uma segunda função que retorne em minusculo. */

function stringMaiuscula() {
  primeiraFrase = "eu sou um texto escrito em letras minúsculas";

  return primeiraFrase.toUpperCase();

}
console.log(stringMaiuscula());


function stringMinuscula() {
  segundaFrase = "EU SOU UM TEXTO ESCRITO EM LETRAS MAIÚSCULAS";

  return segundaFrase.toLowerCase();
}
console.log(stringMinuscula());