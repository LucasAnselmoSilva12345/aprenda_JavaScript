export function initFuncionamento() {
  const funcionamento = document.querySelector('[data-semana]');

  if (funcionamento) {
    const diaSemana = funcionamento.dataset.semana.split(',').map(Number);
    const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);

    const dataNow = new Date();
    const diaAgora = dataNow.getDay();
    const horarioAgora = dataNow.getHours();

    const semanaAberto = diaSemana.indexOf(diaAgora) !== -1;

    const horarioAberto =
      horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];

    if (semanaAberto && horarioAberto) {
      funcionamento.classList.add('aberto');
    }
  }
}
