/**
 * [M1S05] Ex 5 - Verificar palavras em um array
 *
 * Escreve um programa que percorre um array de palavras e exibe todas as palavras que possuem
 * mais de 5 caracteres. Utiliza a estrutura de repetição for of para percorrer o array.
 */

let alunos = ["Alvaro", "Andre", "Antonio", "Daniel", "Eder", "Hernan", "Jader", "Keo", "Leonardo", "Michael", "Patricia", "Tiago"];
alunos.forEach((aluno)=>{
    if(aluno.length > 5){
    console.log(aluno + " tem " + aluno.length + " caracteres")
    }
});
