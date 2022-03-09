/*
[].FOREACH()
[].forEach(callback(itemAtual, index, array)) 
a função de callback é executada para cada item da array. 
Ela possui três argumentos, 
  itemAtual (valor do item da array), 
  index (index do valor na array),
  array (array original).
*/
const carros = ['Ford', 'Mustang', 'Camarro'];
carros.forEach(function (item, index, array) {
  console.log(item, index, array);
});

// arrow function
carros.forEach((item, index, array) => {
  console.log(item.toUpperCase());
});

/*
ARROW FUNCTION
*/
const li = document.querySelectorAll('li');

li.forEach((item) => item.classList.add('ativa'));

/* metodos iguais */

li.forEach(function (item) {
  item.classList.add('ativa');
});

/*
MODIFICAR A ARRAY ORIGINAL
O terceiro argumento do callback é uma referência 
direta e se modificado irá também modificar a array original.
*/
const comidas = ['Arraoz', 'Feijão', 'Carne'];
comidas.forEach((item, index, array) => {
  array[index] = 'Frango ' + item; // indo em cada array, de acordo com a posição index, e add frango a cada item
});
console.log(comidas);

/*
[].MAP()
[].map(callback(itemAtual, index, array)) 
funciona da mesma forma que o forEach(), 
porém ao invés de retornar undefined, 
retorna uma nova array com valores atualizados de 
acordo com o return de cada iteração.
*/
const marcas = ['Dove', 'Omo', 'Colgate'];

const newMarcas = marcas.map((item) => {
  return 'Produto ' + item;
});

console.log(marcas);
console.log(newMarcas);

/*
[].MAP() VS [].FOREACH()
Se o objetivo for modificar os valores da array atual, 
sempre utilize o map, pois assim uma nova array com 
os valores modificados é retornada e você pode imediatamente 
iterar novamente sobre estes valores.
*/
const numeros = [2, 4, 6, 8, 10, 12];
const numeros_X3 = numeros.map((item) => item * 3);
console.log(numeros_X3);

/*
[].MAP() COM OBJETOS
Map pode ser muito útil para interagirmos com uma array 
de objetos, onde desejamos isolar um valor único de cada objeto.
*/
const aulas = [
  {
    nome: 'Matemática',
    min: 15,
  },
  {
    nome: 'Portugues',
    min: 30,
  },
  {
    nome: 'Fisica',
    min: 10,
  },
  {
    nome: 'Quimica',
    min: 25,
  },
];
const tempoAula = aulas.map((aula) => aula.min);
console.log(tempoAula);
// map percorre cada chave {} do obj, e seleciona o que desejamos, que no caso é o .min

const puxarNomes = (aula) => aula.nome;
const nomesAulas = aulas.map(puxarNomes);

// const teste = aulas.map((aula) => aula.nome); -- também dá certo

console.log(nomesAulas);

/*
[].REDUCE()
[].reduce(callback(acumulador, valorAtual, index, array), 
valorInicial) executa a função de callback para cada item da Array. 
Um valor especial existe nessa função de callback, 
ele é chamado de acumulador, 
mas é na verdade apenas o retorno da iteração anterior.
*/
const time = [10, 25, 30];

const total1 = time.reduce((acumulador, item, index, array) => {
  console.log(acumulador, item);
  return acumulador + item;
}, 0);
console.log('Resultado -> ' + total1);

const total2 = time.reduce((acc, cur) => acc + cur, 100);
console.log(total2);

/*
REDUCE PASSO A PASSO 1
O primeiro parâmetro do callback é o valor do 
segundo argumento passado no reduce(callback, inicial) 
durante a primeira iteração. 
Nas iterações seguintes este valor passa a ser o 
retornado pela anterior.

const tempos = [10, 25, 30]

// 1
tempos.reduce((0, 10) => {
  return 0 + 10;
}, 0) // retorna 10

// 2
tempos.reduce((10, 25) => {
  return 10 + 25;
}, 0)

// 3 
tempos.reduce((35, 30) => {
  return 35 + 30;
}, 0)


REDUCE PASSO A PASSO 2
Se não definirmos o valor inicial do acumulador, 
ele irá pular a primeira iteração e começara a 
partir da segunda. 
Neste caso o valor do acumulador será o 
valor do item da primeira iteração.

const tempo2 = [10, 25, 30]

// 1
tempo2.reduce((10, 25) => {
  return 10 + 25;
}) // retorna 35

// 2
tempo2.reduce((35, 30) => {
  return 35 + 30;
}) // retorna 65
*/

/*
MAIOR VALOR COM [].REDUCE()
*/
const number = [10, 25, 60, 5, 35, 10];

const maiorValor = number.reduce((anterior, atual) => {
  return anterior < atual ? atual : anterior;
});
console.log(maiorValor);

