var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const [name,salary,sales]=lines

const total = Number(salary)+ (15 * Number(sales)/100)

console.log("TOTAL = R$ "+total.toFixed(2))