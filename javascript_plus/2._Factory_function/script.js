/*
FACTORY FUNCTION
São funções que retornam um objeto sem a necessidade 
de utilizarmos a palavra chave new. 

Possuem basicamente 
a mesma função que constructor functions / classes.
*/
function createButton(text) {
  function element() {
    const buttonElement = document.createElement('button');
    buttonElement.innerText = text;
    return buttonElement;
  }
  return {
    element,
    text,
  };
}

const comprarBtn = createButton('Comprar');
console.log(comprarBtn.element());

/*
MÉTODOS / VARIÁVEIS PRIVADAS
Uma das vantagens é a 
possibilidade de criarmos métodos / variáveis privadas.
*/

function criarPessoa(nome, sobrenome) {
  const nomeCompleto = `${nome} ${sobrenome}`;

  function andar() {
    return `${nomeCompleto} andou`;
  }

  function nadar() {
    return `${nomeCompleto} nadou`;
  }

  return {
    nome,
    sobrenome,
    andar,
    nadar,
  };
}

const designer = criarPessoa('Lucas', 'Silva');

console.log(designer);
console.log(designer.nome);
console.log(designer.sobrenome);
console.log(designer.andar());
console.log(designer.nadar());

/*
ICE FACTORY
Podemos impedir que os métodos e 
propriedades sejam modificados com Object.freeze(). 
Ideia inicial de Douglas Crockford.
*/

('use strict');

function pessoa(nome, sobrenome) {
  const nomeCompleto = `${nome} ${sobrenome}`;

  function caminhar() {
    return `${nomeCompleto} andou`;
  }

  return Object.freeze({
    nome,
    sobrenome,
    caminhar,
  });
}

const nome = pessoa('Lucas', 'Camargo');
console.log(nome.caminhar());

/*
CONSTRUCTOR FUNCTION / FACTORY FUNCTION
Uma das vantagens da Factory Function é a 
possibilidade de iniciarmos a mesma sem a 
utilização da palavra chave new. 

Também é possível fazer isso com uma 
Constructor Function.
*/

function pessoaAndar(nome) {
  if (!(this instanceof pessoaAndar))
    // ou (!new.target)
    return new pessoaAndar(nome);
  this.nome = nome;
}

pessoaAndar.prototype.andar = function () {
  return `${this.nome} andou`;
};

const example = pessoaAndar('Lucas');
console.log(example.andar());
