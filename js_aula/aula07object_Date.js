

//const treHoras = 60 * 60 * 3 * 9;

//const umDia = 60 * 60 * 24 * 1000;
/* const data = new Date(0 + treHoras - umDia); */
/* console.log(data.toString()); */

//const data = new Date(2019, 3, 20 , 15 , 14 , 27 , 500);

//console.log(data.toString())
/* ----------------------------------------------- */
const data = new Date();
const dataBrasil = fomataData(data)

function zeroAesquerda(num){
    return num >= 10 ? num : `0${num}`
}

function fomataData(data) {
    const dia = zeroAesquerda(data.getDate());
    const mes = zeroAesquerda(data.getMonth());
    const ano = zeroAesquerda(data.getFullYear());
    const hora = zeroAesquerda(data.getHours());
    const min = zeroAesquerda(data.getMinutes());
    const seg = zeroAesquerda(data.getSeconds());

    return `${dia}/${mes}/${ano}  ${hora}:${min}:${seg}`
}
 console.log(dataBrasil)
