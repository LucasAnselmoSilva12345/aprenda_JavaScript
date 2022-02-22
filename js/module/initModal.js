export default class initModal {
  constructor(abrirModal, fecharModal, containerModal) {
    this.abrirModal = document.querySelector(abrirModal);
    this.fecharModal = document.querySelector(fecharModal);
    this.containerModal = document.querySelector(containerModal);

    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickAwayModal = this.clickAwayModal.bind(this);
  }

  toogleModal() {
    this.containerModal.classList.toggle('ativo');
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toogleModal();
  }

  clickAwayModal(event) {
    if (event.target === this.containerModal) {
      this.toogleModal();
    }
  }

  addModalEvent() {
    this.abrirModal.addEventListener('click', this.eventToggleModal);
    this.fecharModal.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.clickAwayModal);
  }

  init() {
    if (this.abrirModal && this.fecharModal && this.containerModal) {
      this.addModalEvent();
    }
    return this;
  }
}
