var pessoa = {
  nome: 'Andre',
  idade: 28,
  profissao: 'Designer',
  possuiFaculdade: true,
}
console.log(pessoa.nome, pessoa.possuiFaculdade)

/* Metodos */
var quadrado = {
  lados: 4,
  area: function(lado){
    return lado * lado
  },
  perimetro: function(lado){
    return this.lados * lado
  }
}
console.log(quadrado.area(5))
console.log(quadrado.perimetro(5))

/* Objetos servem para organizar codigos */
console.log(Math.PI)
console.log(Math.random())
console.log(Math.log2(5))
console.table(quadrado)

/* Criar um objeto */
var carro = {}

/* Dot Notation Get + adicionar propriedade */
var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84e',
}
var bg = menu.backgroundColor;
console.log(bg)
menu.backgroundColor = '#000';
console.log(menu.backgroundColor)
menu.color = 'blue'
console.log(menu.color)

/* Palavra-chave This */

var altura = 120;
var menu2 = {
  width: 800,
  height: 50,
  metadeHeight(){
    return this.height / 2; // this.height = 50
  }
}
console.log(menu2.metadeHeight()); // 25
// sem o this, seria 60

console.log('----------------------------------')
/* Exercício */
// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var meusDados = {
  name: 'Lucas',
  lastName: 'Silva',
  age: 19,
  city: 'Salto',
  uf: 'SP'
}
// console.log(`Meu nome é ${meusDados.name} ${meusDados.lastName}`)

// Crie um método no objeto anterior, que mostre o seu nome completo
meusDados.nomeCompleto = function(){
  return `Meu nome é ${this.name} ${this.lastName}`
}


// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}
console.log(carro.preco)
carro.preco = 3000;
console.log(carro.preco)

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cachorro = {
  raca: 'labrador',
  cor: 'preto',
  idade: 10,
  latir(pessoa){
    if(pessoa === 'homem' ){
      return 'Latir'
    }else {
      return 'Nada'
    }
  }
}
console.log(cachorro.latir('homem'))