/*
NUMBER
É a construtora de números, todo número possui as propriedades e 
métodos do prototype de Number. Number também possui alguns métodos.
*/
const ano = 2021;
const preco = new Number(99);

/*
NUMBER.ISNAN() E NUMBER.ISINTEGER();
isNaN() é um método de Number, ou seja, não faz parte to protótipo. 
isInteger() verifica se é uma integral.
*/
Number.isNaN(NaN); // true
Number.isNaN(4 + 5); // false

Number.isInteger(20); // true
Number.isInteger(23.6); // false

/*
NUMBER.PARSEFLOAT() E NUMBER.PARSEINT()
parseFloat() serve para retornarmos um número a partir de uma string. 
A String deve começar com um número. 

parseInt recebe também um segundo parâmetro que é o Radix, 10 é para decimal.

Float possui decimal, Integer não.
*/
parseFloat('99.50'); // mesma função sem o number
Number.parseFloat('99.50'); // 99.5
Number.parseFloat('100 Reais'); // 100
Number.parseFloat('R$ 100'); // NaN

parseInt('99.50', 10); // 99
parseInt(5.434555111555, 10); // 5
Number.parseInt('100 reais', 10); // 100

/*
N.TOFIXED(DECIMAIS)
Arredonda o número com base no total de casas decimais do argumento.
*/
const preco2 = 2.99;
preco2.toFixed(); // 3

const carro = 1000.455;
carro.toFixed(2); // 1000.46

const preco3 = 1499.49;
preco3.toFixed(); // 1499

/*
N.TOSTRING(RADIX)
Transforma o número em uma string com base no Radix. 
Use o 10 para o sistema decimal.
*/
const numberString = 2.99;
numberString.toString(10); // '2.99'

/*
N.TOLOCALESTRING(LANG, OPTIONS);
Formata o número de acordo com a língua e opções passadas.
*/
const precos = 59.25;

precos.toLocaleString('en-US', { style: 'currency', currency: 'USD' }); // $59.25
precos.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); // R$ 59.25

/*
MATH
É um Objeto nativo que possui propriedades e métodos de expressões matemáticas comuns.
*/
Math.PI; // 3.14159
Math.E; // 2.718
Math.LN10; // 2.303

/*
MATH.ABS(), MATH.CEIL(), MATH.FLOOR() E MATH.ROUND()
abs() retorna o valor absoluto, ou seja, transforma negativo em positivo. 
ceil() arredonda para cima, retornando sempre uma integral e floor() para baixo. 
round() arredonda para o número integral mais próximo.
*/
Math.abs(-5.5); // 5.5

Math.ceil(4.885599); // 5
Math.ceil(4.3); // 5

Math.floor(4.883); // 4
Math.floor(4.3); // 4

Math.round(4.88336); // 5
Math.round(4.3); // 4

/*
MATH.MAX(), MATH.MIN() E MATH.RANDOM();
max() retorna o maior número de uma lista de argumentos, 
min() o menor número e 
random() um número aleatório entre 0 e 1.
*/
Math.max(5, 3, 10, 42, 2); // 42
Math.min(5, 3, 10, 42, 2); // 2

Math.random(); // 0.XXX
Math.floor(Math.random() * 100); // entre 0 e 100
Math.floor(Math.random() * 500); // entre 0 e 500

// Número ramdom ente 72 e 32
Math.floor(Math.random() * (72 - 32 + 1)) + 32;
Math.floor(Math.random() * (max - min + 1)) + min;
