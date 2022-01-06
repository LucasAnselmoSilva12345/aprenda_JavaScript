/*
CONSTRUCTOR FUNCTION

Funções responsáveis pela criação de objetos. 
O conceito de uma função construtora de objetos 
é implementado em outras linguagens como Classes.
*/

function Button(text, background) {
  this.text = text;
  this.background = background;
}

Button.prototype.element = function () {
  const buttonElement = document.createElement('button');
  buttonElement.innerText = this.text;
  buttonElement.style.background = this.background;
  return buttonElement;
};

const blueButton = new Button('Comprar', 'blue');

console.log(blueButton.element());

/*
CLASS
O ES6 trouxe uma nova sintaxe para implementarmos 
funções construtoras. 

Agora podemos utilizar a palavra chave class. 
É considerada syntactical sugar, 
pois por baixo dos panos continua 
utilizado o sistema de protótipos 
de uma função construtora para criar a classe.
*/

class Buttons {
  constructor(text, background) {
    this.text = text;
    this.background = background;
  }
  element() {
    const buttonElement = document.createElement('button');
    buttonElement.innerText = this.text;
    buttonElement.style.background = this.background;
    return buttonElement;
  }
}
const redButton = new Buttons('Vender', 'red');
console.log(redButton.element());

/*
CLASS VS CONSTRUCTOR FUNCTION
*/
class Textos {
  constructor(propriedade) {
    this.propriedade = propriedade;
  }
  metodo() {}
  metodo2() {}
}

function Textos2(propriedade) {
  this.propriedade = propriedade;
}
Textos2.prototype.metodo1 = function () {};
Textos2.prototype.metodo2 = function () {};

/*
CONSTRUCTOR
O método constructor(args) {} 
é um método especial de uma classe. 
Nele você irá definir todas as 
propriedades do objeto que será criado. 
Os argumentos passados 
em 'new', vão direto para o constructor.
*/
class Btn {
  constructor(text, background, color) {
    this.text = text;
    this.background = background;
    this.color = color;
  }
}

const dataBtn = new Btn('Clique', 'green', 'white');

/*
CONSTRUCTOR RETURN
Por padrão a classe retorna this. 
Ou seja, this é o objeto criado com o new Class. 
Podemos modificar isso alterando 
o return do constructor, 
o problema é que perderá toda a referência do objeto.
*/
class Palavra {
  constructor(text) {
    this.text = text;
    return this.element(); // NÃO FAZER
  }
  element() {
    document.createElement('button').innerText = this.text;
  }
}

const textos = new Palavra('Clique');
// <button>Clique</button>

/*
THIS
Assim como em uma função construtora, 
this faz referência ao objeto criado com new. 

Você pode acessar as propriedades e 
métodos da classe utilizando o this.
*/

class Botao {
  constructor(text) {
    this.text = text;
  }
  element() {
    const buttonElement = document.createElement('button');
    buttonElement.innerText = this.text;
    return buttonElement;
  }
  appendElementTo(target) {
    const targetElement = document.querySelector(target);
    targetElement.appendChild(this.element());
    // return targetElement; opcional
  }
}

const grayButton = new Botao('Clique aqui');
grayButton.appendElementTo('body');

/*
PROPRIEDADES
Podemos passar qualquer valor dentro de uma propriedade.
*/
class ExampleClass {
  constructor(options) {
    this.options = options;
  }
}

const exampleOptions = {
  background: 'blue',
  color: 'white',
  text: 'Exemplo',
  borderRadius: '4px',
};

const exibirOpcoes = new ExampleClass(exampleOptions);

console.log(exibirOpcoes.options);

/*
STATIC VS PROTOTYPE
Por padrão todos os métodos criados dentro da classe 
irão para o protótipo da mesma. 

Porém podemos criar métodos diretamente 
na classe utilizando a palavra chave static. 
Assim como [].map() é um método de uma array e Array.from() 
é um método do construtor Array.
*/

class Campo {
  constructor(text) {
    this.text = text;
  }
  static create(background) {
    const elementCampo = document.createElement('input');
    elementCampo.style.background = background;
    elementCampo.innerText = 'clique';
    return elementCampo;
  }
}

const input = Campo.create('blue');
console.log(input);

/*
STATIC
Você pode utilizar um método 
static para retornar a 
própria classe com propriedades já pré definidas.
*/

class Btns {
  constructor(text, background) {
    this.text = text;
    this.background = background;
  }
  element() {
    const elementButton = document.createElement('button');
    elementButton.innerText = this.text;
    elementButton.style.background = this.background;
    return elementButton;
  }
  static createBlue(text) {
    return new Btns(text, 'blue');
  }
}

const azulButns = Btns.createBlue('Comprarr');

console.log(azulButns.element());
