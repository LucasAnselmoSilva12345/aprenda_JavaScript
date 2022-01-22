/*
PARÂMETROS
Nem todos os parâmetros que 
definimos são utilizados quando uma função é executada, 
devido a falta de argumentos. 

Por isso é importante nos 
prepararmos para caso estes 
argumentos não sejam declarados.
*/
function perimetroForma(lado, totalLados) {
  return lado * totalLados;
}

perimetroForma(10, 4); // 40
perimetroForma(10); // NaN

/*
PARÂMETRO PADRÃO (DEFAULT) ES5
Antes do ES6 a forma de definirmos 
um valor padrão para um parâmetro, 
era através de uma expressão.
*/
function perimetroDaForma(lado, totalLados) {
  totalLados = totalLados || 4;
  return lado * totalLados;
}

perimetroDaForma(10, 3); //30
perimetroDaForma(10); // 40

/*
PARÂMETRO PADRÃO (DEFAULT) ES6+
Com o ES6 é possível definirmos o valor de um parâmetro 
direto na declaração do mesmo, 
caso o argumento não seja 
passado no momento da execução.
*/
function perimetroDeForma(lado, totalLados = 4) {
  return lado * totalLados;
}

perimetroDeForma(10, 5); // 50
perimetroDeForma(10); // 40

/*
ARGUMENTS
A palavra chave arguments é um objeto Array-like 
criado dentro da função. 

Esse objeto contém os valores dos argumentos.
*/

function perimetro(lado, totalLados) {
  console.log(arguments);
  return lado * totalLados;
}

perimetro(10);
perimetro(10, 4, 20);

/*
PARÂMETRO REST
É possível declararmos uma parâmetro utilizando ... na frente 
do mesmo. 

Assim todos os argumentos 
que passarmos na ativação da função,
 ficarão dentro do parâmetro.
*/

function anunciarGanhadores(...ganhadores) {
  ganhadores.forEach((ganhador) => {
    console.log(ganhador + ' ganhou');
  });
}

anunciarGanhadores('Pedro', 'Lucas', 'Maria');

/*
ÚNICO REST
Só é possível ter um 
único parâmetro rest e ele deve ser o último.
*/
function ganhadores(premio, ...vencedores) {
  vencedores.forEach((vencedor) => {
    console.log(vencedor + ' ganhou um' + premio);
  });
}

ganhadores('Carro', 'Lucas', 'Maria');

/*
REST VS ARGUMENTS
Apesar de parecidos o parâmetro rest e a 
palavra arguments possuem grandes diferenças. 

Sendo rest uma array real e 
arguments um objeto Array-like.

*/

/*
OPERADOR SPREAD
Assim como o rest, 
o operador Spread também utiliza os ... para ser ativado. 
O spread irá distribuir um item iterável, um por um.
*/
const frutas = ['Banana', 'Uva', 'Morango'];
const legumes = ['Cenoura', 'Batata'];

const comidas = [...frutas, 'Pizza', ...legumes];

console.log(comidas);

/*
SPREAD ARGUMENT
O Spread pode ser muito útil para funções que recebem 
uma lista de argumentos ao invés de uma array.
*/
const listaNumeros = [1, 13, 21, 12, 55, 2, 3, 43];
const numeroMaximoSpread = Math.max(...listaNumeros);
console.log(numeroMaximoSpread);

/*
TRANSFORMAR EM ARRAY
É possível transformar itens iteráveis 
em uma array real com o spread.
*/
const btns = document.querySelectorAll('button');
const btnsArray = [...btns];
console.log(btnsArray);

const frase = 'JavaScript';
const fraseArray = [...frase];
console.log(fraseArray);

/*
Exercicios
*/

// Reescreva a função utilizando
// valores iniciais de parâmetros com ES6
function createButton(background = 'blue', color = 'red') {
  const buttonElement = document.createElement('button');
  buttonElement.style.background = background;
  buttonElement.style.color = color;
  return buttonElement;
}
const redButton = createButton();
console.log(redButton);

// Utilize o método push para inserir as frutas ao final de comidas.
const Frutas = ['Banana', 'Uva', 'Morango'];
const Comidas = ['Pizza', 'Batata'];

Comidas.push(...Frutas);

console.log(Comidas);
