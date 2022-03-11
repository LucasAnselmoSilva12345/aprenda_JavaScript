console.log('--------------EXERCÍCIOS--------------');

// Mostre no console cada parágrado do site
// Mostre o texto dos parágrafos no console
const paragrafos = document.querySelectorAll('p');
paragrafos.forEach((item) => {
  console.log(item.innerText);
});

// Como corrigir os erros abaixo:
const img = document.querySelectorAll('img');

img.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);
