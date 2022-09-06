function mostrarHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}
/* criando a função que vai ser referenciada no setInterval  */
   /*  function funcaDoInterval(){
        console.log(mostrarHora());
    }

setInterval(funcaDoInterval, 1000); */

const time = setInterval(function(){
    console.log(mostrarHora());
},1000)

setTimeout(function(){
    clearInterval(time);
},5000);

/* setTimeout(function(){
    console.log('ola mundo');
},5000) */