export default function initModal() {
  const abrirModal = document.querySelector('[data-modal="abrir"]');
  const fecharModal = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  function toogleModal(event) {
    event.preventDefault();
    containerModal.classList.toggle('ativo');
  }

  function clickAwayModal(event) {
    if (event.target === this) {
      toogleModal(event);
    }
  }

  if (abrirModal && fecharModal && containerModal) {
    abrirModal.addEventListener('click', toogleModal);
    fecharModal.addEventListener('click', toogleModal);

    containerModal.addEventListener('click', clickAwayModal);
  }
}
