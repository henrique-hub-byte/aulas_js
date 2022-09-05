function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError("esperando instância de date");
  }

  if (!data) {
    data = new Date();
    console.log(data);
  }

  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
  });
  console.log(data);
}

try {
  const data = new Date("01-01-1970 12:58:12");
  const hora = retornaHora();
  console.log(hora);
} catch (e) {
  console.log(e);
} finally {
  console.log("tenha um bom dia.");
}
