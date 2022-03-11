console.log('------------Exercícios---------');

// Retorne no console todas as imagens do site
const imgSite = document.querySelectorAll('img');
imgSite.forEach(function (item) {
  console.log('Imagens ->', item);
});

// Retorne no console apenas as imagens que começaram com a
//palavra imagem
const imgSitePalavras = document.querySelectorAll('img[src^="img/imagem"]');
imgSitePalavras.forEach(function (item) {
  console.log('---Imagens ->', item);
});

// Selecione todos os links internos (onde o href começa com #)
const links = document.querySelectorAll('[href^="#"]');
links.forEach(function (item) {
  console.log('Links ->', item);
});

// Selecione o primeiro h2 dentro de .animais-descricao
const h2Selecionado = document.querySelector('.animais-descricao h2');
console.log('Texto ->', h2Selecionado.innerText);

// Selecione o último p do site
const paragrafos = document.querySelectorAll('p');
console.log(paragrafos[paragrafos.length - 1].innerText);
