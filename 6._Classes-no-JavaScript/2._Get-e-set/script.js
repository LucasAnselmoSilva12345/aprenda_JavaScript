/*
GET E SET
Podemos definir comportamentos 
diferentes de get e set para um método.
*/
const button = {
  get element() {
    return this._element || 'a';
  },
  set element(tipo) {
    this._element = document.createElement(tipo);
  },
};

button.element = 'button'; // metodo set
button.element; // metodo get

console.log(button.element);

/*
VALOR ESTÁTICO
Se definirmos apenas o get de um método, 
teremos então um valor estático 
que não será possível mudarmos.
*/

const matematica = {
  get PI() {
    return 3.14;
  },
};

matematica.PI; // get (3.14)
matematica.PI = 20;

console.log(matematica.PI);

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

(frutas.nova = 'Banana'), (frutas.nova = 'Manga');
frutas.lista; // ['Banana', 'Manga']

console.log(frutas.lista);

/*
CLASS
Assim como em um objeto, 
as classes podem ter métodos de get e set também.
*/

class Button {
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

const blueButton = new Button('Comprar', 'blue');
blueButton.element; // retorna o elemento
console.log(blueButton.element);

/*
SET E CLASS
Com o set podemos modificar 
apenas parte do elemento de get. 

É comum definirmos variáveis privadas, 
utilizando o underscore _privada.
*/
class Buttons {
  constructor(text) {
    this.text = text;
  }
  get element() {
    const elementType = this._elementType || 'button';
    const buttonElement = document.createElement(elementType);
    buttonElement.innerText = this.text;
    return buttonElement;
  }
  set element(type) {
    this._elementType = type;
  }
}

const redButton = new Buttons('Comprar');
redButton.element; // retorna o elemento

console.log(redButton.element);
