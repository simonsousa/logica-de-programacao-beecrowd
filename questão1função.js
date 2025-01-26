var input = require('fs').readFileSync('stdin','utf-8')
var lines = input.split('\n')

let array1 = lines[0].split(' ').map(Number)
let array2 = lines[1].split(' ').map(Number)

const resultado = intercalar(array1,array2)
console.log(resultado)

function intercalar(valores1,valores2){
    let array3 = []
    for(i = 0; i < 4; i++){
        array3.push(valores1[i],valores2[i])
    }
    return array3
}