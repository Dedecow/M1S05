/**
 * [M1S05] Ex 3 - Verificar número primo
 *
 * Escreve um programa que atribui um valor a uma variável `número` e verifica se ele
 * é um número primo. Um número primo é aquele que é divisível apenas por 1 e por ele mesmo.
 * Utiliza uma estrutura de repetição (do while) para verificar as divisões.
 */


let ehPrimo;

do{

    let numero = parseInt(prompt("Digite um número: "));

    if (numero >= 0 && Number.IsInterger(numero)) {

        if (numero === 1) {
        ehPrimo = false;
        } else {
        ehPrimo = true;
        }

        for (let i = 2; i < numero; i++ ){
            if (numero % i === 0){
                ehPrimo = false;
                break;
            }
        }

    }else{
        console.log("O número precisa ser positivo e inteiro para verificarmos se é primo. ")
    }
} while(ehPrimo === false);

console.log("você achou um número primo. ");
