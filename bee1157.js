var input = require('fs').readFileSync('stdin','utf-8')

let N = Number(input)

const calcularDiv = (numero) => {// Para esse modo de fazer função, eu preciso fazer ela primeiro, e chamar depois
    for(i = 1; i <= numero; i++){
        if(numero % i == 0){
            console.log(i)
        }
    }
}

calcularDiv(N)

// for(i = 1; i <= N; i++){
//     if(N % i == 0){
//         console.log(i)
//     }
// } 