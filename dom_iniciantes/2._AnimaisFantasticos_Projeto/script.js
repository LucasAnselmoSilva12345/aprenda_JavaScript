function initNavigationTab() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove('ativo');
      });
      tabContent[index].classList.add('ativo');
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
initNavigationTab();

function initAccordionListFaq() {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const classAtivo = 'ativo';

  if (accordionList.length) {
    accordionList[0].classList.add(classAtivo);
    accordionList[0].nextElementSibling.classList.add(classAtivo);

    function activeAccordion() {
      this.classList.toggle(classAtivo);
      this.nextElementSibling.classList.toggle(classAtivo);
    }

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}
initAccordionListFaq();

function initScrollSuave() {
  const linkInterno = document.querySelectorAll('.js-menu a[href^="#"]');

  if (linkInterno.length) {
    function scrollToSection(event) {
      event.preventDefault();

      const href = event.currentTarget.getAttribute('href');
      const section = document.querySelector(href);

      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      // forma alternativa
      // const topo = section.offsetTop
      // window.scrollTo({
      //   top: topo,
      //   behavior: "smooth",
      // })
    }

    linkInterno.forEach((link) => {
      link.addEventListener('click', scrollToSection);
    });
  }
}
initScrollSuave();

function initAnimatinScroll() {
  const sections = document.querySelectorAll('.js-scroll');

  if (sections.length) {
    const windowHalf = window.innerHeight * 0.6;
    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionTop = sectionTop - windowHalf < 0;
        if (isSectionTop) {
          section.classList.add('ativo');
        }
      });
    }
    animaScroll();
    window.addEventListener('scroll', animaScroll);
  }
}
initAnimatinScroll();
