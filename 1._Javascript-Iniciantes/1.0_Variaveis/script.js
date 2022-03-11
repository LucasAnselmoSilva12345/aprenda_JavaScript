/*
VARIÁVEIS
Responsáveis por guardar dados na memória.

Inicia com a palavra var, let ou const
*/
var nome = 'Lucas';
let idade = 19;
const possuiFaculdade = true;

/*
EVITAM REPETIÇÕES
DRY (Don't repeat yourself)
*/
var preco = 20;
var totalComprado = 5;
var precoTotal = preco * totalComprado;

/*
SINTAXE
Palavra chave var seguida do nome, sinal de igual e o valor.
*/
var name = 'Lucas';
var age = 19;
var possuiEnsinoMedio = true;

/*
VÍRGULA
Utilizei a vírgula para criar mais de uma variável, 
sem repetir a palavra chave var.
*/
var minhaProfissao = 'Desenvolvedor Front-end',
  anosDeProfissao = 1,
  souEstudante = true;

/*
SEM VALOR
Pode declarar ela e não atribuir valor inicialmente.
*/
var precoAplicativo; // retorno = undefined

/*
NOME
Os nomes podem iniciar com $, _, ou letras.

Podem conter números mas não iniciar com eles

Case sensitive

nome é diferente de Nome

Não utilizar palavras reservadas

https://www.w3schools.com/js/js_reserved.asp

Camel case

É comum nomearmos assim: abrirModal
*/

/*
// Inválido
var §nome;
var function;
var 1possuiFaculdade;

// Válido
var $selecionar;
var _nome;
var possuiFaculdadeNoExterior;
*/

/*
HOISTING
São movidas para cima do código, porém o valor atribuído não é movido.
*/
console.log(meuNomeCompleto);
var meuNomeCompleto = 'Lucas Silva';
// retorno undefined

var meuComputador = 'Computador Dell';
console.log(meuComputador);
// retorno Computador Dell

/*
MUDAR O VALOR ATRIBUÍDO
É possível mudar os valores atribuídos a variáveis declaradas com var e let. 
Porém não é possível modificar valores das declaradas com const
*/
var Idade = 28;
Idade = 29;

let Preco = 50;
Preco = 25;

const minhaFaculdade = 'IFSP';
minhaFaculdade = 'UPS';
// retorna um erro

/**
 EXERCÍCIOS
 */
// Declarar uma variável com o seu nome

var MeuNome = 'Lucas';

// Declarar uma variável com a sua idade

var MinhaIdade = 19;

// Declarar uma variável com a sua comida
// favorita e não atribuir valor

var minhaComidaPreferida;

// Atribuir valor a sua comida favorita

minhaComidaPreferida = 'Hamburguer';

// Declarar 5 variáveis diferentes sem valores
var a, b, c, d, e;
