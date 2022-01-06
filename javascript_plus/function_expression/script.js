/*
FUNCTION DECLARATION
São duas as formas mais comuns de declararmos uma função. 
A que utilizamos até o momento 
é chamado de Function Declaration.
*/
function soma(a, b) {
  return a + b;
}
soma(4, 3);

/*
FUNCTION EXPRESSION
É criada a partir da declaração de uma variável, 
na qual assinalamos uma função. 

Esta função pode ser anônima ou nomeada. 
A mesma poderá ser ativada através da variável assinalada.
*/
const somar = function (a, b) {
  return a + b;
};
somar(4, 2);
