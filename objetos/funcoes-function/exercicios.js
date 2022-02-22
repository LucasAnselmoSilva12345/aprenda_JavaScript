console.log('-------EXERCICIOS---------');

// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragrafos = document.querySelectorAll('p');
const arrayParagrafos = Array.from(paragrafos);

const valorTotalParagrafos = arrayParagrafos.reduce((acc, item) => {
  const valuesParagrafos = item.innerText.length;
  return acc + valuesParagrafos;
}, 0);
console.log(valorTotalParagrafos);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function criarElemento(tag, classe, conteudo) {
  const elemento = document.createElement(tag);
  classe ? elemento.classList.add(classe) : null;
  conteudo ? (elemento.innerHTML = conteudo) : null;
  return elemento;
}
console.log(criarElemento('li', 'azul', 'Esse é o conteudo'));

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico
const h1Titulo = criarElemento.bind(null, 'h1', 'titulo');

console.log(h1Titulo('Curso de Js'));
