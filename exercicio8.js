/**
 * [M1S05] Ex 8 - Teste de funções da calculadora
 *
 * Escreve uma função chamada `calculadora` que recebe três parâmetros: dois números e uma função de operação
 * matemática. A função `calculadora` executa a operação matemática nos dois números fornecidos e retorna o resultado.
 * Testa a função utilizando diferentes operações como adição, subtração, multiplicação e divisão.
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const calculadora = function(num1, num2, operation){
    switch (operation) {
        case "+":
            return (num1 + num2);
        break;
        case "-":
            return (num1 - num2);
        break;
        case "*":
            return (num1 * num2);
        break;
        case "/":
            return (num1 / num2);
        break;
        default:
        console.log ("Operação inválida. ")
        break;
    }
}

rl.question("Digite o primeiro número: ", (num1) => {
    rl.question("Digite o segundo número: ", (num2) => {
      rl.question("Digite a operação (+, -, *, /): ", (operation) => {
        const resultado = calculadora(Number(num1), Number(num2), operation);
        console.log(`Resultado: ${resultado}`);
  
        rl.close();
      });
    });
  });
  
  obterOperacao();
