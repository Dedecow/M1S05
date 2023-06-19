/**
 * [M1S05] Ex 6 - Percorrer array de objetos de produtos
 *
 * Escreve um programa que percorre um array de objetos
 *  que representam produtos e exibe o nome
 * e o preço de cada produto. 
 * Após imprimir essas informações, imprime o total de produtos
 * e o valor total de todos os produtos.
 */

function criaFarmaco (farmaco, preco){
    return{farmaco,preco};
};
const farmaco1 = criaFarmaco ('Paracetamol' , 7.89);
const farmaco2 = criaFarmaco ('Ibuprofeno' , 13.19);
const farmaco3 = criaFarmaco ('Aspirina' , 18.19);
const farmaco4 = criaFarmaco ('Loratadina' , 15.29);
const farmaco5 = criaFarmaco ('Cetirizina' , 49.90);
const farmaco6 = criaFarmaco ('Dipirona' , 9.99);
const farmaco7 = criaFarmaco('Omeprazol', 25.99);
const farmaco8 = criaFarmaco('Amoxicilina', 12.49);
const farmaco9 = criaFarmaco('Ranitidina', 19.79);


//for (let i=0; i < farmacos.length; i++){
//     console.log("O preço do " + farmacos[i] + "É R$" + precos[i]);
//}