var input = require("fs").readFileSync("stdin","utf-8");
var lines = input.split('\n');

const [A,B,C,D]= lines

const diferenca = A*B - C*D

console.log("DIFERENCA = "+ diferenca)

