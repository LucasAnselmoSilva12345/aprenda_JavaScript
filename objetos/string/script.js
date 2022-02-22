/*
STRING
É a construtora de strings, toda string possui as propriedades e 
métodos do prototype de String.
*/
const comida = 'Pizza';
const liquido = new String('Agua');
const ano = new String(2018);

/*
STR.LENGTH
Propriedade com o total de caracteres da string.
*/
comida.length; // numero de caracteres
comida[0]; // P
comida[comida.length - 1]; // a

/*
STR.CHARAT(N)
Retorna o caracter de acordo com o index de (n).
*/
comida.charAt(0); // P
comida.charAt(2); // Z
comida.charAt(comida.length - 1);

/*
STR.CONCAT(STR2, STR3, ...)
Concatena as strings e retorna o resultado.
*/
const frase = 'A melhor linguagem é ';
const linguagem = 'JavaScript';

const fraseCompleta = frase.concat(linguagem, ' !!');

/*
STR.INCLUDES(SEARCH, POSITION)
Procura pela string exata dentro de outra string. A procura é case sensitive.
*/
const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

listaFrutas.includes(fruta); // true
fruta.includes(listaFrutas); // false

/*
STR.ENDSWITH(SEARCH) E STR.STARTSWITH(SEARCH)
Procura pela string exata dentro de outra string. A procura é case sensitive.
*/
// const fruta = 'Banana'; -> utlizando mesma declaração de variavel

fruta.endsWith('nana'); // true
fruta.startsWith('Ba'); // true
fruta.startsWith('na'); // false

/*
STR.SLICE(START, END)
Corta a string de acordo com os valores de start e end.
*/
const transacao1 = 'Deposito de cliente';
const transacao2 = 'Deposito de fornecedor';
const transacao3 = 'Taxa de camisas';

transacao1.slice(0, 3); // Dep
transacao2.slice(0, 3); // Dep
transacao3.slice(0, 3); // Tax

transacao1.slice(12); // cliente
transacao1.slice(-4); // ente
transacao1.slice(3, 6); // osi

/*
STR.INDEXOF(SEARCH) E STR.LASTINDEXOF(SEARCH)
Retorna o index da string, assim que achar o primeiro resultado ele já retorna. 
No caso do lastIndexOf ele retorna o último resultado.
*/
const instrumento = 'Guitarra';

instrumento.indexOf('r'); // 5
instrumento.lastIndexOf('r'); // 6
instrumento.indexOf('ta'); //3

/*
STR.PADSTART(N, STR) E STR.PADEND(N, STR)
Aumenta o tamanho da string para o valor de n. Ou seja, 
uma string com 8 caracteres, se passarmos n = 10, 
ela passará a ter 10 caracteres. O preenchimento é feito com espaços, 
caso não seja declarado o segundo argumento.
*/
const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 1199'];

listaPrecos.forEach((preco) => {
  console.log(preco.padStart(10, '*'));
});

listaPrecos[0].padStart(10, '.'); // .....R$ 99
listaPrecos[0].padEnd(10, '.'); // R$ 99.....

/*
STR.REPEAT(N)
Repete a string (n) vezes
*/
const texto = 'Ta';

texto.repeat(5);

/*
STR.REPLACE(REGEXP|SUBSTR, NEWSTR|FUNCTION)
Troca parte da string por outra. 
Podemos utilizar uma regular expression ou um valor direto. 
Se usarmos um valor direto ele irá trocar apenas 
o primeiro valor que encontrar.
*/

let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
listaItens = listaItens.replace(/[]+/g, ', ');
console.log(listaItens);

let preco = 'R$ 1200,43';
preco = preco.replace(',', '.');
console.log(preco); // R$ 1200.43

/*
STR.SPLIT(PADRAO)
Divide a string de acordo com o padrão passado e retorna uma array.

join é um método de Array
*/
const lista = 'Camisas Bones Calças Bermudas Vestidos Saias';
const arrayItens = lista.split(' ');
console.log(arrayItens);

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div');
const htmlNovo = htmlArray.join('section');
console.log(htmlNovo);

/*
STR.TOLOWERCASE() E STR.TOUPPERCASE()
Retorna a string em letras maiúsculas ou minúsculas. 
Bom para verificarmos input de usuários.
*/
const sexo1 = 'Feminino';
const sexo2 = 'feminino';
const sexo3 = 'FEMININO';

sexo1.toLowerCase() === 'feminino'; // true
sexo2.toLowerCase() === 'feminino'; // true
sexo3.toLowerCase() === 'feminino'; // true

/*
STR.TRIM(), STR.TRIMSTART(), STR.TRIMEND()
Remove espaço em branco do início ou final de uma string.
*/
const valor = '  R$ 23.00  ';
valor.trim(); // 'R$ 23.00'
valor.trimStart(); // 'R$ 23.00  '
valor.trimEnd(); // '  R$ 23.00'
