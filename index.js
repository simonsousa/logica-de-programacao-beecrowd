var input = require('fs').readFileSync('./stdin','utf-8')

var lines = input.split('\n').map(Number)


//console.table(lines)

/*let i = 0
while (true){
    if (i == 3){
        break
    }
    console.log(i)
    i++
}   

console.log('terminou')
*/

/*for(let i = 0; i < 5 ; i++){
    if(i==2){
        break
    }
    console.log(lines[i])
}*/

/*for(let i = 0; i < 5 ; i++){
    if(i==2){
        continue
    }
    console.log(lines[i])
}*/

for(let i = 0;lines.length; i++){
    if(lines[i] % 2 != 0){
        continue
    }
    console.log(lines[i])
}


