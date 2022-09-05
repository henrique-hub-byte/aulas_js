/* operação ternaria *//* 

const pontuacaoUsuario = 1001;

const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuario normal';


const corUsuario = 'yellow';
const corPadrao = corUsuario || 'preta';

console.log(nivelUsuario, corPadrao); */

const valorNumero = 8;

const nivelNumero = valorNumero >= 10 ? 'numero maior que 10' : 'numero menor que 10';

const corUsuario = 'blue';
const corPadrao = corUsuario || '';

console.log(nivelNumero, corPadrao)