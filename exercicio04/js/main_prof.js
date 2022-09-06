function relogio (){
    function CriarHoraDosSegundos(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString("pt-BR", {
          hour12: false,
          timeZone: "UTC",
        });
      }

      const relogio = document.querySelector(".relogio");
      /* const iniciar = document.querySelector(".iniciar");
      const pausar = document.querySelector(".pausar");
      const zerar = document.querySelector(".zerar"); */
      let segundos = 0;
      let timer;

      function iniciarRelogio() {
        timer = setInterval(function () {
          segundos++;
          relogio.innerHTML = CriarHoraDosSegundos(segundos);
        }, 1000);
      }

      document.addEventListener("click", function (e) {
        const el = e.target;

        if (el.classList.contains("iniciar")) {
          console.log('oi');
          relogio.classList.remove("pausado");
          clearInterval(timer);
          iniciarRelogio();
        }

        if (el.classList.contains("pausar")) {
          relogio.classList.add("pausado");
          clearInterval(timer);
        }

        if (el.classList.contains("zerar")) {
          clearInterval(timer);
          relogio.innerHTML = "00:00:00";
          segundos = 0;
        }
      });
}

relogio();
/* iniciar.addEventListener("click", function (event) {
  relogio.classList.remove("pausado");
  clearInterval(timer);
  iniciarRelogio();
});

pausar.addEventListener("click", function (event) {
  relogio.classList.add("pausado");
  clearInterval(timer);
});

zerar.addEventListener("click", function (event) {
  clearInterval(timer);
  relogio.innerHTML = "00:00:00";
  segundos = 0;
}); */
