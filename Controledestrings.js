var teste = 'texto1\ntexto2\ntexto3'

const matrizSubstr = teste.split('\n|\r')
const matrizSubstr2 = teste.split(/\n|\r/)

console.log(teste)
console.log(matrizSubstr)
console.log(matrizSubstr2)