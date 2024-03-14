var input = require("fs").readFileSync("stdin","utf-8")
var lines = input.split('\n')

let [notaA,notaB]= lines;

const media = (x,y)=>{
    return (x * 3.5 + y*7.5) / 11
}

console.log("MEDIA = "+ media(notaA,notaB).toFixed(5))