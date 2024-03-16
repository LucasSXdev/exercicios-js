/*Neste problema, deve-se ler o código de uma peça 1, o número de peças 1, o valor unitário de cada
 peça 1, o código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2.
  Após, calcule e mostre o valor a ser pago.
*/

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const [id1,num1,value1]= lines[0].split(' ')
const[id2,num2,value2]= lines[1].split(' ')

let total = (num1*value1)+(num2*value2)

console.log("VALOR A PAGAR: R$ "+total.toFixed(2))








