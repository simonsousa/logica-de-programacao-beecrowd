var input = require('fs').readFileSync('./stdin', 'utf-8')
var entrada = input.split(/\n|\r/)

entrada = entrada.filter(entrada => entrada[0], entrada[2])

colocação = entrada.shift()
colocação2 = entrada.shift()

colocação = colocação.split(' ').map(Number) 
colocação2 = colocação2.split(' ').map(Number)

switch (colocação[0]) {
    case 1:
        console.log('Primeiro Lugar')
        break;
    case 2:
        console.log('Segundo Lugar')
        break;
    case 3:
        console.log('Terceiro Lugar')
        break;
    case 4:
        console.log('Quarto Lugar')
        break;
    case 5:
        console.log('Quinto Lugar')
        break;
    case 6:
        console.log('Sexto lugar')                
    default:
        console.log('Numero maior que 6')
        break;
}
switch (colocação[1]) {
    case 1:
        console.log('Primeiro Lugar')
        break;
    case 2:
        console.log('Segundo Lugar')
        break;
    case 3:
        console.log('Terceiro Lugar')
        break;
    case 4:
        console.log('Quarto Lugar')
        break;
    case 5:
        console.log('Quinto Lugar')
        break;
    case 6:
        console.log('Sexto lugar')                
    default:
        console.log('Numero maior que 6')
        break;
}
switch (colocação[2]) {
    case 1:
        console.log('Primeiro Lugar')
        break;
    case 2:
        console.log('Segundo Lugar')
        break;
    case 3:
        console.log('Terceiro Lugar')
        break;
    case 4:
        console.log('Quarto Lugar')
        break;
    case 5:
        console.log('Quinto Lugar')
        break;
    case 6:
        console.log('Sexto lugar')                
    default:
        console.log('Numero maior que 6')
        break;
}
switch (colocação2[0]) {
    case 1:
        console.log('Primeiro Lugar')
        break;
    case 2:
        console.log('Segundo Lugar')
        break;
    case 3:
        console.log('Terceiro Lugar')
        break;
    case 4:
        console.log('Quarto Lugar')
        break;
    case 5:
        console.log('Quinto Lugar')
        break;
    case 6:
        console.log('Sexto lugar')                
    default:
        console.log('Numero maior que 6')
        break;
}
switch (colocação2[1]) {
    case 1:
        console.log('Primeiro Lugar')
        break;
    case 2:
        console.log('Segundo Lugar')
        break;
    case 3:
        console.log('Terceiro Lugar')
        break;
    case 4:
        console.log('Quarto Lugar')
        break;
    case 5:
        console.log('Quinto Lugar')
        break;
    case 6:
        console.log('Sexto lugar')                
        break;
    default:
        console.log('Numero maior que 6')
        break;
}
switch (colocação2[2]) {
    case 1:
        console.log('Primeiro Lugar')
        break;
    case 2:
        console.log('Segundo Lugar')
        break;
    case 3:
        console.log('Terceiro Lugar')
        break;
    case 4:
        console.log('Quarto Lugar')
        break;
    case 5:
        console.log('Quinto Lugar')
        break;
    case 6:
        console.log('Sexto lugar')
        break;                
    default:
        console.log('Numero maior que 6')
        break;
}







