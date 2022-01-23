import Slide from './slide.js';

const initSlide = new Slide('.slide', '.slide-wrapper');
initSlide.init();

initSlide.changeSlide(0);
