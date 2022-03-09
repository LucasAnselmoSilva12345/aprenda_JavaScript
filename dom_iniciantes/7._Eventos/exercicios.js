console.log('-------Exercícios-------');

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linksInterno = document.querySelectorAll('a[href^="#"]');

function linksInternoFunction(event) {
  event.preventDefault();
  linksInterno.forEach((link) => {
    link.classList.remove('ativo');
  });
  event.currentTarget.classList.add('ativo');
}

linksInterno.forEach((link) => {
  link.addEventListener('click', linksInternoFunction);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const bodyParte = document.querySelectorAll('body *');

function elementsClick(e) {
  event.currentTarget.remove();
}

bodyParte.forEach((elemento) => {
  elemento.addEventListener('click', elementsClick);
});

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// Se o usuário clicar na tecla (t), aumente todo o texto do site.
function handleClickT(event) {
  console.log(event.key);
  if (event.key === 't') {
    document.documentElement.classList.toggle('textmaior');
  }
}
window.addEventListener('keydown', handleClickT);
