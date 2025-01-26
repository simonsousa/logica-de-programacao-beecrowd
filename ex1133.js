var input = require('fs').readFileSync('stdin', 'utf8');
var [X,Y] = input.split('\n').map(Number);//Resto da divisão
if(X > Y){
    [X,Y] = [Y,X];
}
let restoDiv = 0;
for(i = X+1;i < Y;i++){
    if(i % 5 == 2 || i % 5 == 3){
        restoDiv = i;
        console.log(restoDiv);
    }
}
    