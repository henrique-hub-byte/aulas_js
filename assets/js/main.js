/* escopo */
function meuEscopo() {
  /* capturar evento de submit do formulario */
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");

  function capturarEvento(evento) {
    evento.preventDefault();

    const inputPeso = form.querySelector("#input-teste-1");
    const inputAltura = form.querySelector("#input-teste-2");

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    var calculo = peso / (altura*altura);
    var calculoArrendado = calculo.toFixed(2);
    if ((calculoArrendado == 18.5)) {
      resultado.innerHTML += `<p> Peso Baixo <hr> IMC: ${calculo.toFixed(2)} </p>`;
    }else if(calculoArrendado >= 18.6 && calculoArrendado <= 24.9){
        resultado.innerHTML += `<p>peso normal ou acima <hr> IMC: ${calculo.toFixed(2)} </p>`;
    }else if(calculoArrendado >= 20.5 && calculoArrendado <=29.9){
        resultado.innerHTML += `<p>sobrepeso <hr> IMC: ${calculo.toFixed(2)} </p>`;
    }else if(calculoArrendado >= 30.0 && calculoArrendado <=34.9){
        resultado.innerHTML += `<p>obesidade grau I <hr> IMC: ${calculo.toFixed(2)} </p>`;
    }else if(calculoArrendado >= 35 && calculoArrendado <= 39.9){
        resultado.innerHTML += `<p>obesidade grau II <hr> IMC: ${calculo.toFixed(2)} </p>`;
    }else if(calculoArrendado >= 40.0){
        resultado.innerHTML += `<p>obesidade grau III ou Mórbida <hr> IMC: ${calculo.toFixed(2)} </p>`;
    }


   console.log(calculo);

   /* resultado.innerHTML += `<p>Peso Baixo <hr> IMC: ${calculo} </p>`; */

}
form.addEventListener("submit", capturarEvento);
}

meuEscopo();
