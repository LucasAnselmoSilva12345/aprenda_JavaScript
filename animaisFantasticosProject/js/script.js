import ScrollSuave from './module/initScrollSuave.js';
import initAnimationScroll from './module/initAnimationScroll.js';
import initNavigationTab from './module/initNavigationTab.js';
import initAccordionList from './module/initAccordionList.js';
import initModal from './module/initModal.js';
import initTooltip from './module/initTooltip.js';
import initDropdownMenu from './module/initDropdownMenu.js';
import initMenuMobile from './module/initMenuMobile.js';
import initFuncionamento from './module/initFuncionamento.js';
import initFetchAnimais from './module/initFetchAnimais.js';
import initFetchBitcoin from './module/initFetchBitcoin.js';

const initScrollSuave = new ScrollSuave(
  '[data-menu="scrollSuave"] a[href^="#"]'
);
initScrollSuave.init();

initAnimationScroll();
initNavigationTab();
initAccordionList();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
