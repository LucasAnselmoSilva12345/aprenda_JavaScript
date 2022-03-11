/*
7 TIPOS DE DADOS
Todos são primitivos exceto os objetos.
*/

var nome = 'Lucas'; // string
var idade = 19; // number
var possuiFaculdade = true; // boolean
var time; // undifined
var comida = null; // null
var simbolo = Symbol(); // Symbol
var novoObjeto = {};

/*
Verficar tipo de dado
*/
var nome = 'Lucas';
console.log(typeof nome); // retorna string

/*
STRING
Você pode somar uma string e assim concatenar as palavras.
*/
var nome = 'Lucas';
var sobrenome = 'Silva';
var nomeCompleto = nome + ' ' + sobrenome;

// Você pode somar números com strings, o resultado final é sempre uma string.
var gols = 1000;
var frase = 'Romario fez ' + gols + ' gols';

/*
ASPAS DUPLAS, SIMPLES E TEMPLATE STRING

Não necessariamente precisamos atribuir valores a uma variável
*/
('JavaScript é "super" fácil');
("JavaScript é 'super' fácil");
('JavaScript é "super" fácil');
`JavaScript é "super" fácil"`;
//"JavaScript é "super" fácil"; // Inválido

/*
TEMPLATE STRING

Você deve passar expressões / variáveis dentro de ${}
*/
var gols = 1000;
var frase1 = 'Romario fez ' + gols + ' gols';
var frase2 = `Romario fez ${gols} gols`; // utilizando template string

/*
Exercícios
*/
// Declare uma variável contendo uma string

var name = 'Lucas';

// Declare uma variável contendo um número dentro de uma string

var numero = '19';

// Declare uma variável com a sua idade

var age = 19;

// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas

var nome1 = 'Lucas';
var nome2 = 'Silva';

var nameComplete = `meu nome é ${nome1} ${nome2}`;

// Coloque a seguinte frase em uma variável: It's time

var its = "It's time"; // obrigatorio asplas dupla pelo fato da frase conter aspas simples

// Verifique o tipo da variável que contém o seu nome
console.log(typeof nome1);
