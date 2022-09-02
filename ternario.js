const pontuacaoUsuario = 1001;

const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuario normal';


const corUsuario = 'yellow';
const corPadrao = corUsuario || 'preta';

console.log(nivelUsuario, corPadrao);