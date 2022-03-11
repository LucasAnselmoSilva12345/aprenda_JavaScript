/*
HTMLELEMENT
Todo elemento HTML do DOM herda propriedades e métodos do construtor HTMLElement.
*/
const h1 = document.querySelector('h1');
const date = Object.prototype.toString.call(h1); // [object HTMLHeadingElement]
console.log(date);

console.log(h1.dataset);

/*
DATASET
dataset é uma propriedade de HTMLElement, 
essa propriedade é um objeto do tipo DOMStringMap. 
Dentro desse objeto existe uma coleção de chave / valor, 
com todos os atributos do elemento html que 
começarem com data-.
*/
let div = document.querySelector('div');
div = document.querySelector('[data-cor]');
div = document.querySelector('[data-cor="azul"]');

console.log(div.dataset); //DOMStringMap {cor: 'azul', width: '500'}

div.dataset.cor; // 'azul'
div.dataset.width; // '500'

div.dataset.tempo = 1000;
console.log(div.dataset);

/*
DATA ATRIBUTES
Os atributos e valores que começarem com data- 
poderão ser utilizados como forma de configuração 
de plugins e interações DOM / JS.
*/
const divs = document.querySelectorAll('[data-anima]');
divs.forEach((div) => {
  div.classList.add(div.dataset.anima);
});
// adiciona em cada div
// uma classe com o mesmo nome que o valor data

/*
DATA VS CLASS
A vantagem de se utilizar data atributes é que torna 
mais fácil evitarmos conflitos com estilos do CSS. 
Além de deixar a estrutura da tag mais organizada.
*/
/*div data-anima="left" data-tempo="1000">
  Div 1
</div>; // forma correta de escrever
<div class="anima-left tempo-1000">Div 2</div>;*/

/*
NOMENCLATURA
Por padrão o JavaScript não aceita - (traço) 
como caracter válido para nomear propriedades. 

Então qualquer traço será removido e a letra seguinte 
transformada em maiúscula.
*/

// <div data-anima-scroll="left">Div 1</div>

const divExample = document.querySelector('[data-anima-scroll]');

console.log(divExample.dataset); // {animaScroll: 'left'}

divExample.dataset.animaScroll; // left: ;

divExample.dataset.tempoTotal = 1000;
console.log(divExample.dataset);

delete divExample.dataset.animaScroll;
console.log(divExample.dataset);
