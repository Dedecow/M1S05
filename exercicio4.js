/**
 * [M1S05] Ex 4 - Imprimir sequência de Fibonacci
 *
 * Escreve um programa que imprime a sequência de Fibonacci até o número atribuído na variável
 * `número`. A sequência de Fibonacci é formada pela soma dos dois números anteriores:
 * 0, 1, 1, 2, 3, 5, 8, 13, ...
 * Utiliza uma estrutura de repetição (while) para gerar a sequência.
 */
let numero = null;
let arrayFibonacci = [0,1];

function proxFibonacci(){
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    return fibonacci[i];
}

while (fibonacci[fibonacci.length - 1] <= numero) {
    arrayFibonacci.push(proxFibonacci);
}
console.log("Sequência de Fibonacci até " + numero + ": " + arrayFibonacci.join(", "));
