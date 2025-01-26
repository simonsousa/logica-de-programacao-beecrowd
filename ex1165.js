var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(Number)//Numero primo;

let N = lines.shift()

for(i = 0; i < N; i++){
    let flag = true;
    X = lines[i];
    for(j = 2; j < X; j++){
        if(X % j == 0){
            flag = false;
        }
    }if(flag == true){
        console.log(`${X} eh primo`)
    }else{
        console.log(`${X} nao eh primo`)
    }
}
