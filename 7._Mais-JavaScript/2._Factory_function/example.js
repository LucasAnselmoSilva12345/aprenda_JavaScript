function $$(selectedElemets) {
  const elements = document.querySelectorAll(selectedElemets);

  function hide() {
    elements.forEach((element) => {
      element.style.display = 'none';
    });
    return this;
    // return $$(selectedElemets); mesma ação que o this
  }

  function show() {
    elements.forEach((element) => {
      element.style.display = 'initial';
    });
    return this;
    // return $$(selectedElemets);
  }

  function on(onEvent, callback) {
    elements.forEach((element) => {
      element.addEventListener(onEvent, callback);
    });
    return this;
    // return $$(selectedElemets);
  }

  function addClass(className) {
    elements.forEach((element) => {
      element.classList.add(className);
    });
    return this;
    // return $$(selectedElemets);
  }

  function removeClass(className) {
    elements.forEach((element) => {
      element.classList.remove(className);
    });
    return this;
    // return $$(selectedElemets);
  }

  return {
    elements,
    hide,
    show,
    on,
    addClass,
    removeClass,
  };
}

const btns = $$('button').show();

console.log(btns);

function handleClick() {
  alert('Oi Lucas');
}

btns.on('click', handleClick);

btns.addClass('buttons');
