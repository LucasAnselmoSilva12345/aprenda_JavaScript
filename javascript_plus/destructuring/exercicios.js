// Extraia o backgroundColor, color e margin do btn
const btn = document.querySelector('button');
const btnStyles = getComputedStyle(btn);

const { background, color, margin } = btnStyles;
console.log(background);
console.log(color);
console.log(margin);

// Troque os valores das variáveis abaixo
let cursoAtivo = 'JavaScript';
let cursoInativo = 'HTML';

const [curso_Ativo, curso_Inativo] = [cursoInativo, cursoAtivo];

console.log(curso_Ativo);
console.log(curso_Inativo);

// Corrija o erro abaixo
const cachorro = {
  nome: 'Bob',
  raca: 'Labrador',
  cor: 'Amarelo',
};

const { cor } = cachorro;
console.log(cor);
