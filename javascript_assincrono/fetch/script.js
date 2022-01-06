/*
FETCH API
Permite fazermos requisições HTTP através do método fetch(). 
Este método retorna a resolução de uma Promise. 
Podemos então utilizar o then para interagirmos 
com a resposta, que é um objeto do tipo Response.
*/
const doc = fetch('./doc.txt');
console.log(doc);

doc.then((response) => {
  console.log(response);
});

/*
RESPONSE
O objeto Response, possui um corpo com o conteúdo da resposta. 
Esse corpo pode ser transformado utilizando 
métodos do protótipo do objeto Response. 
Estes retornam outras promises.
*/
const doc2 = fetch('./doc.txt');

doc2
  .then((response) => {
    return response.text();
  })
  .then((text) => {
    console.log(text);
  });

/*
Aplicando os valores do text no html
*/
const doc3 = fetch('./doc.txt');

doc3
  .then((response) => {
    return response.text();
  })
  .then((text) => {
    const conteudo = document.querySelector('.conteudo');
    conteudo.innerText = text;
  });

/*
.JSON()
Um tipo de formato de dados muito utilizado com JavaScript 
é o JSON (JavaScript Object Notation), 
pelo fato dele possuir basicamente a mesma 
sintaxe que a de um objeto js. 

.json() transforma um corpo em json 
em um objeto JavaScript.
*/
const ceps = fetch('https://viacep.com.br/ws/01001000/json/');

ceps
  .then((response) => response.json())
  .then((cep) => {
    console.log(cep);
    console.log(cep.bairro);
    console.log(cep.logradouro);
    console.log(cep.cep);
    console.log(cep.localidade);
  });

/*
.TEXT()
Podemos utilizar o .text() 
para diferentes formatos como txt, json, 
html, css, js e mais.
*/
const style = fetch('./style.css');

style
  .then((response) => response.text())
  .then((bodyRequest) => {
    const estilos = document.querySelector('.estilos');
    const style = document.createElement('style');
    style.innerHTML = bodyRequest;
    estilos.appendChild(style);
  });

/*
HTML E .TEXT()
Podemos pegar um arquivo inteiro em HTML, 
transformar o corpo em texto e inserir em uma div 
com o innerHTML. 

A partir dai podemos manipular esses 
dados como um DOM qualquer.
*/

const sobre = fetch('./sobre.html');

const div = document.createElement('div');

sobre
  .then((response) => response.text())
  .then((body) => {
    console.log(body);
    div.innerHTML = body;
    const titulo = div.querySelector('h1');
    console.log(titulo);
    document.querySelector('h1').innerText = titulo.innerText;
    console.log(div);
  });

/*
.BLOB()
Um blob é um tipo de objeto utilizado para representação 
de dados de um arquivo. 

O blob pode ser utilizado para 
transformarmos requisições de imagens por exemplo. 
O blob gera um URL único.
*/
const imagem = fetch('./imagem.png');

imagem
  .then((response) => response.blob())
  .then((bodyRequest) => {
    const blobUrl = URL.createObjectURL(bodyRequest);
    const imagemDom = document.querySelector('img');
    imagemDom.src = blobUrl;
    console.log(blobUrl);
    console.log(bodyRequest);
  });

/*
.CLONE()
Ao utilizarmos os métodos acima, text, json e blob, 
a resposta é modificada. 

Por isso existe o método clone, 
caso você necessite transformar uma resposta 
em diferentes valores.
*/
const myCep = fetch('https://viacep.com.br/ws/01001000/json/');

const divs = document.createElement('div');

myCep.then((response) => {
  const cloneResponse = response.clone();

  response.json().then((json) => {
    console.log(json);
  });

  cloneResponse.text().then((text) => {
    console.log(text);
  });
});

/*
.HEADERS
É uma propriedade que possui os cabeçalhos da requisição. 
É um tipo de dado iterável então podemos utilizar 
o forEach para vermos cada um deles.
*/

const section = document.createElement('section');

fetch('https://viacep.com.br/ws/01001000/json/').then((response) => {
  response.headers.forEach(console.log);
});

/*
.STATUS E .OK
Retorna o status da requisição. 
Se foi 404, 200, 202 e mais
.ok retorna um valor booleano
sendo true para uma requisição de sucesso e 
false para uma sem sucesso.
*/

const section2 = document.createElement('section');

fetch('https://viacep.com.br/ws/01001000/json/').then((response) => {
  console.log(response.status, response.ok);

  if (response.status === 404) {
    console.log('Página não encontrada');
  }
});

/*
.URL E .TYPE

.url retorna o url da requisição. 

.type retorna o tipo da reposta.
*/

const section3 = document.createElement('section');

fetch('https://viacep.com.br/ws/01001000/json/').then((response) => {
  console.log(response);
  console.log(response.url);
  console.log(response.type);
});
