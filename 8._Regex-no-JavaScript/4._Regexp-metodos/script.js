/*
REGEXP CONSTRUCTOR
Toda regexp é criada com o constructor RegExp() 
e herda as suas propriedades e métodos. 

Existem diferenças na sintaxe de uma Regexp 
criada diretamente em uma variável e de
 uma passada como argumento de RegExp.
*/
const regexp = /\w+/gi;

const regexp1 = new RegExp('\\w+', 'gi');

const frase = 'JavaScript Linguagem 101';
console.log(frase.replace(regexp, 'X'));
console.log(frase.replace(regexp1, 'X'));

// Exemplo complexo que mostra a diferença em usar o new RegExp:
const regexpTELEFONE1 =
  /(?:\+?55\s?)?(?:\(?\d{2}\)?[-\s]?)?\d{4,5}[-\s]?\d{4}/g;
const regexpTELEFONE2 = new RegExp(
  '(?:\\+?55\\s?)?(?:\\(?\\d{2}\\)?[-\\s]?)?\\d{4,5}[-\\s]?\\d{4}',
  'g'
);

/*
PROPRIEDADES
Uma regexp possui propriedades com 
informações sobre as flags e o conteúdo da mesma.
*/

const regexpProp = /\w+/gi;

console.log(
  regexpProp.flags,
  regexpProp.global,
  regexpProp.ignoreCase,
  regexpProp.multiline,
  regexpProp.source
);

/*
REGEXP.TEST()
O método test() verifica se existe ou não uma 
ocorrência da busca. 
Se existir ele retorna true. 
A próxima vez que chamarmos o mesmo, 
ele irá começar do index em que parou no último true.
*/

const regexpTeste = /Java/g;
const fraseTeste = 'JavaScript e Java';

regexpTeste.lastIndex; // 0;
regexpTeste.test(fraseTeste); // true;
regexpTeste.lastIndex; // 4;
regexpTeste.test(fraseTeste); // true;
regexpTeste.lastIndex; // 17;
regexpTeste.test(fraseTeste); // false;
regexpTeste.lastIndex; // 0;
regexpTeste.test(fraseTeste); // true (reiniciada);
regexpTeste.lastIndex; // 4;

/*
TEST() EM LOOP
Podemos utilizar o while loop, 
para mostrar enquanto a condição for verdadeira. 

Assim retornamos a quantidade de match's.
*/

const regexpWhile = /Script/g;
const fraseWhile = 'JavaScript, TypeScript e CoffeScript';

let i = 1;

while (regexpWhile.test(fraseWhile)) {
  console.log(i++, regexpWhile.lastIndex);
}

/*
REGEXP.EXEC()
O exec() diferente do test(), 
irá retornar uma Array com mais informações 
do que apenas um valor booleano.
*/

const regexpExec = /\w{2,}/g;
const fraseExec = 'JavaScript, TypeScript e CoffeScript';

console.log(regexpExec.exec(fraseExec));
console.log(regexpExec.exec(fraseExec));
console.log(regexpExec.exec(fraseExec));
console.log(regexpExec.exec(fraseExec));
console.log(regexpExec.exec(fraseExec));

/*
LOOP COM EXEC()
Podemos fazer um loop com exec e parar 
o mesmo no momento que encontre o null.
*/

let regexpExecLet;

while ((regexpExecLet = regexpExec.exec(fraseExec)) !== null) {
  console.log(regexpExecLet[0]);
}

/*
STR.MATCH()
O match() é um método de strings que pode 
receber como argumento uma Regexp. 

Existe uma diferença de resultado quando 
utilizamos a flag g ou não.
*/
const regexpComG = /\w{2,}/g;
const regexpSemG = /\w{2,}/;
const fraseMatch = 'JavaScript, TypeScript e CoffeeScript';

console.log(fraseMatch.match(regexpComG));
console.log(fraseMatch.match(regexpSemG));

/*
STR.SPLIT()
O split serve para distribuirmos uma string em uma array, 
quebrando a string no argumento que for passado. 

Este método irá remover o match da array final.
*/
const fraseSplit = 'JavaScript, TypeScript, CoffeeScript';

console.log(fraseSplit.split(', '));
console.log(fraseSplit.split(/Script/g));

const tags = `
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
`;

console.log(tags.split(/(?<=<\/?)\w+/g).join('div'));

/*
STR.REPLACE()
O método replace() é o mais interessante 
por permitir a utilização de funções de callback 
para cada match que ele der com a Regexp.
*/

const Tags = `
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
`;

console.log(Tags.replace(/(?<=<\/?)\w+/g, 'div'));

/*
CAPTURA
É possível fazer uma referência ao grupo 
de captura dentro do argumento do replace. 
Então podemos utilizar $&, $1 e mais.
*/

const TagsCap = `
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
`;

console.log(TagsCap.replace(/<li/g, '$& class="ativo"'));

/*
GRUPOS DE CAPTURA
É possível definirmos quantos grupos de captura quisermos.
*/

const emails = `
  empresa@email.com
  contato@email.com
  suporte@email.com
`;

console.log(emails.replace(/(\w+@)[\w.]+/g, '$1gmail.com'));

/*
CALLBACK
Para substituições mais complexas, 
podemos utilizar um callback como segundo argumento do replace. 
O valor do return será o que irá substituir cada match.
*/
const regexpCall = /(\w+)(@[\w]+)/g;
const emailsCall = `joao@homail.com.br
marta@ggmail.com.br
bruna@oulook.com.br`;

emailsCall.replace(regexpCall, function (...args) {
  console.log(args);

  if (args[2] === '@homail') {
    return `${args[1]}@hotmail`;
  } else if (args[2] === '@ggmail') {
    return `${args[1]}@gmail`;
  } else if (args[2] === '@oulook') {
    return `${args[1]}@outlook`;
  } else {
    return 'x';
  }
});
