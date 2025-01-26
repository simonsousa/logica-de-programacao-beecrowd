var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split(' ').map(parseFloat)
//Área-TrianguloRetangulo/Circulo/Trapezio/Quadrado/Retangulo
A = lines.shift()
B = lines.shift()
C = lines.shift()
valores = [ A, B, C ]

areaTriangulo = (A * C)/2

raio = (C * C)
const pi = 3.14159

areaCirculo = (pi * raio)

areaTrapezio = (A + B) * C / 2

areaQuadrado = B * B

areaRetangulo = A * B

console.log(`TRIANGULO: ${areaTriangulo.toFixed(3)}`)
console.log(`CIRCULO: ${areaCirculo.toFixed(3)}`)
console.log(`TRAPEZIO: ${areaTrapezio.toFixed(3)}`)
console.log(`QUADRADO: ${areaQuadrado.toFixed(3)}`)
console.log(`RETANGULO: ${areaRetangulo.toFixed(3)}`)