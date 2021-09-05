/*
Número
*/

var idade = 19;
var gols = 1000;
var pi = 3.14;
var exp = 2e10;

/*
OPERADORES ARITMÉTICOS

Lembrando que soma '+' em Strings serve para concatenar
*/
var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4

/*
OPERADORES ARITMÉTICOS (STRINGS)

É possível verificar se uma variável é NaN ou não com a função isNaN()
*/
var soma = '100' + 50; // 10050
var substituicao = '100' - 50; // 50
var multiplicacao = '100' * '2'; // 200
var divisao = 'comprei 10' / 2; // NaN (Not a Number)

/*
NAN = NOT A NUMBER
*/
var numero = 80;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)

/*
A ORDEM IMPORTA
Começa por multiplicação e divisão, depois por soma e subtração.

Parênteses para priorizar uma expressão
*/
var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = (20 / 2) * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40

/*
OPERADORES ARITMÉTICOS UNÁRIOS

Mesma coisa para o decremento --x
*/

var incremento = 5;
console.log(incremento++); // 5
console.log(incremento); // 6

var incremento2 = 5;
console.log(++incremento2); // 6
console.log(incremento2); // 6

/*
OPERADORES ARITMÉTICOS UNÁRIOS
O + e - tenta transformar o valor seguinte em número


O - antes de um número torna ele negativo
*/
var frase = 'Isso é um teste';
+frase; // NaN
-frase; // NaN

var idade = '28';
+idade; // 28 (número)
-idade; // -28 (número)
console.log(+idade + 5); // 33

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1

console.log('----------Exercícios------------');
// Qual o resultado da seguinte expressão?
var total = 10 + (5 * 2) / 2 + 20;

console.log(total); // 35

// Crie duas expressões que retornem NaN

var Frase = 'nan' + Frase;
-Frase;

// Somar a string '200' com o número 50 e retornar 250

var soma = '200' + 50;
console.log(soma); // 250

// Incremente o número 5 e retorne o seu valor incrementado

var cinco = 5;

console.log(cinco); // 5
console.log(cinco++); // 6

// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / '2'; // NaN (Not a Number)

console.log(pesoPorDois); // 40kg
