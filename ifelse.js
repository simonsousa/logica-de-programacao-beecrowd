var input = require('fs').readFileSync('./stdin','utf-8')
var Valores = input.split(/\n|\n/);

const valores = Valores.shift()
const valores2 = Valores.shift()
const valores3 = Valores.shift()

console.log(`${valores}\n${valores2}\n${valores3}\n`)

testeValores = valores.split(' ').map(Number);
testeValores2 = valores2.split(' ').map(Number);
testeValores3 = valores3.split(' ').map(Number);

console.log('-----SEPARAÇÃO------')

console.log(testeValores)
console.log(testeValores2)
console.log(testeValores3)

if(testeValores[0] % 2 == 0){
    console.log(`${testeValores[0]} = PAR`)
}
if(testeValores[0] % 2 == 1){
    console.log(`${testeValores[0]} = IMPAR`)
}

if(testeValores[1] % 2 == 0){
    console.log(`${testeValores[1]} = PAR`)
}
if(testeValores[1] % 2 == 1){
    console.log(`${testeValores[1]} = IMPAR`)
}


if(testeValores2[0] % 2 == 0){
    console.log(`${testeValores2[0]} = PAR`)
}
if(testeValores2[0] % 2 == 1){
    console.log(`${testeValores2[0]} = IMPAR`)
}

if(testeValores2[1] % 2 == 0){
    console.log(`${testeValores2[1]} = PAR`)
}
if(testeValores2[1] % 2 == 1){
    console.log(`${testeValores2[1]} = IMPAR`)
}

if(testeValores3[0] % 2 == 0){
    console.log(`${testeValores3[0]} = PAR`)
}
if(testeValores3[0] % 2 == 1){
    console.log(`${testeValores3[0]} = IMPAR`)
}

if(testeValores3[1] % 2 == 0){
    console.log(`${testeValores3[1]} = PAR`)
}
if(testeValores3[1] % 2 == 1){
    console.log(`${testeValores3[1]} = IMPAR`)
}

  
  