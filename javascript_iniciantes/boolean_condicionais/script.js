var possuiGraduacao = false;

if(possuiGraduacao){
  console.log("Possui Graduação")
}else{
  console.log("Não Possui Graduação")
}

var possuiGraduacao = true; // false
var possuiTecnico = false; // true

if(possuiGraduacao){
  console.log("Possui Graduação")
}else if(possuiTecnico){
  console.log("Possui Tecnico")
}else {
  console.log("Não possui nenhuma das anteriores")
}

var nome = 'Lucas';

if(nome){
  console.log(nome)
}else{
  console.log("Error, favor informar um nome")
}

/*  Operador Logico '!'  */
var possuiDoutorado = true

if(!possuiDoutorado){
  console.log(possuiDoutorado)
  console.log("Não possui Doutorado")
}else{
  console.log("possui Doutorado")
}

/* Operadores de comparação */

a = 10;
b = 8;

if(a > b){
  console.log(`${a} é maior que ${b}`)
}else if(b > a){
  console.log(`${b} é menor que ${a}`)
}else if(a >= b){
  console.log(`${a} é maior ou igual que ${b}`)
}else if(b <= a ){
  console.log(`${b} é menor ou igual que ${a}`)
}else {
  console.log("Error")
}

/* Operadores de comparação */
var x = 5 // atribuição de valores
var y = 'Dog' // atribuição para string

x == 5 // comparação de valores
console.log(x == 5); // return true

y === 'Dog'
console.log(y === 'Dog') // comparação usando string


/* Mais alguns operadores Lógicos */
var A = 10;
var B = 5;
var C = 8;
var D = 15;

if((A > B) && (C > D)){
  console.log("Falso")
}else if ((A > B) && (C < D)){
  console.log("Verdadeiro")
}else if ((A > B) || (C > D)){
  console.log(`${A} > ${B}`)
}else if((A < B) || (C < D)){
  console.log(`${C} > ${D}`)
}

/* Cor Favorita */

var corFavorita = 'Azul';

switch(corFavorita){
  case 'Azul':
    console.log("Olhe para o ceu");
    break;
  case 'Vermelho':
    console.log("Olhe para o sol");
    break;
  default:
    console.log("Feche o olho")
}

console.log('-----------------------------------------------------------')
/* Exercicio */
// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 19;
var parenteIdade = 25;

if(minhaIdade == parenteIdade){
  console.log('é igual')
}else if(minhaIdade > parenteIdade){
  console.log('é maior')
}else if(minhaIdade < parenteIdade){
  console.log('é menor')
}else {
  console.log('error')
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao)

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
console.log(!!nome)

var idade = 28;
console.log(!!idade)

var possuiDoutorado = false;
console.log(!!possuiDoutorado)

var empregoFuturo;
console.log(!!empregoFuturo)

var dinheiroNaConta = 0;
console.log(!!dinheiroNaConta)

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if(brasil == china){
  console.log('igual')
}else if(brasil > china){
  console.log('Brasil maior que China')
}else if(brasil < china){
  console.log('Brasil menor que China')
}else {
  console.log('Error')
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}