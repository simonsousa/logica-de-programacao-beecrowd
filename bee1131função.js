var input = require('fs').readFileSync('stdin','utf-8')
var lines = input.split('\n')
let opcao = 1

let golsInter = 0
let vitInter = 0

let golsGremio = 0
let vitGremio = 0

let grenais = 0
let empates = 0
for(i = 0; i < lines.length; i+=2){
    organizarGols()
    while(opcao != 1 && opcao != 2){
        console.log('Novo grenal (1-sim 2-nao)')
        opcao = Number(lines.shift())
    }
}
console.log(`${grenais} grenais`)
console.log(`Inter:${vitInter}`)
console.log(`Gremio:${vitGremio}`)
console.log(`Empates:${empates}`)
    
    saberQuemGanhou(vitInter,vitGremio)

function organizarGols(){
    while(opcao == 1){
        grenais++
        linha2numeros = lines.shift().split(' ')
        
        golsInter = Number(linha2numeros[0])
        golsGremio = Number(linha2numeros[1])

        console.log('Novo grenal (1-sim 2-nao)')
        opcao = Number(lines.shift())

        if(golsInter > golsGremio){
            vitInter++
        } else if (golsInter < golsGremio){
            vitGremio++
        } else {
            empates++
        }
    }
}

function saberQuemGanhou(vitorias1,vitorias2){
    if(vitorias1 > vitorias2){
        console.log('Inter venceu mais')
    } else if (vitorias1 < vitorias2){
        console.log('Gremio venceu mais')
    } else {
        console.log('Nao houve vencedor')
    }
}