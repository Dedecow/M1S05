/**
 * [M1S05] Ex 6 - Percorrer array de objetos de produtos
 *
 * Escreve um programa que percorre um array de objetos
 *  que representam produtos e exibe o nome
 * e o preço de cada produto. 
 * Após imprimir essas informações, imprime o total de produtos
 * e o valor total de todos os produtos.
 */
let farmacos = [ Paracetamol, Ibuprofeno, Aspirina, Loratadina, Cetirizina]
let precos = [ 7.89, 13.19, 18.19, 15.29, 49.90]

for (let i=0; i < farmacos.length; i++){
    console.log("O preço do " + farmacos[i] + "É R$" + precos[i]);
}