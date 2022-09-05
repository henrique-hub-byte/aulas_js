/* try e catch */
function soma(x, y) {
  if (typeof x !== "number" || typeof x !== "number") {
    throw "x e y precisam ser numeros";
  }
  return x + y;
}

try {
  console.log(soma(1, 2));
  console.log(soma("1", 2));

  try{
    console.log(b);
  }catch(e){
    console.log('deu erro');
  }finally{
    console.log('tbm sou finally')
  }


} catch (erro) {
  console.log(erro);
} finally {
  console.log("i always executed");
}
