/*
ASYNC / AWAIT
A palavra chave async indica que a função 
possui partes assíncronas e 
que você pretende esperar a 
resolução da mesma antes de continuar. 

O await irá indicar a 
promise que devemos esperar. 

Faz parte do ES8.
*/

async function puxarDados() {
  const responseDados = await fetch('./dados.json');
  const jsonDados = await responseDados.json();
  console.log(jsonDados);
}
puxarDados();

/*
THEN / ASYNC
A diferença é uma sintaxe mais limpa.
*/

function iniciarFetch() {
  fetch('./dados.json')
    .then((response) => response.json())
    .then((body) => {
      document.body.innerText = body.aula;
    });
}
iniciarFetch();

async function iniciarAsync() {
  const response = await fetch('./clientes.json');
  const body = await response.json();

  document.body.innerText = body.nome;
}
iniciarAsync();

/*
TRY / CATCH
Para lidarmos com erros nas promises, 
podemos utilizar o try e o catch na função.
*/

async function puxarInfo() {
  try {
    const response = await fetch('./dados.json');
    const body = await response.json();

    document.body.innerText = body.horario;
  } catch (erro) {
    console.log(erro);
  }
}
puxarInfo();

/*
INICIAR FETCH AO MESMO TEMPO

Não precisamos esperar um fetch 
para começarmos outro. 

Porém precisamos esperar a resposta resolvida 
do fetch para transformarmos a response em json.
*/

async function iniciarFetchAsync() {
  const dadosResponse = fetch('./dados.json');
  const clientesResponse = fetch('./clientes.json');

  // ele espera o que está dentro da expressão " () "
  // ocorrer primeiro

  const dadosBody = await (await dadosResponse).json();
  const clientesBody = await (await clientesResponse).json();

  console.log(dadosBody);
  console.log(clientesBody);
}

iniciarFetchAsync();

/*
PROMISE
O resultado da expressão à frente de await tem que ser uma promise. 
E o retorno do await será sempre o resultado desta promise.
*/

async function asyncSemPromise() {
  // console não irá esperar.
  await setTimeout(() => {
    console.log('Depois de 1s');
  }, 1000);
  console.log('acabou antes de tudo');
}
asyncSemPromise();

async function iniciarAsyncComPromise() {
  await new Promise((resolve) => {
    setTimeout(() => resolve(), 1000);
  });
  console.log('Depois de 1s com promise');
}
iniciarAsyncComPromise();
