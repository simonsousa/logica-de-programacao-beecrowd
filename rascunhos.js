const { isBuffer } = require("util");

let num = [10,20,30,40,50]

// console.log('FOR')
// for(let i = 0;i < num.length; i++){
//     console.log(num[i]);
// }console.log('\n');//quebra de linha

// console.log('FOR IN');  // quebra de linha
// for(n in num){          //crio uma variavel n, que vai receber os indices dos elementos retornados da coleção num
//     console.log(n)      // por padrão o console imprime n que tem a posição de cada um dos elementos(0-4)
// }console.log('FOR IN')  // se eu pegar as posições : FOR IN

// for(x in num){
//     console.log(num[x]) //imprime num[posição que começa de 0-4]
// }console.log('\n')

// console.log('FOR OF')   // se eu quiser iterar os elementos da coleção : FOR OF
// for(y of num){          //itera diretamente os elementos dentro da coleção
//     console.log(y)
// }   

// num.map(n => n**2)

// function parImpar(n){
//     if(n % 2 == 0 ){
//         return 'Par'
//     } else {
//         return 'Impar'
//     }
// }

// console.log(parImpar(223))

// function soma(numero1=0,numero2=0){//se eu não passar um dos parâmetros, ele fica como 0
//     return numero1 + numero2
// }

// console.log(soma(7))

// let v = function(x){
//     return x * 2
// }

// console.log(v(5))

// function fatorial(n){
//     let fat = 1
//     for(let contd = n; contd > 1; contd--){// começa em 5, por exemplo, e vai perdendo 1
//         fat = fat * contd
//     }
//     return fat
// }

// console.log(fatorial(5))

// function fatorial(n){//fatorial por recursividade
//     if(n == 1){
//         return 1
//     } else {
//         return n * fatorial(n-1)
//     }
// }
// console.log(fatorial(10))

let amigo = {
    
        nome: 'Jose',
        sexo: 'M',
        peso: 85.4,
        engordar(p=0){
            console.log('Engordou')
            this.peso += p
        }

}

amigo.engordar(10)
console.log(`${amigo.nome} pesa ${amigo.peso}`)