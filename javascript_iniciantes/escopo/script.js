/* SEMPRE USAR CONST E LET */
if(true){
  const carro = 'Onix';
  console.log(carro)
}
console.log(carro) // erro, carro is not defined

/* USAR VAR, É ERRADO POIS ACABA VAZANDO O ESCOPO DO BLOCO */
{
  var veiculo = 'Audi'
  const anoVeiculo = 2020
  console.log(anoVeiculo)
}
console.log(veiculo)
console.log(anoVeiculo) //- erro pois aqui é const

for(let i = 0; i < 10; i++){
  console.log(`Numero ${i}`)
}

/* CONST 
  Mantém o escopo no bloco, impede a redeclaração e impede a modificação do valor da varável, evitando bugs no codigo
*/
const mes = 'Dezembro'
// mes = 'Janeiro' // erro de redeclaração
// const semana; // erro, declaração sem valor

const data = {
  mes: 'Dezembro',
  ano: 2020,
}
data.dia = 29; // posso sim acrescentar informações
data.ano = 2021 // posso sim modificar desse jeito
data = 'Maio' // erro


/*  LET
Mantém o escopo no bloco, impede a redeclaração, mas permite a modificação do valor da variavel.
*/

let ano;
ano = 2015;
ano++;
console.log(ano)

let ano = 2021; // erro, redeclarou varivável


console.log('-------------------------------------')
/* Exercícios */
// Por qual motivo o código abaixo retorna com erros?
{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
}
console.log(cor);

// Como corrigir o erro abaixo?
const dois = 2;
function somarDois(x) {
  // const dois = 2;
  return x + dois;
}
function dividirDois(x) {
  return x + dois;
}
somarDois(4);
dividirDois(6);

// O que fazer para total retornar 500?
const numero = 50;

for(let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
