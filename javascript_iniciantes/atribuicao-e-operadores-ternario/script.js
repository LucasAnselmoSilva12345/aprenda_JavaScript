/* Operadores de atribuição */
var x = 5;
var y = 10;
x += y; // x = x + y (15)
x -= y; // x = x - y (-5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x % y (0)
x **= y; // x = x ** y (9765625)

/* Operadores Ternário */
var idade = 19;
// condição ? true : false
var podeBeber = (idade >= 18) ? 'Pode Beber' : 'Não pode beber'
console.log(podeBeber, `sua idade é de ${idade}`)

/* Operadores ternario com mais de uma condição */
var direcao = true;
var age = 25; // idade;
var verificacao;
verificacao = (age >= 18 && direcao) ? 'Pode dirigir' : 'não pode dirigir'
console.log(verificacao)

/* IF Abreviado */
var possuiFaculdade = true

if( possuiFaculdade) console.log('Possui faculdade')
else console.log('não possui faculdade')
// outro metodo
if(possuiFaculdade)
  console.log('possui faculdade')
else
  console.log('não possui faculdade')

console.log('----------------------------')
/* Exercício */
// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;
scroll += 500;
console.log(scroll)
// var x = scroll / 2;
// scroll += x;
// console.log(scroll)

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito;
darCredito = (possuiCarro && possuiCasa)
console.log(darCredito)

// var handleVerification;
// handleVerification = (possuiCarro && possuiCasa) ? darCredito = true : darCredito = false
// console.log(darCredito)