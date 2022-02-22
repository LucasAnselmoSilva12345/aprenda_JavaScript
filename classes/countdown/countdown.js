export class Countdown {
  constructor(futureDate) {
    this.futureDate = futureDate; // recebe a data
  }
  get _actualDate() {
    return new Date(); // pega a data do dia atual
  }
  get _futureDate() {
    return new Date(this.futureDate); // a data que foi informada no constructor
  }
  get _timeStampDiff() {
    return this._futureDate.getTime() - this._actualDate.getTime(); // o tempo que falta para a data que foi informada (em milisegundos)
  }
  get days() {
    return Math.floor(this._timeStampDiff / (24 * 60 * 60 * 1000)); // quantos dias faltam para a data que foi informada
  }
  get hours() {
    return Math.floor(this._timeStampDiff / (60 * 60 * 1000)); // quantos horas faltam para a data que foi informada
  }
  get minutes() {
    return Math.floor(this._timeStampDiff / (60 * 1000)); // quantos minutos faltam para a data que foi informada
  }
  get seconds() {
    return Math.floor(this._timeStampDiff / 1000); // quantos minutos faltam para a data que foi informada
  }
  get total() {
    const days = this.days;
    const hours = this.hours % 24;
    const minutes = this.minutes % 60;
    const second = this.seconds % 60;
    return {
      days,
      hours,
      minutes,
      second,
    };
  }
}
