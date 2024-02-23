/*2. Faça um programa que recebe três números do usuário, 
e identifica o maior através de uma função e o menor número através de outra função. */

function digiteNumero() {
  let numero1 = prompt("Digite um número");
  let numero2 = prompt("Digite um segundo número");
  let numero3 = prompt("Digite um terceiro número");

  let numeros = [numero1, numero2, numero3];

  return numeros;

}

console.log(digiteNumero());

function maiorNumero(numero1, numero2, numero3) {

  if (numero1 > numero2 && numero1 > numero3) {
    maior = numero1;
  } else if (numero2 > numero1 && numero2 > numero3) {
    maior = numero2;
  } else {
    maior = numero3;
  }
  return maior;

}
console.log(maiorNumero(10, 20, 30));
console.log(`O maior número é ${maior}`);


function menorNumero(numero1, numero2, numero3) {

  if (numero1 < numero2 && numero1 < numero3) {
    menor = numero1;
  } else if (numero2 < numero1 && numero2 < numero3) {
    menor = numero2;
  } else {
    menor = numero3;
  }
  return maior;

}
console.log(menorNumero(10, 20, 30));
console.log(`O menor número é ${menor}`);