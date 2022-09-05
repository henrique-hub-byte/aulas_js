/* break e continue */

const numeros = [1,2,3,4,5,6,7,8,9];
let i = 0;
// for(let i of numeros){
    while(i  < numeros.length){
        let numero = numeros[i]
    if(numero == 2){
        console.log('jump the number two');
        i++;
        continue;
    }

    if(numero == 9){
        console.log('im in the nine');
        i++;
        break;
    }
    i++;
    console.log(numero);
    }

// }