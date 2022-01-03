/*
OBJECT
Todo objeto é criado com o construtor Object 
e por isso herda as propriedades e métodos do seu prototype.
*/
const carros = {
  marca: 'Ford',
  ano: 2021,
};

const pessoa = new Object({
  nome: 'Lucas',
  idade: 19,
});

/*
MÉTODOS DE OBJECT
Object.create(obj, defineProperties) retorna um novo objeto 
que terá como protótipo o objeto do primeiro argumento.
*/
const carro = {
  rodas: 4,
  init(marca) {
    this.marca = marca;
    return this;
  },
  acelerar() {
    return `${this.marca} acelerou as ${this.rodas} rodas`;
  },
  buzinar() {
    return this.marca + ' buzinou';
  },
};

const honda = Object.create(carro);
honda.init('Honda').acelerar();

/*
OBJECT.ASSIGN()
Object.assign(alvo, obj1, obj2) adiciona ao alvo as 
propriedades e métodos enumeráveis dos demais objetos. 
O assign irá modificar o objeto alvo.
*/
const funcaoAutomovel = {
  acelerar() {
    return 'acelerou';
  },
  buzinar() {
    return 'buzinou';
  },
};

const moto = {
  rodas: 2,
  capacete: true,
};

const picape = {
  rodas: 4,
  mala: true,
};

Object.assign(moto, funcaoAutomovel);
Object.assign(picape, funcaoAutomovel);

/*
OBJECT.DEFINEPROPERTIES()
Object.defineProperties(alvo, propriedades) 
adiciona ao alvo novas propriedades. 
A diferença aqui é a possibilidade de serem definidas 
as características dessas propriedades.
*/
const motos = {};

Object.defineProperties(motos, {
  rodas: {
    value: 2,
    configurable: false, // impede deletar e mudar valor
    enumerable: true,
  },
  capacete: {
    value: true,
    configurable: true,
    writable: false, // impede mudança de valor
  },
});

motos.rodas = 4;
delete motos.capacete;
motos; // rodas: 2

/*
GET E SET
É possível definirmos diferentes comportamentos para 
get e set de uma propriedade. 
Lembrando que ao acionarmos uma propriedade obj.propriedade, 
a função get é ativada 
ao setarmos ob.propriedade = 'Valor' a função de set é ativada.
*/
const caminhao = {};

Object.defineProperties(caminhao, {
  velocidade: {
    get() {
      return this._velocidade;
    },
    set(valor) {
      this._velocidade = 'Velocidade ' + valor;
    },
  },
});

caminhao.velocidade = 200;
caminhao.velocidade; // Velocidade 200

/*
OBJECT.GETOWNPROPERTYDESCRIPTORS(OBJ)
Lista todos os métodos e propriedades de um objeto, 
com as suas devidas configurações.
*/
Object.getOwnPropertyDescriptor(Array);
// Lista com metodos e propriedades e Array

Object.getOwnPropertyDescriptors(Array.prototype);
// Lista com metodo e propriedades do prototipo de Array

Object.getOwnPropertyDescriptor(window, 'innerHeight');
// puxa de uma unica propriedade

/*
OBJECT.KEYS(OBJ), OBJECT.VALUES(OBJ) OBJECT.ENTRIES(OBJ)
Object.keys(obj) retorna uma array com as chaves de todas 
as propriedades diretas e enumeráveis do objeto. 

Object.values(obj) retorna uma array com os valores do objeto. 

Object.entries(obj) retorna uma array com array's contendo 
a chave e o valor.
*/

Object.keys(Array);
// [] vazia, pois não possui propriedades enumeraveis

const dateCarros = {
  marca: 'Ford',
  ano: 2021,
};

Object.keys(dateCarros); // ['marca', 'ano']

Object.values(dateCarros); // ['Ford', 2021]

Object.entries(dateCarros); // [['marca', 'Ford'], ['ano', 2021]]

/*
OBJECT.GETOWNPROPERTYNAMES(OBJ)
Retorna uma array com todas as propriedades diretas do 
objeto (não retorna as do protótipo).
*/
Object.getOwnPropertyNames(Array);
// ['lenght', 'name', 'prototype', 'isArray', 'from', 'of']

