export default class NavigationTab {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = 'ativo';
  }

  activeTab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove(this.activeClass);
    });
    const directionNavigationItens = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(
      this.activeClass,
      directionNavigationItens
    );
  }

  addEventNavigationTab() {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        this.activeTab(index);
      });
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      this.activeTab(0);
      this.addEventNavigationTab();
    }
  }
}
