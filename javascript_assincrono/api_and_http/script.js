/*
API
Application

Um servidor, aplicativo, objeto JavaScript ou qualquer outra coisa que você interaja através de comandos. Ao digitar uma URL, estamos utilizando a API do browser para se comunicar com a API do servidor.

Programming

Programação, isso significa que um comando irá encadear uma cadeia de eventos pré-definidos. O resultado esperado é geralmente o mesmo.

Interface

A interface são os comandos criados para permitir a interação com a aplicação. Ex: 'VIOLAO'.toLowerCase() é um método que faz parte da interface do objeto String. A interação com a interface retorna um efeito / resposta.

EXEMPLOS DE API'S
GitHub

https://api.github.com/users/origamid

https://api.github.com/users/origamid/followers

Array / Element

[].map();

[].filter();

Element.classList;

Element.attributes;

Tempo

https://www.metaweather.com/api/location/455825/

https://github.com/toddmotto/public-apis
*/

/*
HTTP
Hypertext Transfer Protocol é o 
protocolo utilizando para enviarmos/recebermos 
arquivos e dados na Web.
*/
fetch('https://pokeapi.co/api/v2/pokemon/')
  .then((response) => response.json())
  .then((body) => {
    console.log(body);
  });

/*
URL E METHOD
Uma requisição HTTP é feita através de uma URL. 
O método padrão é o GET, mas existem outros como 
POST, UPDATE, DELETE, HEADER.
*/
const url = 'https://jsonplaceholder.typicode.com/posts/';
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
  body: '{"title": "JavaScript"}',
};

fetch(url, options)
  .then((response) => response.json())
  .then((body) => {
    // console.log(body);
  });

/*
METHOD
GET

Puxa informação, utilizado para pegar posts, usuários e etc.

POST

Utilizado para criar posts, usuários e etc.

PUT

Geralmente utilizado para atualizar informações.

DELETE

Deleta uma informação.

HEAD

Puxa apenas os headers.
*/

/*
GET
GET irá puxar as informações da URL. 
Não é necessário informar que o método é GET, 
pois este é o padrão.
*/
const urlGet = 'https://jsonplaceholder.typicode.com/posts/';

const optionsGet = {
  method: 'GET',
};

fetch(urlGet, optionsGet)
  .then((response) => response.json())
  .then((body) => {
    console.log(body);
  });

/*
POST
POST irá criar uma nova postagem, 
utilizando o tipo de conteúdo especificado 
no headers e utilizando o conteúdo do body.
*/
const urlPost = 'https://jsonplaceholder.typicode.com/posts/';

const optionsPost = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
  body: '{"titulo": "JavaScript"}',
};

fetch(urlPost, optionsPost)
  .then((response) => response.json())
  .then((body) => {
    console.log(body);
  });

/*
PUT
PUT irá atualizar o conteúdo do URL 
com o que for informado no conteúdo do body.
*/

const urlPut = 'https://jsonplaceholder.typicode.com/posts/1/';

const optionsPut = {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
  body: '{"titulo": "JavaScript"}',
};

fetch(urlPut, optionsPut)
  .then((response) => response.json())
  .then((body) => {
    console.log(body);
  });

/*
HEAD
HEAD puxa apenas os headers. 
É uma requisição mais leve pois não puxa o body.
*/

const urlHead = 'https://jsonplaceholder.typicode.com/posts/1/';

const optionsHead = {
  method: 'HEAD',
};

fetch(urlHead, optionsPut).then((response) => {
  response.headers.forEach(console.log);
  console.log(response.headers.get('Content-Type'));
});

/*
HEADERS
Cache-Control

Tempo que o arquivo deve ficar em cache em segundos. 
Ex: public, max-age=3600

Content-Type

Tipo de conteúdo. 
Ex: text/html; charset=utf-8. 
Indicar o tipo de arquivo principalmente 
em métodos POST e PUT.

Lista de Headers

https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers
*/

/*
CORS
Cross-Origin Resource Sharing, 
gerencia como deve ser o compartilhamento 
de recursos entre diferente origens.

É definido no servidor se é permitido 
ou não o acesso dos recursos através de 
scripts por outros sites. 

Utilizando o Access-Control-Allow-Origin.

Se o servidor não permitir o 
acesso, este será bloqueado. 

É possível passar por cima do 
bloqueio utilizando um proxy.

CORS é um acordo entre:
browser / servidor ou servidor / servidor. 
Ele serve para dar certa proteção ao 
browser, mas não é inviolável.
*/
