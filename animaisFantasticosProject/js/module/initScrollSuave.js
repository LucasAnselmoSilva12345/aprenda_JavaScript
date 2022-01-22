export default function initScrollSuave() {
  const linkInterno = document.querySelectorAll(
    '[data-menu="scrollSuave"] a[href^="#"]'
  );

  function scrollToSection(event) {
    event.preventDefault();

    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  if (linkInterno.length) {
    linkInterno.forEach((link) => {
      link.addEventListener('click', scrollToSection);
    });
  }
}
