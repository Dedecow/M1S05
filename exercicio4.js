/**
 * [M1S05] Ex 4 - Imprimir sequência de Fibonacci
 *
 * Escreve um programa que imprime a sequência de Fibonacci até o número atribuído na variável
 * `número`. A sequência de Fibonacci é formada pela soma dos dois números anteriores:
 * 0, 1, 1, 2, 3, 5, 8, 13, ...
 * Utiliza uma estrutura de repetição (while) para gerar a sequência.
 */
let numero = prompt ("Digite um número inteiro maior que 2 : ");
numero = parseInt(numero);
let arrayFibonacci = [0,1];
let i = 2;

while ( i < numero) {
    function proxFibonacci(){
        arrayFibonacci[i] = arrayFibonacci[i - 1] + arrayFibonacci[i - 2];
        return arrayFibonacci[i];
    }
    arrayFibonacci.push(proxFibonacci());
    i++
}
console.log("Sequência de Fibonacci até " + numero + ": " + arrayFibonacci.join(", "));
