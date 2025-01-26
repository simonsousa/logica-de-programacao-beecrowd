var input = require('fs').readFileSync('stdin','utf-8')
var lines = input.split('\n').map(Number)

while(true){
    calcularMedia()
    if(!(menu())){
        break
    }
}

function calcularMedia(){
    let soma = 0
    let qtd = 0
    while(qtd < 2){
        let num = lines.shift()
        if(num >= 0 && num <= 10){
            soma += num
            qtd++
        } else {
            console.log('nota invalida')
        }
    }
    let media = soma / 2
    console.log(`media = ${media.toFixed(2)}`)
}

function menu(){
    while(true){
        console.log('novo calculo (1-sim 2-nao)')
        let opcao = lines.shift()
        if(opcao == 2){
            return false
        } else if(opcao == 1){
            return true
        }
    }
}