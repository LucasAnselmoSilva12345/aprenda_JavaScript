import { outsideClick } from './outsideClick.js';

export function initDropdownMenu() {
  const dropDownMenus = document.querySelectorAll('[data-dropdown]');

  if (dropDownMenus) {
    dropDownMenus.forEach((menu) => {
      ['touchstart', 'click'].forEach((userEvent) => {
        menu.addEventListener(userEvent, handleClick);
      });
    });

    function handleClick(event) {
      event.preventDefault();
      this.classList.add('active');

      outsideClick(this, ['touchstart', 'click'], () => {
        this.classList.remove('active');
      });
    }
  }
}
