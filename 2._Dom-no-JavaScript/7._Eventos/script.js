/*
ADDEVENTLISTENER
Adiciona uma função ao elemento, esta chamada de callback, 
que será ativada assim que certo evento ocorrer neste elemento.
*/

const img = document.querySelector('img');
// elemento.addEventListener(event, callback, options)
img.addEventListener('click', function () {
  console.log('clicou');
});

/*
CALLBACK
É boa prática separar a função de callback do addEventListener, 
ou seja, declarar uma função ao invés de passar diretamente uma 
função anônima
*/

const titulo = document.querySelector('.titulo');
function callback() {
  console.log('clicou');
}
titulo.addEventListener('click', callback);
titulo.addEventListener('click', () => {
  console.log('clicou 2x');
});

/*
EVENT && PROPRIEDADES DO EVENT
O primeiro parâmetro do callback é referente ao evento que ocorreu.
Geralmente utilizam e como nome do parâmetro
*/
const animaisLista = document.querySelector('.animais-lista');

function executarCallback(event) {
  console.log(event);
  const currentTarget = event.currentTarget; // this
  const target = event.target; // onde o clique ocorreu
  const type = event.type; // tipo do evento
  const path = event.path; //
  console.log(currentTarget, target, type, path);
}
animaisLista.addEventListener('click', executarCallback);

/*
EVENT.PREVENTDEFAULT()
Previne o comportamento padrão do evento no browser. 
No caso de um link externo, por exemplo, irá previnir 
que o link seja ativado.
*/
const linkExterno = document.querySelector('a[href^="http"]');

function clickNoLink(event) {
  event.preventDefault();
  console.log(event.currentTarget.href);
}
linkExterno.addEventListener('click', clickNoLink);

/*
THIS
A palavra chave this é uma palavra especial de JavaScript, 
que pode fazer referência a diferentes objetos dependendo 
do contexto. No caso de eventos, ela fará referência ao 
elemento em que addEventListener foi adicionado.
*/
const tituloH2 = document.querySelector('.animais-descricao h2');

function callback(event) {
  console.log(this); // retorna o titulo
  console.log(this.innerText);
}
tituloH2.addEventListener('click', callback);

/*
DIFERENTES EVENTOS
Existem diversos eventos como click, scroll, resize, keydown, keyup, mouseenter e mais. 
Eventos podem ser adicionados a diferentes elementos, como o window e document também.
*/
const h1 = document.querySelector('h1');

function callback(event) {
  console.log(event.type, event);
}

h1.addEventListener('click', callback);
h1.addEventListener('mouseenter', callback);
window.addEventListener('scroll', callback);
window.addEventListener('resize', callback);
window.addEventListener('keydown', callback);

/*
KEYBOARD
Você pode adicionar atalhos para facilitar a navegação no seu site, 
através de eventos do keyboard.
*/
function handleKeyboard(event) {
  if (event.key === 'a') {
    document.body.classList.toggle('azul');
  } else if (event.key === 'v') {
    document.body.classList.toggle('vermelho');
  }
}
window.addEventListener('keydown', handleKeyboard);

/*
FOREACH E EVENTOS
O método addEventListener é adicionado à um único elemento, 
então é necessário um loop entre elementos de uma lista, para adicionarmos 
à cada um deles.
*/
const img = document.querySelectorAll('img');

function imgSrc(event) {
  const src = event.currentTarget.getAttribute('src');
  console.log(src);
}

img.forEach((img) => {
  img.addEventListener('click', imgSrc);
});
