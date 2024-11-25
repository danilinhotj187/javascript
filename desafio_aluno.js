//Faça um programa em Javascript que peça para o professor:
//- nome do aluno
//- nota 1
//- nota 2
//- nota 3
//- porcentagem de faltas
// se a media for >=7 E porcentagem de faltas for <25%, aluno aprovado
// se a media for <7 e >=5 E porcentagem de faltas for <25%, recuperação
//se a media for <5 OU faltas >=25% , aluno reprovado
// otimize a sua logica e faça um codigo elegante e limpo

//ALGORITMO
//1- COLETA DE DADOS
//2-CALCULAR A MEDIA
//3- CRIAR OS "DESVIOS" CONDICIONAIS E SALVAR O RESULTADO EM UMA VARIAVEL
//4 - MONTAR E IMPRIMIR A STRING COM TODOS OS DADOS

const prompt = require('prompt-sync')()

let nome = prompt('Digite o nome do aluno: ')
let n1 = Number(prompt('Digite a nota 1: '))
let n2 = parseFloat(prompt('Digite a nota 2: '))
let n3 = parseFloat(prompt('Digite a nota 3: '))
let faltas = parseFloat(prompt('Digite a porcentagem de faltas: '))
let resultado

media = ( (n1+n2+n3) /3 ).toFixed(2)

if(media < 5 || faltas >= 25)
    { 
        if (media < 5) {resultado = "REPROVADO POR NOTA"}
        if (faltas >= 25) {resultado = "REPROVADO POR FALTA"}
    }
else if( media >= 5 && media < 7 )
    { resultado = "RECUPERAÇÃO"}
else 
    { resultado = "APROVADO"}

console.log( `
Aluno: ${nome}
Média: ${media}
Faltas: ${faltas}
Resultado: ${resultado}` )