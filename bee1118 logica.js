var input = require('fs').readFileSync('stdin', 'utf-8')

var lines = input.split('\n').map(Number)

let opcao = 0
do {
  let somaNotas = 0
  let qtd = 0
  while (qtd < 2) {
    let num = lines.shift()
    if (num < 0 || num > 10) {
      console.log('nota invalida')
    } else {
      somaNotas += num
      qtd++
    }
  }
  console.log(`media = ${(somaNotas / 2).toFixed(2)}`)
  opcao = 0
  while (opcao != 1 && opcao != 2) {
    console.log('novo calculo (1-sim 2-nao)')
    opcao = lines.shift()
  }
} while (opcao != 2)