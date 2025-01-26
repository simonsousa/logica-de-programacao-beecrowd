var input = require('fs').readFileSync('stdin','utf-8')
var lines = input.split('\n')

var partidas = 0;

var golsInter = 0;
var vitoriasInter = 0

var golsGremio = 0;
var vitoriasGremio = 0;

var empates = 0;

let opcao = 1
let tamanho = lines.length
for(i = 0; i < tamanho; i+=2){ 
    while(opcao == 1){
        partidas++
        
    let linha2numeros = lines.shift().split(' ')
        
        golsInter = Number(linha2numeros[0])
        golsGremio = Number(linha2numeros[1])
    
    console.log("Novo grenal (1-sim 2-nao)")
    opcao = Number(lines.shift())
        
        if (golsInter > golsGremio) {
            vitoriasInter++
        } else if (golsGremio > golsInter) {
            vitoriasGremio++
        } else {
            empates++
        }
    }
    while(opcao != 1 && opcao != 2){
        console.log("Novo grenal (1-sim 2-nao)")
        opcao = Number(lines.shift())
    }
}
console.log(`${partidas} grenais`)
console.log(`Inter:${vitoriasInter}`)
console.log(`Gremio:${vitoriasGremio}`)
console.log(`Empates:${empates}`)

if (vitoriasInter > vitoriasGremio) {
    console.log('Inter venceu mais')
} else if (vitoriasGremio > vitoriasInter){
    console.log('Gremio venceu mais')
}else {
    console.log('Nao houve vencedor')
}