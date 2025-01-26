var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')//Sequência de Números e Soma
for(i = 0;i < lines.length;i++){
    let [M,N] = lines[i].split(' ').map(Number);
    while(M > 0 && N > 0){
        if(M > N){
        [M,N] = [N,M];
    }
    numeros = "";
    sum = 0;
    for(j = M; j <= N; j++){
        numeros+=j;
        numeros+=" ";
        sum+=j;
    }console.log(`${numeros}Sum=${sum}`);
    break;
  }
}        