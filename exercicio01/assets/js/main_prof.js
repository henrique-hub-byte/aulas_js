/* CAPTURAR EVENTO DO FORMULARIO */
const form = document.querySelector('#form');


form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!peso) {
        setResultado('Peso inválido', false);
        return;
    }

    if(!altura) {
        setResultado('Altura inválido', false);
        return;
    }

    const imc = getImc(peso,altura);

    const nivelImc = getNilvelImc(imc)

    const msg = `seu IMC É ${imc} (${nivelImc})`

    setResultado(msg, true)
});

function getNilvelImc(imc){
    const nivel = ['Abaixo do peso', 'Peso normal','Sobrepeso',
    'Obesidade grau I','Obesidade grau II', 'Obesidade grau III ou Mórbida'];

    if(imc < 18.5){
        return nivel[0];
    }

    if(imc >= 18.5 && imc <= 24.9){
        return nivel[1];
    }

    if(imc >= 25 && imc <= 29.9){
        return nivel[2];
    }

    if(imc >= 30 && imc <= 34.9){
        return nivel[3];
    }

    if(imc >= 35 && imc <= 39.9){
        return nivel[4];
    }

    if(imc >= 40.0){
        return nivel[5];
    }
}

function getImc(peso, altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}


function criaP(){
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';

    const p = criaP();
    if(isValid){
        p.classList.add('paragrafo_resultado');
    }else{
        p.classList.add('bad')
    }

    p.innerHTML = msg;
    resultado.appendChild(p)
}

