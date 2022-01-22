export default class AccordionList {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.classeAtivo = 'ativo';
  }

  toggleAccordion(item) {
    item.classList.toggle(this.classeAtivo);
    item.nextElementSibling.classList.toggle(this.classeAtivo);
  }

  addAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener('click', () => this.toggleAccordion(item));
    });
  }

  init() {
    if (this.accordionList.length) {
      this.toggleAccordion(this.accordionList[0]);
      this.addAccordionEvent();
    }
  }
}
