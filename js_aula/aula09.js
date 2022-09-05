// for classico - geralmente com iteráveis (array ou string)
// for in - retorna o indice ou chave(String,array ou objetos)
// for of - retorna o valor em si (iteráveis,arrays ou strings)
const container = document.querySelector('h1');

const pessoa = {
    nome: 'luis',
    sobrenome: 'henrique',
    idade: 24
}

/* console.log(pessoa.nome);
console.log(pessoa['nome']); */

for (let i in pessoa){
    /* console.log(i, pessoa[i]); */
}

 const nome = ['luis henrique', 'fernando torres', 'xablau'];
/* percorrendo cada caracter da const */
/* for(let i = 0; i < nome.length; i++){
    console.log(nome[i])
} */

/* não precisa de indice */
for(let valor of nome){
    /* console.log(valor) */
}

nome.forEach(function(el, indice, array){
    /* console.log(el, indice , array) */
})

const serHumano = {
    nome: 'luis',
    sobrenome: 'henrique',
    cidade: 'curitiba'
}


/* percorrendo objeto */
for(let chave in serHumano){
    console.log(chave, serHumano[chave]);
}