export function initAnimaNumeros() {
  function animaNumeros() {
    const dataNumeros = document.querySelectorAll('[data-numero]');

    dataNumeros.forEach((dataNumero) => {
      const total = +dataNumero.innerText;
      const incremento = Math.floor(total / 100);

      let start = 0;
      const timer = setInterval(() => {
        start = start + incremento;
        dataNumero.innerText = start;
        if (start > total) {
          dataNumero.innerText = total;
          clearInterval(timer);
        }
      }, 50 * Math.random());
    });
  }

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('ativo')) {
      observer.disconnect();
      animaNumeros();
    }
  }

  const observerTarget = document.querySelector('.numeros');
  const observer = new MutationObserver(handleMutation);

  observer.observe(observerTarget, { attributes: true });
}
