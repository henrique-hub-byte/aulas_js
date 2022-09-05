const paragrafos = document.querySelector('.paragrafos');
const ps = document.querySelectorAll('p')

const estiloBody = getComputedStyle(document.body);
const backgroundColorBody = estiloBody.backgroundColor;
console.log(backgroundColorBody)

/* for(let i = 0; i < ps.length; i++ ){
    console.log(ps[i]);
} */

for(let p of ps){
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#fff';
}
