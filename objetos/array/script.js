/*
ARRAYS
Arrays armazenam uma coleção de elementos. 
Estes podem ser strings, arrays, boolean, number, 
functions, objects e mais.
*/

const instrumentos = ['Guitarra', 'Bateria', 'Violão'];
const precos = [49, 50, 99, 69];

console.log(instrumentos);
console.log(instrumentos[0]);
console.log(precos);
console.log(precos[0]);

const dados = [
  new String('Tipo 1'),
  ['Carro', 'Portas', { cor: 'Azul', preco: 2000 }],
  function andar(nome) {
    console.log(nome);
  },
];

console.log(dados);
console.log(dados[0]);
console.log(dados[0].toLowerCase());
console.log(dados[1]);
console.log(dados[1][0]);
console.log(dados[1][2]);
console.log(dados[1][2].cor);
console.log(dados[1][2].preco);
console.log(dados[2]);
console.log(dados[2]('Ativando essa função'));

/*
CONSTRUÇÃO DE ARRAYS
Toda array herda os métodos e 
propriedades do protótipo do construtor Array.
*/
const carro = new Array('Corola', 'Mustang', 'Honda');

console.log(carro[1]);
carro[2] = 'Ferrari';
console.log(carro);
carro[10] = 'Parati';
console.log(carro);
console.log(carro.length); // tamanho da array

/*
ARRAY.FROM()
Array.from() é um método utilizado para 
transformar array-like objects, em uma array.
*/
const li = document.querySelectorAll('li'); // nodelist
const arrayLi = Array.from(li);

const obj = {
  0: 'Lucas',
  1: 'Anselmo',
  2: 'Silva',
  length: 3,
};

const objArray = Array.from(obj);

console.log(objArray);

console.log(li);
console.log(arrayLi);

/*
ARRAY.ISARRAY()
Verifica se o valor passado é uma array e 
retorna um valor booleano.
*/
Array.isArray(li);
Array.isArray(arrayLi);

/*
ARRAY.OF(), ARRAY() E NEW ARRAY()
Verifica se o valor passado é uma array e retorna um 
valor booleano. A palavra chave new não é necessária 
para utilizar o construtor Array.
*/
Array.of(10); // [10]
Array.of(1, 2, 3, 4, 5); // [1,2,3,4,5]
new Array(5); // [,,,,,]
Array(5); // [,,,,,]
Array(1, 2, 3, 4); // [1,2,3,4]

/*
PROPRIEDADES E MÉTODOS DO PROTOTYPE
[].length retorna o tamanho da array.
*/
const frutas = ['Banana', 'Pera', ['Uva Roxa', 'Uva Verde']];

console.log(frutas);
console.log(frutas.length);
console.log(frutas[0].length);
console.log(frutas[1].length);
console.log(frutas[2].length);
console.log(frutas[2][0].length);
console.log(frutas[2][1].length);

/*
MÉTODOS MODIFICADORES [].SORT()
Os próximos métodos que vamos falar sobre, 
são métodos modificadores (mutator methods). 
Além de retornarem um valor, 
eles modificam a array original. 
[].sort() organiza a pelo unicode.
*/

const times = ['Corinthians', 'Santos', 'Gremio'];
times.sort();

console.log(times);

/*
[].UNSHIFT() E [].PUSH()

[].unshift() adiciona elementos ao início da array 
e retorna o length da mesma. 


[].push() adiciona elementos ao final da array 
e retorna o length da mesma.
*/

const carrosDeCorridas = ['Mercedes', 'Fiat', 'VW'];
carrosDeCorridas.unshift('Aston Martin', 'Kia');
console.log(carrosDeCorridas);

carrosDeCorridas.push('Ferrari');
console.log(carrosDeCorridas);

/*
[].SHIFT() E [].POP()

[].shift() remove o primeiro elemento da array e retorna o mesmo. 
[].pop() remove o último elemento da array e retorna o mesmo.
*/
const marcas = ['Dove', 'Omo', 'Ajax', 'Nivea'];
console.log(marcas);

