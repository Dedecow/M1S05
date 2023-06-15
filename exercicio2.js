/**
 * [M1S05] Ex 2 - Tradução de cores
 *
 * Escreve um programa que atribui um valor a uma variável `cor` em inglês e imprime
 * a tradução para a mesma cor em português. Utiliza uma estrutura condicional (switch)
 * para fazer o mapeamento das cores.
 */
let cor = prompt ("Digite a cor do Arco-íris a ser traduzida: ");

switch (cor.toLowerCase()){
    case "red":
    console.log("Vermelho");
    break;
    case "orange":
    console.log("Laranja");
    break;
    case "yellow":
    console.log("Amarelo");
    break;
    case "green":
    console.log("Verde");
    break;
    case "blue":
    console.log ("Azul");
    break;
    case "indigo": case "dark blue": case "navy blue":
    console.log("Anil (ou ciano). ");
    break;
    case: "Violet":
    console.log("Violeta");
    break;
  default:
    console.log("Valor informado não é uma cor do Arco-iris. ");
}
