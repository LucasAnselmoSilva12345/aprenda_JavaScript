// Selecionado pelo ID usando 'getElementById'
const animaisSection = document.getElementById('animais');
const contatoSection = document.getElementById('contato');
console.log(animaisSection, contatoSection);

// Classe e Tag
/*
  getElementsByClassName (nome da classe) e,
  getElementsByTagName (nome da tag),
  selecionam e retornam uma lista de elementos do DOM. 
  A lista retornada está ao vivo, significa que se 
  elementos forem adicionados, 
  ela será automaticamente atualizada.
*/

// Seleciona pela classe, retorna um HTMLCollection
const gridSection = document.getElementsByClassName('grid-section'); // retorna todos os elementos que tem a classe 'grid-section'
const gridContato = document.getElementsByClassName('grid-section contato'); // retorna todos os elementos que tem a classe 'grid-section + classe contato junta'
console.log(gridSection, gridContato);

// Seleciona todas as UL's, retornando um HTMLColection
const ul = document.getElementsByTagName('ul');
console.log(ul);
console.log(ul[0].innerText);

// Seletor geral único
// querySelector retorna o primeiro elemento que combinar com o seu seletor CSS.
const animais = document.querySelector('.animais');
const contato = document.querySelector('#contato');
const ultimoItem = document.querySelector('.animais-lista li:last-child');
const linkCSS = document.querySelector('[href^="https://]"');
const primeiroUl = document.querySelector('ul');

// Busca dentro do UL apenas
const navItem = primeiroUl.querySelector('li');

// Seletor Geral Lista
//querySelectorAll retorna todos os elementos compatíveis com o seletor CSS em uma NodeList
const fotosAnimais = document.querySelectorAll('.animais-lista img');
console.log(fotosAnimais);

// HTMLCollection vs NodeList
//A diferença está nos métodos e propriedades de ambas.
//Além disso a NodeList retornada com querySelectorAll é estática.
const titulo = document.querySelector('.titulo');
const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

titulo.classList.add('grid-section');

console.log(gridSectionHTML); // 4 itens
console.log(gridSectionNode); // 3 itens

// Array-Like
// HTMLCollection e NodeList são array-like,
// parecem uma array mas não são.
// O método de Array forEach() por exemplo,
// existe apenas em NodeList.
gridSectionNode.forEach(function (item, index, array) {
  console.log(item);
  console.log(index);
  console.log(array);
});
