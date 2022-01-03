import { Countdown } from './coutdown.js';

const diasParaNatal = new Countdown('24 December 2021 23:59:59 GMT-0300');

console.log(diasParaNatal.total);

// setInterval(() => {
//   console.log(diasParaNatal.total);
// }, 1000);
