var input = require('fs').readFileSync('stdin','utf-8');
var lines = input.split('\n').map(elemento => elemento.trim())
let flag = false;
let nome = lines.shift();
console.log(lines);

for(i = 0;i < lines.length; i++){
   let teste = lines[i]
   if(teste == nome){
        flag = true;
        break;
   } 
}if(flag == true){
    console.log('achei, esta na posição: ' + lines.indexOf('ze'));  
}else{
    console.log('nao achei');
}