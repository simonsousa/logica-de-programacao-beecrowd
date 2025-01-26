var input = require('fs').readFileSync('stdin', 'utf8');
let [A,B,C] = input.split(' ').map(Number);//TIPOS DE TRIANGULOS
if(B > A){
    [A,B,C] = [B,A,C];
}if(C > A){
    [A,B,C] = [C,B,A];
}if(C > B){
    [A,B,C] = [A,C,B];
}
if(A>=B+C){
    console.log('NAO FORMA TRIANGULO');
}else if(Math.pow(A,2) == Math.pow(B,2) + Math.pow(C,2)){
    console.log('TRIANGULO RETANGULO');
    }
else if(Math.pow(A,2) > Math.pow(B,2) + Math.pow(C,2)){
    console.log('TRIANGULO OBTUSANGULO');
    }
else if(Math.pow(A,2) < Math.pow(B,2) + Math.pow(C,2)){
    console.log('TRIANGULO ACUTANGULO');
    }
if(A == B && A == C){
    console.log('TRIANGULO EQUILATERO');
}
if((A == B && A != C)||(B == C && B != A)){
    console.log('TRIANGULO ISOSCELES');
}