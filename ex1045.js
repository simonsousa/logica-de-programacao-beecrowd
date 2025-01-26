var input = require('fs').readFileSync('stdin', 'utf8');
let [A,B,C] = input.split(' ').map(Number);
let aux = A;
if(B > A){
    aux = B;
    B = A;
    A = aux;
}
if(C > A){
    aux = C;
    C = A;
    A = aux;
}
if(C > B){
    aux = C;
    C = B;
    B = aux;
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