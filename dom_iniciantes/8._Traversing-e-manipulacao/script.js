// /*
// OUTERHTML, INNERHTML E INNERTEXT
// Propriedades que retornam uma string contendo o html ou texto.
// É possível atribuir um novo valor para as mesmas
// element.innerText = 'Novo Texto'.
// */

// const menu = document.querySelector('.menu');

// menu.outerHTML; // todo o html do elemento
// menu.innerHTML; // retorna html interno
// menu.innerText; // texto sem tags

// menu.innerText = '<p>Texto</p>'; // a tag vai como texto
// menu.innerHTML = '<p>Texto</p>'; // a tag é renderizada

// // console.log(menu.outerHTML, menu.innerHTML, menu.innerText);

// /*
// TRASVERSING
// Como navegar pelo DOM, utilizando suas propriedades e métodos.
// */

// const lista = document.querySelector('.animais-lista');

// lista.parentElement; // pai
// lista.parentElement.parentElement; // pai do pai
// lista.previousElementSibling; // elemento acima
// lista.nextElementSibling; // elemento abaixo

// lista.children; // HTMLCollection com os filhos
// lista.children[0]; // primeiro filho
// lista.children[--lista.children.length]; // último filho

// // forma não usar esse HTMLCollection e forma de pegar o ultimo filho

// lista.querySelector('li'); // todos os LI'S
// lista.querySelector('li:last-child'); // ultimo filho

// /*
// ELEMENT VS NODE
// Element's represetam um elemento html, ou seja, uma tag.
// Node representa um nó, e pode ser um elemento (Element),
// texto, comentário, quebra de linha e mais.

// Geralmente estamos atrás de um elemento e não de qualquer
// node em si
// */

// lista.previousElementSibling; // elemento acima
// lista.previousSibling; // node acima

// // console.log(lista.previousElementSibling, lista.previousSibling);

// lista.firstChild; // primeiro node child
// lista.childNodes; // todos os node child

// // console.log(lista.firstChild, lista.childNodes);

// /*
// MANIPULANDO ELEMENTOS
// É possível mover elementos no dom com métodos de Node.
// */
// // utilizando a importação de lista acima

// const contato = document.querySelector('.contato');
// const titulo = contato.querySelector('.titulo');

// contato.appendChild(lista); // move lista para o final de contato
// contato.insertBefore(lista, titulo); // insere a lista antes de titulo
// contato.removeChild(titulo); // remove titulo de contato
// // contato.replaceChild(lista, titulo); // substitui titulo por lista

// /*
// NOVOS ELEMENTOS
// Podemos criar novos elementos com o método createElement()
// */
// const animais = document.querySelector('.animais');

// const novoH1 = document.createElement('h1');
// novoH1.innerText = 'Novo Título';
// novoH1.classList.add('titulo');
// animais.appendChild(novoH1);

// /*
// CLONAR ELEMENTOS
// Todo elemento selecionado é único.
// Para criarmos um novo elemento baseado no anterior,
// é necessário utilizar o método cloneNode()
// */
// const titulo1 = document.querySelector('h1');
// const titulo2 = document.querySelector('h1');
// const novoTitulo = titulo1;
// // titulo, titulo2, novoTitulo são iguais

// const cloneTitulo = titulo1.cloneNode(true);
// // utilizando a importação de 'contato' no exemplo anterior
// contato.appendChild(cloneTitulo);
