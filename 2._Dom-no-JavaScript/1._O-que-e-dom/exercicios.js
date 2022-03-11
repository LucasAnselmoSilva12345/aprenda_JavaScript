console.log('------------EXERCÍCIOS------------');

// Retorne o url da página atual utilizando o objeto window
const urlSite = window.location.href;
console.log(urlSite);

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const classAtivo = document.querySelector('.ativo');
console.log(classAtivo.innerText);

// Retorne a linguagem do navegador
const languagesNavigator = window.navigator.language;
console.log(languagesNavigator);

// Retorne a largura da janela
const larguraJanela = window.innerWidth;
console.log(larguraJanela);
