/*
ClassList
Retorna uma lista com as classes do elemento. 
Permite adicionar, remover e verificar se contém.
*/

const menu = document.querySelector('.menu');

menu.className; //string - nome da classe
menu.classList; // listas das classes
menu.classList.add('ativo'); // adiciona a classe ativo no em classe 'menu'
menu.classList.add('ativo', 'mobile'); // adiciona a classe ativo e mobile no em classe 'menu'
menu.classList.remove('ativo'); // rmove classe ativo de 'menu'
menu.classList.toggle('ativo'); // se tem ativo em menu, remove, se não tem ativo em menu, adiciona
menu.classList.contains('ativo'); // true ou false
menu.classList.replace('ativo', 'inativo'); // renomeia ativo para inativo

/*
Attributes
Retorna uma array-like com os atributos do elemento.
*/
const animais = document.querySelector('.animais');
console.log(animais.attributes);
console.log(animais.attributes[0]);

/*
getAttribute e setAttribute
Métodos que retornam ou definem de acordo com o atributo selecionado
*/
const img = document.querySelector('img');

img.getAttribute('src'); // pega atributo do valor do src
img.setAttribute('alt', 'Texto alternativo'); // muda o alt
img.hasAttribute('id'); // true or false
img.removeAttribute('alt'); // remove o alt

//img.hasAttribute(); // true or false se tem algum atributo

/*
Read Only vs Writable
Existem propriedades que não permitem a mudança de seus valores, 
essas são considerados Read Only, ou seja, apenas leitura.
*/
const animal = document.querySelector('.animais');

animal.className; // string com o nome das classes
animal.className = 'azul'; // substitui completamente a string
animal.className += ' vermelho'; // adiciona vermelho a classe
animal.attributes = 'class="ativo"'; // não funciona
