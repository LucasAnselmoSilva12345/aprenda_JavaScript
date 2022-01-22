/*
DESTRUCTURING
Permite a desestruturação de Arrays e Objetos. 
Atribuindo suas propriedades à novas variáveis.
*/
const carro = {
  marca: 'Fiat',
  ano: 2018,
  portas: 4,
};

const { marca, ano } = carro;

console.log(marca); // fiat
console.log(ano); // 2018

/*
DESTRUCTURING OBJECTS
A desestruturação irá facilitar a manipulação de dados. 
Principalmente quando temos uma grande 
profundidade de objetos.
*/

const cliente = {
  nome: 'Lucas',
  compras: {
    digitais: {
      livros: ['Livro 1', 'Livro 2'],
      videos: ['Video JS', 'Video HTML'],
    },
    fisicas: {
      cadernos: ['Caderno 1'],
    },
  },
};

// const { livros, videos } = cliente.compras.digitais;

// console.log(livros);
// console.log(videos);

/*
NESTING
É possível aninhar uma desestruturação dentro de outra.
*/

const {
  fisicas,
  digitais,
  digitais: { livros, videos },
} = cliente.compras;

console.log(fisicas);
console.log(livros);
console.log(videos);
console.log(digitais);

/*
NOME DAS VARIÁVEIS
É necessário indicar o nome da propriedade que você 
deseja desestruturar de um objeto. 

É possível mudar o nome da variável final com:
*/
const pessoa = {
  nome: 'Lucas',
  compras: 10,
};

const { nome, compras } = pessoa;

// ou

const { nome: nomePessoa, compras: compraCliente } = pessoa;

console.log(nomePessoa);
console.log(compraCliente);

/*
VALOR INICIAL
Caso a propriedade não exista o valor 
padrão dela será undefined. 

É possível modificar este 
valor no momento da desestruturação.
*/

const dados = {
  name: 'Lucas',
  idade: 19,
};

const { name, idade, email = 'lucas@gmail.com', cpf } = dados;

console.log(email); //lucas@gmail.com
console.log(cpf);

/*
DESTRUCTURING ARRAYS
Para desestruturar array's você 
deve colocar as variáveis entre [] colchetes.
*/
const frutas = ['Banana', 'Uva', 'Morango'];

const primeiraFruta = frutas[0];
const segundaFruta = frutas[1];
const terceiraFruta = frutas[2];

// com destructuring

const [primeira, segunda, terceira] = frutas;

console.log(primeira);
console.log(segunda);
console.log(terceira);

/*
DECLARAÇÃO DE VARIÁVEIS
A desestruturação pode 
servir para declararmos uma sequência de variáveis.
*/
const item_1 = 'Item 1';
const item_2 = 'Item 2';
const item_3 = 'Item 3';
// ou
const [item1, item2, item3] = ['Item 1', 'Item 2', 'Item 3'];

/*
ARGUMENTO DESESTRUTURADO
Se uma função espera receber 
como argumento um objeto, 
podemos desestruturar ele no momento da declaração.
*/

// function handleKeybord(event) {
//   console.log(event.key);
// exemplo sem destructuring
// }

function handleKeybord({ key }) {
  console.log(key);
}

document.addEventListener('keyup', handleKeybord);
