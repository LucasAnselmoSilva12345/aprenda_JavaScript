// window.alert('Olá DOM');

const hrefPage = window.location.href;
console.log(hrefPage);

const h1Selecionado = document.querySelector('h1');
console.log(h1Selecionado.innerText);

/* 
  NODE 
  Toda tag html é representada pelo Objeto Element e por isso herda seus metodos e propriedades. Element é um tipo de objeto node
*/

const titulo = document.querySelector('h1');
//const titulo = h1Selecionado; mesma ação igual o de cima

titulo.innerText; // retorna o texto
titulo.classList; // retorna as classes do elemento
titulo.id; // retorna o id
titulo.offsetHeight; // retorna a altura do elemento

console.log(titulo.innerText, titulo.classList, titulo.id, titulo.offsetHeight);
