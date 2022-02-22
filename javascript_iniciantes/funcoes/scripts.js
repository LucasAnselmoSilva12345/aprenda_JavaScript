function areaQuadrado(lado){
  result = lado * lado
  return result
}
console.log(areaQuadrado(4))

function pi(){
  return 3.14;
}
var total = 5 * pi(); // 15.7
console.log(total)

function imc(peso, altura){ // peso e altura são os parâmetros
  const imc = peso / (altura ** 2);
  return imc;
}
console.log(imc(80, 1.80)) // 80 e 1.80 são os argumentos

function corFavorita(cor){
  if(cor === 'azul'){
    return 'Eu gosto do ceu'
  }else if(cor === 'verde'){
    return 'Eu gosto do mato'
  }else{
    return 'eu gosto da grama'
  }
}
console.log(corFavorita())

// addEventListener('click', function(){
//   console.log('Olá')
// })

function terceiraIdade(idade){
  if(typeof idade !== 'number'){
    return 'Informe sua idade somente em numeros';
  }else if(idade >= 60){
    return true;
  }else {
    return false
  }
}
console.log(terceiraIdade(70))

function faltaVisitar(paisesVisitados){
  const totalPaises = 193;
  return `Faltam visitar ${totalPaises - paisesVisitados} países`
}

/* Escopo Léxico */
var profissao = 'Web Developer'

function dados(){
  var nome = 'Lucas';
  var idade = 18;
  function outrosDados(){
    var endereco = 'Salto';
    var idade = 19;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`
  }
  return outrosDados()
}
console.log(dados()); // retorna 'Lucas, 19, Salto, Web Developer'

console.log('------------------------------')

/* Exercicio */
// Crie uma função para verificar se um valor é Truthy
function verifcationTruthy(value){
  if(!!value == true){
    return `${value} é true`
  }else{
    return `${value} é false`
  }
}
console.log(verifcationTruthy(80))

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro(value){
  const soma = value * 4;
  return soma;
}
console.log(perimetro(4))

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nameLastName(name, lastName){
  return `${name} ${lastName}`
}
console.log('Lucas', 'Anselmo')

// Crie uma função que verifica se um número é par
function evenOrOdd(value){
  if(value % 2 == 0){
    return `${value} é par`
  }else if (value % 2 != 0){
    return `${value} é ímpar`
  }else {
    return 'error'
  }
}
console.log(evenOrOdd(20))

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function typeDate(value){
  value = typeof(value)
  return value;
}
console.log(typeDate('a'))

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', function(){
  console.log('Lucas Anselmo')
})

// Corrija o erro abaixo
var totalPaises = 193
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20))
console.log(jaVisitei(55))