import { SlideNav } from './slide.js';

const initSlide = new SlideNav('.slide', '.slide-wrapper');

initSlide.init();
initSlide.addArrow('.prev', '.next');

initSlide.addControl();
