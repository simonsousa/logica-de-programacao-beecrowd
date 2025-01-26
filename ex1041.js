var input = require('fs').readFileSync('stdin', 'utf8');
var [X,Y] = input.split(' ').map(Number)//coordenadas de um ponto

if(X > 0 && Y > 0){
    console.log('Q1')
}
if(X < 0 && Y > 0){
    console.log('Q2')
}
if(X < 0 && Y < 0){
    console.log('Q3')
}
if(X > 0 && Y < 0){
    console.log('Q4')
}
if(X == 0 && Y > 0){
    console.log('Eixo Y')
}
if(X == 0 && Y < 0){
    console.log('Eixo Y')
}
if(X > 0 && Y == 0){
    console.log('Eixo X')
}
if(X < 0 && Y == 0){
    console.log('Eixo X')
}
if(X == 0 && Y == 0){
    console.log('Origem')
}