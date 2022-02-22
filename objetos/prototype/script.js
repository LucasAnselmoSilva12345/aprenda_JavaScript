/*
PROTOTYPE
A propriedade prototype é um objeto adicionado a uma função quando a mesma é criada.
*/

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.abracar = function () {
    return 'Abraçou';
  };
  this.andar = function () {
    return 'Andou pelo objeto';
  };
}

const andre = new Pessoa('andre', 28);

console.log(Pessoa.prototype); // retorna objeto
console.log(andre.prototype); // undefined

/*
FUNCAO.PROTOTYPE
É possível adicionar novas propriedades e métodos ao objeto prototype.
*/

Pessoa.prototype.andar = function () {
  return this.nome + ' andou';
};

Pessoa.prototype.nadar = function () {
  return this.nome + ' nadar';
};

/*
CONSTRUTORES NATIVOS
Objetos, Funções, Números, Strings e outros tipos de dados são criados 
utilizando construtores. Esses construtores possuem um protótipo com 
propriedades e métodos, que poderão ser acessadas pelo tipo de dado.
*/

const pais = 'Brasil';
const cidade = new String('Rio');

pais.charAt(0); // B
pais.charAt(0); // R
pais.toUpperCase(); // BRASIL

String.prototype;

/*
É POSSÍVEL ACESSAR A FUNÇÃO DO PROTÓTIPO
É comum, principalmente em códigos mais antigos, o uso direto de funções do 
protótipo do construtor Array.
*/

const lista = document.querySelectorAll('li');

// Transforma em uma array
const listaArray = Array.prototype.slice.call(lista);

/*
MÉTODO DO OBJETO VS PROTÓTIPO
Nos objetos nativos existem métodos linkados diretamente ao Objeto e outros 
linkados ao protótipo.
*/
const listaArray2 = Array.from(lista); // modo atual

/*
ENTENDA O QUE ESTÁ SENDO RETORNADO
Os métodos e propriedades acessado com o . são referentes ao tipo de dados que 
é retornado antes desse .
*/

const Carro = {
  marca: 'Ford',
  preco: 2000,
  acelerar() {
    return true;
  },
};

Carro; // OBJECT
Carro.marca; // STRING
Carro.preco; // NUMBER
Carro.acelerar; // FUNCTION
Carro.acelerar(); // BOOLEAN
Carro.marca.charAt; // FUNCTION
Carro.marca.charAt(0); // STRING

//.constructor.name -> verificar o nome do construtor
