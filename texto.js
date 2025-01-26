var input = require('fs').readFileSync('stdin','utf-8');
var lines = input.split('\n')
let flag = false
let nome = lines.shift().trim()//.trim() para cortar o \r
for(i = 1;i < lines.length; i++){
   teste = lines[i]
   console.log(teste)
   if(teste.trim() == nome){
        flag = true;
        break;
   } 
}console.log('----------')
if(flag == true){
    console.log('Achei, esta na posição: ' + lines.indexOf('ze\r'));  
}else{
    console.log('nao achei');
}