/*
PODEMOS RETORNAR OUTROS VALORES
*/
const materias = [
  {
    nome: 'Matematica',
    min: 35,
  },
  {
    nome: 'Portugues',
    min: 15,
  },
  {
    nome: 'Fisica',
    min: 25,
  },
  {
    nome: 'Quimica',
    min: 55,
  },
];
const listaMaterias = materias.reduce((acumulador, materia, index) => {
  console.log(materia.nome);
  acumulador[index] = materia.nome;
  console.log(acumulador);
  return acumulador;
}, {});

/*
// 1
aulas.reduce(({}, {nome: 'Matematica', min: 15}, 0) => {
  {}[0] = 'Matematica';
  return {0: 'Matematica'};
}, {})

// 2
aulas.reduce(({0: 'Matematica'}, {nome: 'Portugues', min: 10}, 1) => {
  {0: 'Matematica'}[1] = 'Portugues';
  return {0: 'Matematica', 1: 'Portugues'};
}, {})

// 3
aulas.reduce(({0: 'Matematica', 1: 'Portugues'}, {nome: 'Fisica', min: 20}, 2) => {
  {0: 'Matematica', 1: 'Portugues'}[2] = 'Fisica';
  return {0: 'Matematica', 1: 'Portugues', 2: 'Fisica'};
}, {})

// 4
aulas.reduce(({0: 'Matematica', 1: 'Portugues', 2: 'Fisica'}, {nome: 'Quimica', min: 25}, 3) => {
  {0: 'Matematica', 1: 'Portugues', 2: 'Fisica'}[3] = 'Quimica';
  return {0: 'Matematica', 1: 'Portugues', 2: 'Fisica', 3: 'Quimica'};
}, {})
*/

/*
[].REDUCERIGHT()
Existe também o método [].reduceRight(), 
a diferença é que este começa a iterar da direita para a 
esquerda, enquanto o reduce itera da esquerda para a direita.
*/
const frutas = ['Banana', 'Pera', 'Uva'];

const frutasRight = frutas.reduceRight((acc, fruta) => {
  return acc + ' ' + fruta;
});
console.log(frutasRight);

const frutasLeft = frutas.reduce((acc, fruta) => {
  return acc + ' ' + fruta;
});
console.log(frutasLeft);

/*
[].SOME()
[].some(), se pelo menos um return da iteração for truthy, 
ele retorna true.
*/
const celulares = ['Samsung', 'Iphone', 'Xiomi'];
const temSamsung = celulares.some((celular) => {
  return celular === 'Samsung';
});
console.log(temSamsung);

function maiorqueCem(number) {
  return number > 100;
}

const numbers = [0, 43, 22, 88, 101, 2];
const handleMaior = numbers.some(maiorqueCem);
console.log(handleMaior);

/*
[].EVERY()
[].every(), se todos os returns das iterações forem truthy, 
o método irá retornar true. 
Se pelo menos um for falsy, ele irá retornar false.
*/
const nomes = ['Lucas', 'Silva', 'Moraes', ''];
// false, pois pelo menos um nome está vazio

const arraysNomes = nomes.every((nome) => {
  return nome;
});
console.log(arraysNomes);

const ids = [6, 5, 8, 9, 10, 101];
const maiorQueTres = ids.every((x) => x > 3);
console.log(maiorQueTres);

/*
[].FIND() E [].FINDINDEX()
[].find(), retorna o valor atual da primeira iteração que 
retornar um valor truthy. 

Já o [].findIndex(), ao invés de retornar o valor, 
retorna o index deste valor na array.
*/
const computadores = ['Mac', 'Positivo', 'Dell', 'Lenovo'];
const buscaPc = computadores.findIndex((computador) => {
  return computador === 'Mac';
});
console.log(buscaPc);

const codigos = [6, 43, 22, 88, 101, 29];
const buscaMaior45 = codigos.find((x) => x > 45);
console.log(buscaMaior45);

/*
[].FILTER()
[].filter(), retorna uma array com a lista de valores 
que durante a sua iteração retornaram um valor truthy.
*/
const linguagens = ['Java', 'Php', '', 'Js', undefined, 'C', 0, 'Cobol'];
const arrayLinguagem = linguagens.filter((linguagem) => {
  return linguagem;
});
console.log(arrayLinguagem);

const codigosIds = [6, 43, 22, 88, 101, 29];
const buscaMaior22 = codigosIds.filter((x) => x > 22);
console.log(buscaMaior22);

/*
FILTER EM OBJETOS
*/
const materiasAulas = [
  {
    nome: 'HTML 1',
    min: 15,
  },
  {
    nome: 'HTML 2',
    min: 10,
  },
  {
    nome: 'CSS 1',
    min: 20,
  },
  {
    nome: 'JS 1',
    min: 25,
  },
];
const aulasMaiores = materiasAulas.filter((aula) => {
  return aula.min > 15;
});
console.log(aulasMaiores);
