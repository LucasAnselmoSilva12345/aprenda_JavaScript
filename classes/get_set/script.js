/*
GET E SET
Podemos definir comportamentos diferentes 
de get e set para um método.
*/
const button = {
  get tamanho() {
    return this._numero; // metodo privado que só existe na const
  },
  set tamanho(num) {
    this._numero = num;
  },
};

/*
VALOR ESTÁTICO
Se definirmos apenas o get de um método, 
teremos então um valor estático que não será possível mudarmos.
*/
const matematica = {
  get PI() {
    return 3.14;
  },
};

matematica.PI;
matematica.PI = 20;

/*
SET
Eu posso ter um método com set apenas, 
que modifique outras propriedades do meu objeto.
*/
const frutas = {
  lista: [],
  set nova(fruta) {
    this.lista.push(fruta);
  },
};
frutas.nova = 'Banana';
frutas.nova = 'Morango';
frutas.lista;

/*
CLASS
Assim como em um objeto, as classes podem ter 
métodos de get e set também.
*/
class Button_2 {
  constructor(text, color) {
    this.text = text;
    this.color = color;
  }
  get element() {
    const buttonElement = document.createElement('button');

    buttonElement.innerText = this.text;
    buttonElement.style.color = this.color;

    return buttonElement;
  }
}
const blueButton = new Button_2('Comprar', 'blue');
blueButton.element;

/*
SET E CLASS
Com o set podemos modificar apenas parte do elemento de get. 
É comum definirmos variáveis privadas, 
utilizando o underscore _privada.
*/
class Button_3 {
  constructor(text, color) {
    this.text = text;
    this.color = color;
  }
  get element() {
    const type = this._elementType || 'button';

    const buttonElement = document.createElement(type);

    buttonElement.innerText = this.text;
    buttonElement.style.color = this.color;

    return buttonElement;
  }
  set element(type) {
    this._elementType = type;
  }
}
const redButton = new Button_3('Vender', 'red');
