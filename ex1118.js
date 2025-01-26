var input = require('fs').readFileSync('stdin','utf-8')

var lines = input.split('\n').map(Number)//validação de varias notas

function calcularMedia() {
    let soma = 0;
    let qtd = 0;
    while (qtd < 2) {
      let nota = parseFloat(lines.shift());
      if (nota >= 0 && nota <= 10) {
        soma += nota;
        qtd++;
      } else {
        console.log('nota invalida');
      }
    }
    let media = soma / 2;
    console.log(`media = ${media.toFixed(2)}`);
  }
  
  let opcao;
  do {
    opcao = 0
    calcularMedia();
    while (opcao != 1 && opcao != 2) {
      console.log('novo calculo (1-sim 2-nao)');
      opcao = parseInt(lines.shift());
    }
  } while(opcao != 2)