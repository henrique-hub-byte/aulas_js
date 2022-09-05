const Humano = {
    nome: 'luis',
    sobrenome: 'suarez',
    idade: 33,

    fala(){
        alert(`${this.nome} ${this.sobrenome} está falando oi minha idade atual é: ${this.idade}`);
    },

    incrementaIdade(){
        this.idade++
    }
}

Humano.fala()
Humano.incrementaIdade()
Humano.fala()

function criarPessoa(nome, sobrenome , idade){
    return{
        nome:nome,
        sobrenome:sobrenome,
        idade,idade
    };
}

const pessoa1 = criarPessoa('luis', 'henrique', 24);
const pessoa2 = criarPessoa('fernando', 'torres', 40);
const pessoa3 = criarPessoa('steven', 'gerrard', 40);
const pessoa4 = criarPessoa('algum', 'nome', 33);
document.write('<br>'+ pessoa1.nome + '<br>');
document.write(pessoa2.nome + '<br>');
document.write(pessoa3.nome + '<br>');
document.write(pessoa4.nome + '<br>');