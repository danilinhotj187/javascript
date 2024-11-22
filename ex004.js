// para solicitar entradas do usuário usando o comando prompt no ambiente NODE, é necessário:
// 1o. instalar a biblioteca com o comando npm install prompt-sync (NO CONSOLE, NO TERMINAL)
// 2o. criar um objeto prompt no seu código com o comando var prompt = require("prompt-sync")()
// 3o. utilize normalmente, exemplo: var nome = prompt("Digite seu nome")

// importando a biblioteca prompt
let prompt = require("prompt-sync")()

// 1o. coletar as informações do usuário:
let nome = prompt('Digite seu nome: ')
let horario = prompt('É manhã, tarde ou noite? ')

//passo 2 - use o if e imprima "Bom dia, <nome> ou "Boa tarde, <nome>"
if (horario == 'manha')
{console.log('Bom dia,' + nome)}
else if(horario == 'tarde')
{console.log('Boa tarde,' + nome)}

// melhore o programa inclundo boa noite, e imprimindo poção invalida caso o usuario nao digite exatamente "manha", "tarde", ou "noite"
else if(horario == 'noite')
{console.log('Boa noite,' + nome)}
else{
    console.log('Parabens, vc e gay')
}