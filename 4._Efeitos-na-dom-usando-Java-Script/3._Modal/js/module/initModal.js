export function initModal() {
  const abrirModal = document.querySelector('[data-modal="abrir"]');
  const fecharModal = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  if (abrirModal && fecharModal && containerModal) {
    function toogleModal(event) {
      event.preventDefault();
      containerModal.classList.toggle('ativo');
    }

    function clickAwayModal(event) {
      if (event.target === this) {
        toogleModal(event);
      }
    }

    abrirModal.addEventListener('click', toogleModal);
    fecharModal.addEventListener('click', toogleModal);
    containerModal.addEventListener('click', clickAwayModal);
  }
}

/*
function antiga

const abrirModal = document.querySelector('[data-modal="abrir"]');
  const fecharModal = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  if (abrirModal && fecharModal && containerModal) {
    function openModal(event) {
      event.preventDefault();
      containerModal.classList.toggle('ativo');
    }

    function closeModal(event) {
      event.preventDefault();
      containerModal.classList.toggle('ativo');
    }

    function clickAwayModal(event) {
      if (event.target === this) {
        closeModal(event);
      }
    }

    abrirModal.addEventListener('click', openModal);
    fecharModal.addEventListener('click', closeModal);
    containerModal.addEventListener('click', clickAwayModal);
  }
*/
