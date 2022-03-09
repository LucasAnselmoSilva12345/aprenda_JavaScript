// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

const inputCep = document.getElementById('cep');
const btnCep = document.getElementById('btnCep');
const resultadoCep = document.querySelector('.resultadoCep');

btnCep.addEventListener('click', handleClickSearchCep);

function handleClickSearchCep(event) {
  event.preventDefault();
  const cep = inputCep.value;
  console.log(cep);
  buscaCep(cep);
}

function buscaCep(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => response.text())
    .then((body) => {
      resultadoCep.innerText = body;
    });
}

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

const resultBtc = document.querySelector('.resultadoBtc');

function fetchBtc() {
  fetch('https://blockchain.info/ticker')
    .then((response) => response.json())
    .then((btcJson) => {
      console.log(btcJson.BRL.buy);
      resultBtc.innerText = ('R$' + btcJson.BRL.buy).replace('.', ',');
    });
}

// setInterval(fetchBtc, 1000 * 30);

fetchBtc();

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

const textoPiada = document.querySelector('.textPiada');
const proximaPiada = document.querySelector('.proximaPiada');

function puxarPiada() {
  fetch('https://api.chucknorris.io/jokes/random')
    .then((response) => response.json())
    .then((body) => {
      console.log(body);
      textoPiada.innerText = body.value;
    });
}

proximaPiada.addEventListener('click', puxarPiada);