Object.getOwnPropertyNames(Array.prototype);
// [..., 'filter', 'map', 'every', 'some', 'reduce', ...]

const carrinho = {
  marca: 'Ford',
  ano: 2028,
};

Object.getOwnPropertyNames(carrinho); // ['marca', 'ano']

/*
OBJECT.GETPROTOTYPEOF() E OBJECT.IS()
Object.getPrototypeOf(), retorna o protótipo do objeto. 

Object.is(obj1, obj2) verifica se os objetos são iguais 
e retorna true ou false.
*/

const frutas = ['Banana', 'Pera'];
Object.getPrototypeOf(frutas);
Object.getPrototypeOf(''); // string

const frutas1 = ['Banana', 'Pera'];
const frutas2 = ['Banana', 'Pera'];

const novaFruta = frutas1;

Object.is(frutas1, frutas2); // false
Object.is(frutas1, novaFruta); // true

/*
OBJECT.FREEZE(), OBJECT.SEAL(), OBJECT.PREVENTEXTENSIONS()
Object.freeze() impede qualquer mudança nas propriedades. 

Object.seal() previne a adição de novas propriedades e 
impede que as atuais sejam deletadas. 

Object.preventExtensions() previne a adição de novas 
propriedades.
*/
const carroPadrao = {
  marca: 'Ford',
  ano: 2021,
};

Object.freeze(carroPadrao);
Object.seal(carroPadrao);
Object.preventExtensions(carroPadrao);

carroPadrao.marca = 'honda';
carroPadrao.portas = 4;

Object.isFrozen(carroPadrao); // true
Object.isSealed(carroPadrao); // true
Object.isExtensible(carroPadrao); // false

console.log(carroPadrao);

/*
PROPRIEDADES E MÉTODOS DO PROTÓTIPO
Já que tudo em JavaScript é objeto, as propriedades 
abaixo estão disponíveis em todos os objetos criados 
a partir de funções construtoras. 
{}.constructor retorna a função construtora do objeto.
*/
const fruits = ['Banana', 'Uva'];
fruits.constructor; // Array

const frase = 'Isso é uma String';
frase.constructor; //

/*
{}.HASOWNPROPERTY('PROP') E {}.PROPERTYISENUMERABLE('PROP')

Verifica se possui a propriedade e retorna true. 
A propriedade deve ser direta do objeto e não do protótipo. 

O {}.propertyIsEnumerable() verifica se a propriedade 
é enumerável.
*/

const Frutas = ['Banana', 'Uva'];

Frutas.hasOwnProperty('map'); // map
Array.hasOwnProperty('map'); // map
Array.prototype.hasOwnProperty('map'); // true

Array.prototype.propertyIsEnumerable('map'); // false
window.propertyIsEnumerable('innerHeight'); // true

/*
{}.ISPROTOTYPEOF(VALOR)
Verifica se é o protótipo do valor passado.
*/
const formula1 = ['Mercedez', 'Aston'];

Array.prototype.isPrototypeOf(formula1);

/*
{}.TOSTRING()
Retorna o tipo do objeto. 
O problema é toString() ser uma função dos protótipos 
de Array, String e mais. Por isso é comum utilizarmos a 
função direto do Object.prototype.toString.call(valor).
*/
const arrayFrase = ['Frase 1', 'Frase 2'];
arrayFrase.toString(); // 'Frase 1, Frase 2'
typeof arrayFrase; // object
Object.prototype.toString.call(arrayFrase); // object array

const textoFrase = 'Uma string';
textoFrase.toString(); // 'Uma string'
typeof textoFrase; // string
Object.prototype.toString.call(textoFrase); // object string

const newCars = { marca: 'Chevrolet' };
newCars.toString(); // [object Object]
typeof newCars; // object
Object.prototype.toString.call(newCars); // [object Object]

const li = document.querySelectorAll('li');
typeof li; // object
Object.prototype.toString.call(li); // [object NodeList]
