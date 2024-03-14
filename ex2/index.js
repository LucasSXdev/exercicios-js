var input = require("fs").readFileSync("stdin","utf-8");
var lines = input.split('\n');

let [notaA,notaB,notaC]= lines;

const calcAverage=(number1,number2,number3)=>{
    return (number1*2 + number2*3 + number3*5)/10
}

console.log("MEDIA = "+calcAverage(notaA,notaB,notaC).toFixed(1))