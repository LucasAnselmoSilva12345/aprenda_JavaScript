export default function fetchBitcoin(url, target) {
  fetch(url)
    .then((response) => response.json())
    .then((body) => {
      const btcPreco = document.querySelector(target);
      btcPreco.innerText = (10000 / body.BRL.buy).toFixed(4);
    })
    .catch((erro) => {
      console.log(Error(erro));
    });
}
