/*
EXEMPLO REAL
Quando mudamos a propriedade seletor, o objeto Dom irá passar a selecionar o 
novo seletor em seus métodos.
*/
// const Dom = {
//   seletor: 'li',
//   element() {
//     return document.querySelector(this.seletor);
//   },
//   ativar() {
//     this.element().classList.add('ativo');
//   },
// };

// Dom.ativar();
// Dom.seletor = 'ul';
// Dom.ativar();

/*
CONSTRUCTOR FUNCTION REAL
Um objeto criado com uma Constructor, não irá influenciar em outro objeto criado 
com a mesma Constructor.
*/

function Dom(seletor) {
  (this.element = function () {
    return document.querySelector(seletor);
  }),
    (this.ativar = function () {
      this.element().classList.add('ativo');
    });
}

const li = new Dom('li');
// const ul = new Dom('ul');
