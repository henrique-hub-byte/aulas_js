/* const numeros = [1000,2000,3000,4000,5000,6000,7000, 8000, 9000, 10000]
const [primeiroNumero, segundoNumero ,terceiroNumero, ...resto] = numeros;

console.log(primeiroNumero,segundoNumero, terceiroNumero, ...resto);
 */
/*
let a = 'A';
let b = 'B';
let c = 'C';

const numero = [c , b , a];
[a,b,c] = numero;
 */

// const numeros = [[1,2,3], [4,5,6],[7,8,9]];
/* const [,[,,seis]] = numeros; */
// const [lista1, lista2, lista3] = numeros
// console.log(lista3[2]);

const pessoa = {
    nome: 'Luis',
    sobrenome: 'henrique',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 302
    }
}

const { endereco: rua ,numero} = pessoa
console.log(rua, numero);