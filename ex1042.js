var input = require('fs').readFileSync('stdin', 'utf8');
let [A,B,C] = input.split(' ').map(Number);//Sort simples;
if(A > B && A > C){
    if(B>C){
        console.log(`${C}\n${B}\n${A}\n`);
    }else{
        console.log(`${B}\n${C}\n${A}\n`);
    }
}else if(B>A && B>C){
    if(C>A){
        console.log(`${A}\n${C}\n${B}\n`);    
    }else{
        console.log(`${C}\n${A}\n${B}\n`);    
    }
}else if(C>B && C>A){
    if(B>A){
        console.log(`${A}\n${B}\n${C}\n`);    
    }else{
        console.log(`${B}\n${A}\n${C}\n`);    
    }
}
console.log(`${A}\n${B}\n${C}`);

