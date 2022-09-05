
const elementos = [
    {tag: 'h1', texto: 'qualquer texto que quiser'},
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'section', texto: 'Frase 3'},
    {tag: 'footer', texto: 'Frase 4'},
]

const container = document.querySelector('.container');
const div = document.createElement('div');

for(let i = 0; i < elementos.length; i++){
    /* desestruturação do array*/
    let {tag , texto} = elementos[i];
    let tagCriada = document.createElement(tag);
    let TextoCriado = document.createTextNode(texto);

   /*  tagCriada.innerText = texto; */

   tagCriada.appendChild(TextoCriado);
   div.appendChild(tagCriada);
}

container.appendChild(div);

