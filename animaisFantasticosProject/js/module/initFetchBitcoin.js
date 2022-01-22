export default function initFetchBitcoin() {
  fetch('https://blockchain.info/ticker')
    .then((response) => response.json())
    .then((body) => {
      const btcPreco = document.querySelector('.btc-preco');
      btcPreco.innerText = (10000 / body.BRL.buy).toFixed(4);
    })
    .catch((erro) => {
      console.log(Error(erro));
    });
}
