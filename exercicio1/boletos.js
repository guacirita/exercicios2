/* 1 - Faça um programa, com uma função que necessite de três argumentos, 
e que forneça a soma desses três argumentos através de uma função. .
Seu script também deve fornecer a média dos três números, 
através de uma segunda função que chama a primeira. */



function somaBoletos(aluguel, internet, contaDeLuz) {
  aluguel = 1500;
  internet = 200;
  contaDeLuz = 150;
  let boletos = aluguel + internet + contaDeLuz;
  return boletos;
}

console.log(somaBoletos());

function mediaDespesas() {
  somaBoletos();
  let resultado = somaBoletos() / 3;
  return resultado.toFixed(2);

}

console.log(mediaDespesas());