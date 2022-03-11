/*
NEW PROMISE()
Promise é uma função construtora de promessas.
Existem dois resultados possíveis de uma promessa,
ela pode ser resolvida,
com a execução do primeiro argumento,
ou rejeitada se o segundo argumento for ativado.
*/
const promessa = new Promise(function (resolve, reject) {
  let condicao = true;

  if (condicao) {
    resolve();
  } else {
    reject();
  }
});
console.log(promessa); //Promise {<fulfilled>: undefined}

/*
RESOLVE()
Podemos passar um argumento na função resolve(),
este será enviado junto com a resolução da Promise.
*/

const promessaResolve = new Promise(function (resolve, reject) {
  let condicao = true;

  if (condicao) {
    resolve('Condição verdadeira');
  } else {
    reject('Condição falsa');
  }
});
console.log(promessaResolve); //Promise {<fulfilled>: 'Condição verdadeira'}

/*
REJECT()
Quando a condição de resolução da promise não é atingida,
ativamos a função reject para rejeitar a mesma.
Podemos indicar no console um erro,
informando que a promise foi rejeitada.
*/

const promessaRejeitada = new Promise(function (resolve, reject) {
  let condicao = false;

  if (condicao) {
    resolve('Condição verdadeira');
  } else {
    reject('Condição falsa');
  }
});
console.log(promessaRejeitada); //Promise {<rejected>: 'Condição falsa'}

/*
THEN()
O poder das Promises está no método then() do seu protótipo.
O Callback deste método só será ativado quando
a promise for resolvida.
O argumento do callback será o valor passado na
função resolve.
*/

const promessaThen = new Promise(function (resolve, reject) {
  let condicao = true;

  if (condicao) {
    resolve('Argumento passado e exibido pelo then');
  } else {
    reject('Error');
  }
});

promessaThen.then(function (valueResolve) {
  console.log(valueResolve);
});

/*
ASSÍNCRONO
As promises não fazem sentido quando o código
executado dentro da mesma é apenas código síncrono.
O poder está na execução de código assíncrono
que executará o resolve() ao final dele.
*/

const promessaAssincrono = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promisse resolvida de forma assíncrona');
  }, 1000);
});

promessaAssincrono.then((valueResolve) => {
  console.log(valueResolve);
});
// 'Promisse resolvida de forma assíncrona' após 1s

/*
THEN().THEN()
O método then() retorna outra Promise.
Podemos colocar then() após then() e
fazer um encadeamento de promessas.
O valor do primeiro argumento de cada then,
será o valor do retorno anterior.
*/

const promessas = new Promise((resolve, reject) => {
  resolve('Etapa 1');
});

promessas
  .then((valueResolve) => {
    console.log(valueResolve); // 'Etapa 1'
    return 'Etapa 2';
  })
  .then((valueAfterThen) => {
    console.log(valueAfterThen); // 'Etapa 2'
    return 'Etapa 3';
  });

/*
CATCH()
O método catch(), do protótipo de Promises,
adiciona um callback a promise que será ativado
caso a mesma seja rejeitada.
*/

const promessaCatch = new Promise((resolve, reject) => {
  let condicao = false;

  if (condicao) {
    resolve('Promisse resolvida');
  } else {
    reject(Error('Promisse recusada'));
  }
});

promessaCatch
  .then((value) => {
    console.log(value);
  })
  .catch((valuePromisseReject) => {
    console.log(valuePromisseReject);
  });

/*
THEN(RESOLVE, REJECT)
Podemos passar a função que será ativada caso a promise
seja rejeitada,
direto no método then, como segundo argumento.
*/

const promesa = new Promise((resolve, reject) => {
  let condicao = false;

  if (condicao) {
    resolve('Promisse executada com sucesso');
  } else {
    reject(Error('Promisse rejeitada'));
  }
});

promesa.then(
  (valueResolve) => {
    console.log(valueResolve);
  },
  (valueReject) => {
    console.log(valueReject);
  }
);

/*
FINALLY()
finally() executará a função anônima assim que a promessa acabar.
A diferença do finally
é que ele será executado independente do resultado,
se for resolvida ou rejeitada.
*/

const promessaFinally = new Promise((resolve, reject) => {
  let condicao = false;

  if (condicao) {
    resolve('Promesa finalizada');
  } else {
    reject(Error('Promesa recusada'));
  }
});

promessaFinally
  .then(
    (valueResolve) => {
      console.log(valueResolve);
    },
    (valueReject) => {
      console.log(valueReject);
    }
  )
  .finally(() => {
    console.log('---Acabou----');
  });

/*
PROMISE.ALL()
Retornará uma nova promise assim que todas as promises 
dentro dela forem resolvidas ou pelo menos uma rejeitada. 
A reposta é uma array com as respostas de cada promise.
*/

const login = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Login Efetuado');
  }, 1000);
});
const dados = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Dados Carregados');
  }, 1500);
});

const tudoCarregado = Promise.all([login, dados]);

tudoCarregado.then((values) => {
  console.log(values);
  values.forEach((value) => {
    console.log(value);
  });
});

/*
PROMISE.RACE()
Retornará uma nova promise assim que a primeira promise for resolvida ou rejeitada. Essa nova promise terá a resposta da primeira resolvida.
*/

const Login = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Login Efetuado 2.0');
  }, 1000);
});

const Dados = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Dados carregados 2.0');
  }, 1500);
});

const carregouPrimeiro = Promise.race([Login, Dados]);

carregouPrimeiro.then((value) => {
  console.log(value);
});
