/*
Escreva um programa que leia o número de um funcionário, seu número de horas trabalhadas, o
valor que recebe por hora e calcula o salário desse funcionário. A seguir, mostre o número e o salário
do funcionário, com duas casas decimais
*/
var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let [id,hoursWorked,hourlyRate]= lines

const salary = hoursWorked * hourlyRate

console.log(`NUMBER = ${id}
SALARY = U$ ${salary.toFixed(2)}`)