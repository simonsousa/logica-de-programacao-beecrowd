var input = require('fs').readFileSync('stdin','UTF-8')

let salario = Number(input)

const calcImpostoDeRenda = (param) => {
    let imposto = 0
    if ( param > 4500 ) {
        imposto = (param - 4500) * 0.28
        param -= (param - 4500)//calcula a diferença
    }
    if ( param > 3000 ) {
        imposto += (param - 3000) * 0.18
        param -= (param - 3000)//calcula a diferença
    }
    if ( param > 2000 ) {
        imposto += (param - 2000) * 0.08
    }
    if ( imposto == 0 ) {
        console.log("Isento")
    } else {
        console.log(`R$ ${imposto.toFixed(2)}`)
    }
}

calcImpostoDeRenda(salario)
