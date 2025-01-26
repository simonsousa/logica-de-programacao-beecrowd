var input = require('fs').readFileSync('stdin','utf-8');

let [X,Y] = input.split(' ').map(Number);//sequência logica 2

let esp = ""

for(i = 1; i <= Y; i++){
    esp+=i
    esp+=" ";
    for(j = 0; j < X; j++){
        if(j % X == 0){
            console.log('\n')
        }
    }console.log(esp)
}