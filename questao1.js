var input = require('fs').readFileSync('stdin','utf-8')
var lines = input.split('\n')

let array1 = lines[0].split(' ').map(Number)
let array2 = lines[1].split(' ').map(Number)
let array3 = []

for(i = 0; i < 4; i++){
    array3.push(array1[i],array2[i])
}
console.log(array3)