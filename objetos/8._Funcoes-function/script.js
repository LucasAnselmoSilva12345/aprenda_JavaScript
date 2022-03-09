/*
FUNCTION
Toda função é criada com o construtor Function e 
por isso herda as suas propriedades e métodos.
*/
function areaQuadrada(lado) {
  return lado * lado;
}
// funções semelhantes
const perimetroQuadrado = new Function('lado', 'return lado * 4');
console.log(perimetroQuadrado(4));

/*
PROPRIEDADES
Function.length retorna o total de argumentos da função. 
Function.name retorna uma string com o nome da função.
*/
function somar(n1, n2) {
  return n1 + n2;
}

console.log(somar.length);
console.log(somar.name);

/*
FUNCTION.CALL()
function.call(this, arg1, arg2, ...) executa a função, 
sendo possível passarmos uma nova 
referência ao this da mesma.
*/

const carro = {
  marca: 'Ford',
  ano: 2021,
};

function descricaoCarro(modelo) {
  console.log(this.marca + ' ' + this.ano + ' ' + modelo);
}

descricaoCarro(); // undefined
descricaoCarro.call(); // undefined
descricaoCarro.call(carro, 'KA');

/*
THIS
O valor de this faz referência ao objeto criado durante a 
construção do objeto (Constructor Function). 
Podemos trocar a referência do método ao this, 
utilizando o call().
*/
const carros = ['Ford', 'Fiat', 'VW'];

carros.forEach((item) => {
  console.log(item);
});

carros.forEach.call(carros, (item) => {
  console.log(item);
});

const frutas = ['Banana', 'Pera', 'Uva'];

carros.forEach.call(frutas, (item) => {
  console.log(item);
});

/*
EXEMPLO REAL
O objeto atribuído a lista será o substituído pelo 
primeiro argumento de call()
*/
function Dom(seletor) {
  this.element = document.querySelector(seletor);
}

Dom.prototype.ativo = function (classe) {
  this.element.classList.add(classe);
};

const li = {
  element: document.querySelector('li'),
};

// const ul = new Dom('ul');

Dom.prototype.ativo.call(li, 'ativar');
// Dom.prototype.ativo.call(ul, 'ativar');

/*
ARRAY'S E CALL
É comum utilizarmos o call() nas funções do protótipo 
do construtor Array. 
Assim podemos estender todos os métodos de Array 
à objetos que se parecem com uma Array (array-like).
*/

Array.prototype.mostreThis = function () {
  console.log(this);
};

const fruits = ['Uva', 'Maçã', 'Banana'];
fruits.mostreThis();

const remover = Array.prototype.pop.call(fruits);
console.log(fruits);

/*
ARRAY-LIKE
HTMLCollection, NodeList e demais objetos do Dom, 
são parecidos com uma array. 
Por isso conseguimos utilizar os mesmos na substituição 
do this em call.
*/
const itensLi = document.querySelectorAll('li');

const filtro = Array.prototype.filter.call(itensLi, (item, index) => {
  return item.classList.contains('ativar');
});

console.log(filtro);

/*
FUNCTION.APPLY()
O apply(this, [arg1, arg2, ...]) funciona como o call, 
a única diferença é que os argumentos da função 
são passados através de uma array.
*/
const numeros = [3, 4, 6, 11, 22, 68, 96, 36];
Math.max.apply(null, numeros);
Math.max.call(null, 3, 4, 5, 6, 9, 8, 7, 4);

// podemos passar null para o valor
// de this, caso a função não utilize
// o objeto, principal para funcionar

/*
APPLY VS CALL
A única diferença é a array como segundo argumento.
*/
const itemLi = document.querySelectorAll('li');

function itemPossuiAtivo(item) {
  return item.classList.contains('ativar');
}

const filtros1 = Array.prototype.filter.call(itemLi, itemPossuiAtivo);
const filtros2 = Array.prototype.filter.apply(itemLi, [itemPossuiAtivo]);

console.log(filtros1);
console.log(filtros2);

/*
FUNCTION.BIND()
Diferente de call e apply, bind(this, arg1, arg2, ...) 
não irá executar a função mas sim retornar a mesma com o 
novo contexto de this.
*/
const Li = document.querySelectorAll('li');

const filtrarLi = Array.prototype.filter.bind(Li, (item) => {
  return item.classList.contains('ativar');
});

filtrarLi();

/*
ARGUMENTOS E BIND
Não precisamos passar todos os argumentos no momento do bind, 
podemos passar os mesmos na nova função no momento da execução 
da mesma.
*/
const Carros = {
  marca: 'Ford',
  ano: 2021,
  acelerar: function (aceleracao, tempo) {
    return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
  },
};
const exemp1 = Carros.acelerar(100, 20);
console.log(exemp1);

const honda = {
  marca: 'Honda',
};
const acelerarHonda = Carros.acelerar.bind(honda);
const exemp2 = acelerarHonda(200, 10);
console.log(exemp2);

/*
ARGUMENTOS COMUNS
Podemos passar argumentos padrões para uma função e 
retornar uma nova função.
*/
function imc(altura, peso) {
  return peso / (altura * altura);
}

const imc180 = imc.bind(null, 1.8);

console.log(imc(1.8, 70));

console.log(imc180(70));
