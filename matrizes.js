let matriz = [[7,12,5],[8,9,15],[6,10,21]];

let sImp = 0
let cImp = 0


for (let l=0; l < 4; l++){
    for(let c=0; c < 4; c++){
        if(matriz[l][c] % 2 != 0){
            sImp += matriz[l][c]
            cImp++
        }
    }
}

let media = sImp/cImp

console.log(media.toFixed(2))