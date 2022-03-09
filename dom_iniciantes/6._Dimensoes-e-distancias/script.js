/*
HEIGHT E WIDTH
Estas são propriedades e métodos dos objetos Element e HTMLElement, 
a maioria delas são Read Only
*/

const listaAnimais = document.querySelector('.animais-lista');

listaAnimais.clientHeight; // height + padding
listaAnimais.offsetHeight; // height + padding + border
listaAnimais.scrollHeight; // height total, mesmo dentro de scroll

console.log(
  listaAnimais.clientHeight,
  listaAnimais.offsetHeight,
  listaAnimais.scrollHeight
);
// mesma coisa para o Width

/*
OFFSETTOP E OFFSETLEFT
*/
const section = document.querySelector('.animais');

// distancia entre topo do elemento e o topo da pagina
console.log(section.offsetTop);

// distancia entre o canto esquerdo do elemento e o canto esquerdo da pagina
console.log(section.offsetLeft);

/*
GETBOUNDINGCLIENTRECT()
Método que retorna um objeto com valores de width, 
height, distâncias do elemento e mais.
*/
const faq = document.querySelector('.faq');

const rect = faq.getBoundingClientRect();

rect.height; // height do elemento
rect.width; // width do elemento
rect.top; // distancia entre o topo do elemento e o scroll

console.log(rect.height, rect.width, rect.top);

/*
WINDOW
*/
window.innerWidth; // width da janela
window.outerWidth; // soma dev tools também
window.innerHeight; // height da janela
window.outerHeight; // soma a barra de endereço

window.pageYOffset; // distancia total do scrool horizontal
window.pageXOffset; // distancia total do scrool vertical

if (window.innerWidth < 600) {
  console.log('Tela menor que 600px', window.innerWidth);
}

/*
MATCHMEDIA();
Utilize um media-querie como no CSS para verificar a 
largura do browser
*/
const small = window.matchMedia('(max-width: 600px)');

if (small.matches) {
  console.log('Tela menor que 600px');
} else {
  console.log('Tela maior que 600px');
}
