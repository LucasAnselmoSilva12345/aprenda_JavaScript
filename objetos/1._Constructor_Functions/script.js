/*
OBJETOS
Criar um objeto é simples, basta definirmos uma variável e iniciar a 
definição do seu valor com chaves {}. Mas e se precisarmos criar um novo objeto, 
com as mesmas características do anterior? É possível com o Object.create, 
mas veremos ele mais tarde.
*/
const carro = {
  marca: 'Marca',
  preco: 0,
};

const chevrolet = carro;
chevrolet.marca = 'Cruze';
chevrolet.preco = 49990;

const fiat = carro;
fiat.marca = 'Palio';
fiat.preco = 29990;

/*
CONSTRUCTOR FUNCTIONS
Para isso existem as Constructor Functions, ou seja, Funções Construtoras que 
são responsáveis por construir novos objetos sempre que chamamos a mesma.
*/
function Carro() {
  this.marca = 'Marca';
  this.preco = 0;
}

const chevrolets = new Carro();
chevrolets.marca = 'Onix Turbo';
chevrolets.preco = 89990;

const fiats = new Carro();
fiats.marca = 'Palio';
fiats.preco = 19990;

/*
NEW KEYWORD
A palavra chave new é responsável por criar um novo 
objeto baseado na função que passarmos a frente dela.
*/

// const honda = new Carro();

// // 1 cria um novo objeto
// honda = {}

// // 2 define o prototipo
// honda.prototype = Carro.prototype;

// // 3 ponta a variavel this para o objeto
// this = honda;

// // 4 Executa a função, substituindo this pelo objeto
// honda.marca = 'Marca';
// honda.preco = 0;

// // 5 Retorna o novo objeto
// return honda = {
//   marca: 'Marca',
//   preco: 0,
// }

/*
PARÂMETROS E ARGUMENTOS
Podemos passar argumentos que serão utilizados no momento da criação do objeto.
*/

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

const omo = new Produto('OMO multiação', 29.9);
const sabão = new Produto('Sabão Ajax', 35.0);

/*
THIS KEYWORD
O this faz referência ao próprio objeto construído com a Constructor Function.
*/
function Escola(nome, mensalidade) {
  const taxa = 1.2;
  const precoFinal = mensalidade * taxa;
  this.nome = nome;
  this.mensalidade = precoFinal;
  console.log(this);
}
const etec = new Escola('ETEC', 2000);
