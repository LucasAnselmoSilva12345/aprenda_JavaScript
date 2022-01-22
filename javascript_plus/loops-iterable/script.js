/*
ITERABLE
São objetos que possuem o método [Symbol.iterator], 
geralmente no protótipo,
é dentro dele que a função que 
lida com a iteração será definida. 
Ex: Array, String, NodeList, boa parte das Array-Like e outros.
*/

/*
FOR...OF
É possível fazemos um loop por cada iteração 
do objeto iterável utilizando o for...of. 
Além deste loop podemos também utilizar o 
Spread Operator nos mesmos.
*/
const frutas = ['Banana', 'Morango', 'Uva'];
const frase = 'JavaScript';

for (const fruta of frutas) {
  console.log(fruta);
}

for (const char of frase) {
  console.log(char);
}

/*
SPREAD E FOR...OF
Com o for loop podemos manipular 
cada um dos elementos do objeto iterável.
*/
const buttons = document.querySelectorAll('button');

for (const btn of buttons) {
  btn.style.background = 'blue';
  btn.style.color = 'white';
  btn.style.border = 'none';
  btn.style.padding = '26px';
}

console.log(...buttons);

/*
APENAS ITERÁVEIS
O for...of não irá funcionar em 
um objeto comum que não seja iterável.
*/
const carro = {
  marca: 'Chevrolet',
  ano: 2018,
};

// Erro, não é iterável -> TypeError: carro is not iterable
// for (const propriedade of carro) {
//   console.log(propriedade);
// }

/*
FOR...IN
Este loop irá retornar a chave (key) 
de todas as propriedades enumeráveis (que não sejam símbolos) 
de um objeto.
*/
const veiculo = {
  modelo: 'Cruze',
  fabricante: 'Chevrolet',
};

for (const dados in veiculo) {
  console.log(dados);
}

/*
ARRAYS E FOR...IN
Uma Array é um objeto, 
porém a chave de cada valor é igual ao seu index.
*/
const alimentos = ['Arroz', 'Feijao', 'Carne'];

for (const index in alimentos) {
  console.log(index);
}

for (const index in frutas) {
  console.log(frutas[index]);
}

/*
CHAVE E VALOR
Utilizando o for...in podemos retornar todas 
as chaves e valores de propriedades enumeráveis.
*/
const btnUnico = document.querySelector('button');
const btnStyles = getComputedStyle(btnUnico);

for (const style in btnStyles) {
  console.log(`${style}: ${btnStyles[style]}`);
}

/*
DO / WHILE
Outro tipo de loop é o Do / While. Não é muito utilizado.
*/
let i = 0;
do {
  console.log(i++);
} while (i <= 5);

/*
EXERCICIOS
*/

// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li

const itens = document.querySelectorAll('li');

for (const item of itens) {
  console.log(itens);
  item.classList.add('listas');
}

// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window

for (const windowKey in window) {
  console.log(windowKey);
}
