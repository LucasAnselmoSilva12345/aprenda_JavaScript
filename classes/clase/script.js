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

/*
CLASS
O ES6 trouxe uma nova sintaxe para implementarmos 
funções construtoras. 
Agora podemos utilizar a palavra chave class. 
É considerada syntactical sugar, pois por baixo 
dos panos continua utilizado o sistema de 
protótipos de uma função construtora para criar a classe.
*/
class Button_2 {
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
const redButton = new Button('Comprar', 'red');

/*
CONSTRUCTOR
O método constructor(args) {} é um método especial de 
uma classe. 
Nele você irá definir todas as propriedades 
do objeto que será criado. 
Os argumentos passados em new, 
vão direto para o constructor.
*/
class Button_3 {
  constructor(text, background, color) {
    this.text = text;
    this.background = background;
    this.color = color;
  }
}
const greenButton = new Button_3('Clique', 'green', 'white');
// Button {text: 'Clique', background: 'green', color: 'white'}

/*
THIS
Assim como em uma função construtora, 
this faz referência ao objeto criado com new. 
Você pode acessar as propriedades e métodos da 
classe utilizando o this.
*/
class Button_4 {
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
  }
}
const testButton = new Button_4('Clique');
testButton.appendElementTo('body');

/*
PROPRIEDADES
Podemos passar qualquer valor dentro de uma propriedade
*/
class ButtonPropri {
  constructor(options) {
    this.options = options;
  }
}

const blueOptions = {
  backgroundColor: 'blue',
  color: 'white',
  text: 'Clique Aqui',
  borderRadius: '4px',
};

const buttonBlue = new ButtonPropri(blueOptions);
buttonBlue.options;

/*
STATIC VS PROTOTYPE
Por padrão todos os métodos criados dentro da classe 
irão para o protótipo da mesma. 
Porém podemos criar métodos diretamente na classe 
utilizando a palavra chave static. 
Assim como [].map() é um método de uma array 
e Array.from() é um método do construtor Array.
*/
class Button_5 {
  constructor(text) {
    this.text = text;
  }
  static create(background) {
    const elementButton = document.createElement('button');

    elementButton.style.background = background;
    elementButton.innerText = 'Clique no Botão';

    return elementButton;
  }
}
const purpleButton = Button_5.create('purple');

/*
STATIC
Você pode utilizar um método static para 
retornar a própria classe com propriedades já pré definidas.
*/
class Button_6 {
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
    return new Button_6(text, 'blue');
  }
}
const azulButton = Button_6.createBlue('Comprar');
