/*
FOREACH
Constantemente vamos selecionar uma lista de itens do dom. 
A melhor forma para interagirmos com os mesmos é utilizando o método forEach.
*/

const imgs = document.querySelectorAll('img');

imgs.forEach(function (item) {
  console.log('---', item);
});

/*
PARÂMETROS DO FOREACH
O primeiro parâmetro é o callback, ou seja, 
a função que será ativada a cada item. 
Esse função pode receber três parâmetros: 
  valorAtual, 
  index,
  array;
*/
imgs.forEach(function (item, index, array) {
  console.log('-----------------------------');
  console.log(item);
  console.log(index);
  console.log(array);
});

/*
FOREACH E ARRAY
forEach é um método de Array, alguns objetos array-like possuem este método. 
Caso não possua, o ideal é transformá-los em uma array.
*/
const titulos = document.getElementsByClassName('titulo');
const tituloArray = Array.from(titulos);

tituloArray.forEach(function (item) {
  console.log(item);
});

/*
ARROW FUNCTION
Sintaxe curta em relação a function expression. 
Basta remover a palavra chave function e 
adicionar a fat arrow => após os argumentos.
*/

imgs.forEach((item) => {
  console.log('---->>', item);
});
