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
//agora vou fazer mudando a logica:
//nesta versão (exercicio), utilize o operador logico OU para checar se a entrada é valida no inicio do programa


if ( horario == 'manha' || horario == 'tarde' || horario == 'noite')
{
    if( horario == 'manha') {console.log (`Bom dia, ${nome}`)}    //usando template literals
    if( horario == 'tarde') {console.log (`Boa tarde, ${nome}`)}  //p/ melhor organização
    if( horario == 'noite') {console.log (`Boa noite, ${nome}`)}

}
else {console.log('Foda-se')}
