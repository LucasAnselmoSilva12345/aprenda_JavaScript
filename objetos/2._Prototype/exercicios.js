// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function People(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

const lucas = new People('Lucas', 'Silva', 19);

People.prototype.date = function () {
  return `${this.nome} ${this.sobrenome}, tenho ${this.idade} anos`;
};

// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document

NodeList.prototype;
HTMLCollection.prototype;
Document.prototype;

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; // OBJECT
li.click; // FUNCTION
li.innerText; // STRING
li.value; // NUMBER
li.hidden; // BOOLEAN
li.offsetLeft; // NUMBER
li.click(); // UNDEFINED

// Qual o construtor do dado abaixo:
li.hidden.constructor.name;
('String');
