/**9. Desenvolva uma função que converta uma temperatura de 
 * Celsius para Fahrenheit. A função deve receber a 
 * temperatura em Celsius como parâmetro e retornar a temperatura convertida. */


convertCelsiusToFahrenheit(25);

function convertCelsiusToFahrenheit(Celsius){
  let tempConverte = (Celsius * 9 / 5) + 32;

 
  console.log(`${Celsius} graus celsius equivalem a ${tempConverte} F`);
}




