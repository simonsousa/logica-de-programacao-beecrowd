var input = require('fs').readFileSync('stdin', 'utf-8')

let [A,B,C,D] = input.split(' ').map(Number)


function calcularDuracaoJogo(horaInicio, minutoInicio, horaFim, minutoFim) {
    // Convertendo tudo para minutos para facilitar os cálculos
    const inicioEmMinutos = horaInicio * 60 + minutoInicio;
    const fimEmMinutos = horaFim * 60 + minutoFim;
  
    // Calculando a duração em minutos
    let duracaoEmMinutos = fimEmMinutos - inicioEmMinutos;
  
    // Ajustando para o caso em que o jogo se estende por mais de um dia
    if (duracaoEmMinutos < 0) {
      duracaoEmMinutos += 24 * 60;
    }
  
    // Convertendo a duração de volta para horas e minutos
    const horas = Math.floor(duracaoEmMinutos / 60);
    const minutos = duracaoEmMinutos % 60;
  
    // Formatando a saída
    return `O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`;
  }
  
  // Exemplos de uso:
  //console.log(calcularDuracaoJogo(7, 8, 9, 10)); // O JOGO DUROU 2 HORA(S) E 2 MINUTO(S)
  console.log(calcularDuracaoJogo(7, 7, 7, 7)); // O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)
  //console.log(calcularDuracaoJogo(7, 10, 8, 9)); // O JOGO DUROU 0 HORA(S) E 59 MINUTO(S)