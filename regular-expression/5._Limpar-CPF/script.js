const cpfs = document.querySelectorAll('.cpf li');

const elementsInnerText = ([...elements]) => {
  return elements.map((element) => element.innerText);
};

const limparCpf = (cpf) => {
  return cpf.replace(/\D/g, '');
};

const construirCPF = (cpf) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
};

const formatarVariosCPFS = (cpfs) => {
  return cpfs.map(limparCpf).map(construirCPF);
};

const substituirCPFS = (cpfsElements) => {
  const cpfsList = elementsInnerText(cpfsElements);
  const cpfsFormatados = formatarVariosCPFS(cpfsList);

  cpfsElements.forEach((element, index) => {
    element.innerText = cpfsFormatados[index];
  });
};
substituirCPFS(cpfs);
