/*
JAVASCRIPT INTERNO
    <script>
        
    codigos escritos dentro de uma página html
    
    <script>

JAVASCRIPT EXTERNO
    
    <script src= "/index.js"></script> 

    codigos podem ser escritos em uma página .js separada da página html
*/
/*
estratégia camelCase

nomeie variáveis tendo a primeira letra minúscula e a segunda maiúscula

    OPERADORES ARITMÉTICOS                  OPERADORES DE ATRIBUIÇÃO
        +   ADIÇÃO                                  =   ATRIBUIÇÃO
        -   SUBTRAÇÃO                               +=  ATRIBUIÇÃO DE SOMA
        *   MULTIPLICAÇÃO                           -=  ATRIBUIÇÃO DE SUBTRAÇÃO
        **  POTENCIAÇÃO                             *=  ATRIBUIÇÃO DE MULTIPLICAÇÃO
        /   DIVISÃO                                 /=  ATRIBUIÇÃO DE DIVISÃO
        %   MÓDULO(RESTO DA DIVISÃO)                %=  ATRIBUIÇÃO DE RESTO
        ++  (INCREMENTO)
        --  (DECREMENTO)
*/

/* PRECEDÊNCIA DE OPERADORES
        **
        *
        /
        %
        +
        -
*/
/*
map()--> Quando for preciso traduzir ou mapear todos os elementos de uma array para
         um conjunto de valores.

exemplo:

const number = [1,2,3,4,5,6]

const dobroNumber = numbers.map(function(elem){     //retorna o dobro dos numeros dentro da array
    return elem * 2
})

       => ArrowFunction

        let numeros = [1,2,3,4,5]

        const dobroNumeros = numeros.map(numeros => numeros*2)

        console.log(dobroNumeros)
       

        var.split(/\r|\n/) MAPEAR COMO ARRAY POR QUEBRA DE TEXTO E ESPAÇO
        
Codigo        	Saida
\0	        o caractere NULL
\'	        aspas simples
\"	        aspas duplas
\\	        barra invertida
\n	        nova linha
\r	        carriage return
\v	        tab vertical
\t	        tab
\b	        backspace
\f	        form feed
\uXXXX	    unicode codepoint
\xXX	    the Latin-1 character



array.length                -retorna o total de elementos presentes dentro do array

array[array.length - 1]     -retorna o ultimo elemento presente dentro do array

array.push()                -adiciona elementos ao final do array.

array.pop()                 -remove o ultimo elemento do array

array.shift()               -remove o primeiro elemento do array

array.unshift()             -adiciona um ou mais elementos no inicio de um array

string.repeat(numero de vezes que a string vai ser repetida);
*/
