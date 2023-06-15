/**
 * [M1S05] Ex 1 - Classificação de idade
 *
 * Escreve um programa que atribui um valor a uma variável `idade` e determina
 * em qual categoria ela se enquadra: criança (0-12 anos), adolescente (13-17 anos),
 * adulto (18-59 anos) ou idoso (60 anos ou mais). Utiliza uma estrutura condicional
 * (if, else if, else).
 */
let idade = prompt ("Digite sua idade");
idade = parseInt(idade);

if (idade >= 0 && Number,IsInterger(idade)) {
    if (idade <= 12) {
        console.log ("Criança. ")
    }else if (idade > 12 && idade <= 17){
        console.log ("Adolescente. ");
    }else if ( idade >17 && idade <= 59){
        console.log (" Adulto. ")
    }else{
        console.log ("Idoso. ")
    }

}else{
    console.log (" Verifique a idade informada. ")
}