const primeiraMarca = marcas.shift(); // 'Dove'
console.log(primeiraMarca);
console.log(marcas);

const ultimaMarca = marcas.pop(); // Nivea
console.log(ultimaMarca);
console.log(marcas);

/*
[].REVERSE()

[].reverse() inverte os itens da array e retorna a nova array.
*/
const materias = ['Matemática', 'Algebra', 'Fisica', 'Quimica'];
materias.reverse();
console.log(materias);

/*
[].splice()

[].splice(index, remover, item1, item2, ...) 
adiciona valores na array a partir do index. 
Remove a quantidade de itens que for passada no 
segundo parâmetro (retorna esses itens).
*/
const formula_one = ['Mercedes', 'Aston', 'Renault', 'Kia'];

formula_one.splice(1, 0, 'Alpha', 'Ferrari');
console.log(formula_one);

formula_one.splice(3, 2, 'Willians');
console.log(formula_one);

/*
[].COPYWITHIN()
[].copyWithin(alvo, inicio, final) a partir do alvo, 
ele irá copiar a array começando do inicio até o final e 
vai preencher a mesma com essa cópia. 
Caso omita os valores de início e final, 
ele irá utilizar como inicio o 0 e final o valor total da array.
*/
const itens = ['Item1', 'Item2', 'Item3', 'Item4'];
itens.copyWithin(2, 0, 3);
console.log(itens);

const itens2 = ['Item1', 'Item2', 'Item3', 'Item4'];
itens2.copyWithin(-1);
console.log(itens2);

/*
[].FILL()
[].fill(valor, inicio, final) preenche a array com o valor, 
do início até o fim.
*/

const comida = ['Arroz', 'Feijão', 'Batata', 'Carne'];
comida.fill('Frango');
console.log(comida);

comida.fill('Banana', 2);
console.log(comida);

comida.fill('Cereja', 1, 3);
console.log(comida);

/*
MÉTODOS DE ACESSO [].CONCAT()
Os métodos abaixo não modificam a array original, 
apenas retornam uma array modificada. 
[].concat() irá concatenar a array com o valor passado.
*/
const transporte1 = ['Barco', 'Aviao'];
const transporte2 = ['Carro', 'Moto'];

const transporte = transporte1.concat(transporte2);
console.log(transporte);

const maisTransporte = [].concat(transporte, 'Van');
console.log(maisTransporte);

/*
[].INCLUDES(), [].INDEXOF() E [].LASTINDEXOF()
[].includes(valor) verifica se a array possui o valor e retorna true ou false. 
[].indexOf(valor) verifica se a array possui o valor e retorna o index do primeiro valor na array. 
Já o [].lastIndexOf(valor) retorna o index do último.
*/
const linguagensProgramacao = ['html', 'css', 'js', 'php', 'python', 'js'];

linguagensProgramacao.includes('css'); // true
linguagensProgramacao.includes('ruby'); // false
linguagensProgramacao.indexOf('python'); // 4
linguagensProgramacao.indexOf('js'); // 2
linguagensProgramacao.lastIndexOf('js'); // 5

/*
[].JOIN()
[].join(separador) junta todos os valores da array e 
retorna uma string com eles. 
Se você passar um valor como parâmetro, 
este será utilizado durante a junção de cada item da array.
*/
const bolo = ['Chocolate', 'Moranho', 'Baunilha', 'Ninho'];
console.log(bolo.join());
console.log(bolo.join(' '));
console.log(bolo.join('_'));
console.log(bolo.join('parametro'));

let htmlString = '<h2>Titulo Principal</h2>';
htmlString = htmlString.split('h2');
console.log(htmlString);

htmlString = htmlString.join('h1');
console.log(htmlString);

/*
[].SLICE()
[].slice(inicio, final) retorna os itens da array 
começando pelo início e indo até o valor de final.
*/
const pecas = ['placa', 'processador', 'cpu', 'fonte', 'monitor'];
console.log(pecas.slice(3)); // fonte monitor
console.log(pecas.slice(1, 4)); // item 4 não entra

const clonePecas = pecas.slice();
console.log(clonePecas);
