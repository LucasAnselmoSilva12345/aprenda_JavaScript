/*
FUNCTION DECLARATION
São duas as formas mais comuns de declararmos uma função. 
A que utilizamos até o momento 
é chamado de Function Declaration.
*/
function soma(a, b) {
  return a + b;
}
soma(4, 3);

/*
FUNCTION EXPRESSION
É criada a partir da declaração de uma variável, 
na qual assinalamos uma função. 

Esta função pode ser anônima ou nomeada. 
A mesma poderá ser ativada através da variável assinalada.
*/
const somar = function (a, b) {
  return a + b;
};
somar(4, 2);

/*
HOISTING
Function Declarations são completamente definidas 
no momento do hoisting, 

já function expressions apenas serão 
definidas no momento da execução. 

Por isso a ordem da declaração 
de uma FE possui importância.
*/

menos(4, 2); // 2
// dividir(4, 2); // error

function menos(a, b) {
  return a - b;
}

const dividir = function (a, b) {
  return a / b;
};

/*
ARROW FUNCTION
Podemos criar utilizando arrow functions
*/

const somas = (a, b) => a + b;
somar(1, 3); // 4

const quadrado = (a) => a * a;
quadrado(4); // 16

/*
ESTRUTURA / PREFERÊNCIA
Geralmente o uso entre expression / declaration 
é uma questão de preferência. 

Function Expression força a criação da mesma 
antes de sua ativação, 
o que pode contribuir para um código mais estruturado.
*/
// Declarada como método de window
// vaza o escopo de bloco, como se
// fosse criada utilizando var

function Somar(a, b) {
  return a + b;
}

const Dividir = (a, b) => a + b;

Somar(4, 2);
Dividir(7, 1);

/*
IIFE - IMMEDIATELY INVOKED FUNCTION EXPRESSION
Antes da introdução de modules e 
da implementação do escopo de bloco, 
a forma mais comum utilizada para 
isolarmos o escopo de um código JavaScript 
era através das chamadas IIFE's.
*/

const instrumento = 'Violão';

(function () {
  const instrumento = 'Guitarra';
  console.log(instrumento);
})();

// (() => {
//   const instrumento = 'Guitarra';
//   console.log(instrumento);
// })();

console.log(instrumento);

/* EXERCICIOS */
// Remova o erro

const priceNumber = (n) => +n.replace('R$', '').replace(',', '.');
priceNumber('R$ 99,99');
console.log(priceNumber('R$ 99,99'));

// Crie uma IIFE e isole o escopo
// de qualquer código JS.

var nome = 'Lucas';
(() => {
  const nome = 'Silva';
  console.log(nome);
})();
console.log(nome);

// Como podemos utilizar
// a função abaixo.
const active = (callback) => callback(callback);

active(function () {
  console.log('Teste de active');
});
