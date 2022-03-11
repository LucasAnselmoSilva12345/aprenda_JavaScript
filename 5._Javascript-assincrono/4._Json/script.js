fetch('./script.json')
  .then((response) => response.json())
  .then((body) => {
    console.log(body[0].aula);

    body.forEach((item) => {
      console.log(item.professor);
    });
  });

/*
JSON.PARSE() E JSON.STRINGIFY()

JSON.parse() irá transformar um texto JSON 
em um objeto JavaScript. 

JSON.stringify() irá transformar um objeto 
JavaScript em uma string no formato JSON.
*/
const textoJSON = '{"id": 1, "titulo": "JavaScript", "tempo": "25min"}';
const textoOBJ = JSON.parse(textoJSON);
console.log(textoOBJ);

const enderecoOBJ = {
  cidade: 'Rio de Janeiro',
  rua: 'Ali perto',
  pais: 'Brasil',
  numero: 50,
};
const enderecoJSON = JSON.stringify(enderecoOBJ);
console.log(enderecoJSON);

/*
EXEMPLO REAL
Podemos guardar por exemplo no localStorage, 
uma string como valor de uma propriedade. 

E retornar essa string como um objeto.
*/

const configuracoes = {
  player: 'Google API',
  tempo: 25.5,
  aula: '2-1 JavaScript',
  vitalicio: true,
};

localStorage.configuracoes = JSON.stringify(configuracoes);
const pegarConfiguracoes = JSON.parse(localStorage.configuracoes);
