import ScrollSuave from './module/initScrollSuave.js';
import AccordionList from './module/initAccordionList.js';
import NavigationTab from './module/initNavigationTab.js';
import initAnimationScroll from './module/initAnimationScroll.js';
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

const initAccordionList = new AccordionList('[data-anime="accordion"] dt');
initAccordionList.init();

const initNavigationTab = new NavigationTab(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
);
initNavigationTab.init();

initAnimationScroll();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
