/*
REGULAR EXPRESSION
Regexp ou Regex são expressões utilizadas para 
realizarmos buscas / substituições de padrões em strings. 
Os padrões devem ser colocados entre //. 
Geralmente vamos utilizá-las nos 
métodos .replace() e .split().
*/
const padraoRegexp = /a/;

const texto = 'JavaScript';
const novoTexto = texto.replace(padraoRegexp, 'b');
console.log(novoTexto);

/*
LITERAL
Utilizar um caracter literal 
irá realizar uma busca específica deste caracter.
*/
// procura: J seguido de a, v e a
const regexp = /Java/;
const newText = 'JavaScript'.replace(regexp, 'Type');
console.log(newText);

/*
FLAG: G
As flags irão modificar como a expressão é interpretada. 
Uma das mais utilizadas é a g, 
que significa global, 
ou seja, retorne todos os resultados 
que estiverem dentro do padrão e não apenas o primeiro. 
A flag deve ser colocada no final da expressão.
*/
const regexpG = /a/g;

const newTextG = 'JavaScript'.replace(regexpG, 'i');
console.log(newTextG);

/*
FLAG: I
Com o i informamos que devem ser 
ignoradas as diferenças entre maiúsculas e minúsculas. 
Isso significa que /a/ irá buscar por a e A.
*/
// Procura: Todo PE, Pe, pE, pe

const rexepPe = /Pe/gi;

const newTextPe = 'Perdeu perdido'.replace(rexepPe, 'Ba');
console.log(newTextPe);

/*
CHARACTER CLASS
Se colocarmos os caracteres entre colchetes, 
estamos definindo uma 
classe. /[ab]/ irá procurar por a ou por b.
*/
// Procura: Todos a, A, i, I
const rexepAI = /[ai]/gi;

const newTextAi = 'JavaScript'.replace(rexepAI, 'u');
console.log(newTextAi);

/*
CHARACTER CLASS E ESPECIAIS
Podemos utilizar caracteres que não 
são alfanuméricos dentro da classe. 

Mas fique atento, pois existem diversos 
casos especiais para os mesmos.
*/
// Procura: - ou .
const rexepPontos = /[-.]/g;

const newTextPontos = '111.222-333-44'.replace(rexepPontos, '');
console.log(newTextPontos);

/*
UM OU OUTRO
Combine caracteres literais com uma 
classe para buscarmos variações: 
Ju[nl]ho busca Julho ou Junho.
*/

// Procura: B, seguido de r, a
// Seguido de s ou z, seguido de i, l

const rexepBrasil = /Bra[sz]il/g;

const newTextBrasil = 'Brasil é com z: Brazil'.replace(rexepBrasil, 'Prazer');
console.log(newTextBrasil);

/*
DE A À Z
O traço - dentro de [] pode servir para definirmos um alcance. 
[A-Z] irá buscar os caracteres de A à Z. 
[0-9] busca de 0 à 9. 

A tabela UNICODE é utilizada como 
referência para definir os caracteres dentro do alcance.
*/

// Busca por itens de a à z
const rexep_az = /[a-z]/g;

const text_Regexp_az = 'JavaScript é a linguagem'.replace(rexep_az, '0');
console.log(text_Regexp_az);

// Busca por itens de a à z e A à Z
const rexep_AZ = /[a-zA-Z]/g;

const text_Regexp_AZ = 'JavaScript é a linguagem'.replace(rexep_AZ, '1');
console.log(text_Regexp_AZ);

// Busca por numeros de 0 à 9
const rexepNumeros = /[0-9]/g;

const textRegexpNumber = '123.333.444-85'.replace(rexepNumeros, 'X');
console.log(textRegexpNumber);

/*
NEGAR
Utilizando o acento circunflexo podemos negar caracteres. 
Ou seja, pegue tudo que não seja [^a]
*/

// Procura: tudo que não estiver entre a e z

const rexep_a_z = /[^a-z]/g;

const newTexta_z = 'Brasil é com z: Brazil'.replace(rexep_a_z, ' ');
console.log(newTexta_z);

/*
PONTO
O ponto . irá selecionar qualquer caracter, 
menos quebras de linha.
*/

// Procura: todos os caracteres menos quebra de linha

const rexepPonto = /./g;

const textoPonto = 'JavaScript é a linguagem'.replace(rexepPonto, '0');
console.log(textoPonto);

/*
ESCAPAR ESPECIAIS
Caracteres especiais como o ponto ., 
podem ser escapados utilizando a barra \, 
assim este não terá mais a sua função 
especial e será tratado como literal. 

Lista de caracteres especiais: 
+*?^$\.[]{}()|/
*/

// Procura todos os pontos
const rexepEscapePonto = /\./g;

const newTextEscapePonto = '999.222.222.11'.replace(rexepEscapePonto, '-');
console.log(newTextEscapePonto);

/*
WORD
O \w irá selecionar qualquer caracter alfanumérico 
e o underline. 

É a mesma coisa que [A-Za-z0-9_].
*/

// Procura: todos os alfanuméricos

const rexepw = /\w/g;

const newTextw = 'Guarda-chuva R$ 23,00.'.replace(rexepw, '-');
console.log(newTextw);

/*
NOT WORD
O \W irá selecionar tudo o que não for caracter 
alfanumérico e o underline. 

É a mesma coisa que [^A-Za-z0-9_].
*/
const rexepW = /\W/g;

const newTextW = 'Guarda-chuva R$ 23,00.'.replace(rexepW, '-');
console.log(newTextW);

/*
DIGIT
O \d irá selecionar qualquer dígito. É a mesma coisa que [0-9].
*/

//Procura todos os digitos

const rexepDigitos = /\d/g;

const newTextDigitos = '+55 (21) 2222-2222'.replace(rexepDigitos, 'X');
console.log(newTextDigitos);

/*
NOT DIGIT
O \D irá selecionar tudo que não for dígito. 
É a mesma coisa que [^0-9].
*/

/*
WHITESPACE
O \s irá selecionar qualquer espaço em branco, 
isso inclui espaços, tabs, quebra de linhas.
*/

// Procura: espaços em branco
const rexepWhiteSpace = /\s/g;

const newTextWhiteSpace = '+55 (21) 2222-  2222  '.replace(rexepWhiteSpace, '');
console.log(newTextWhiteSpace);

/*
NOT WHITESPACE
O \S irá selecionar qualquer caracter 
que não for espaço em branco.
*/

/*
QUANTIFICADOR
É possível selecionar caracteres seguidos, 
como /bbb/g irá selecionar apenas bbb. 

Com as chaves podemos indicar a 
repetição /b{3}/g. 

Agora ele está fazendo uma seleção completa 
e não caracter por caracter.
*/

// Procura: 4 a's seguidos

const rexepQuantificador = /a{4}/g;

const newTextQuanti = 'Vaaaai ali por favor.'.replace(rexepQuantificador, 'a');
console.log(newTextQuanti);

/*
QUANTIFICADOR MIN E MAX
Podemos informar o min e max do quantificador /a{2,4}/ 
vai selecionar quando aparecer a duas vezes ou até 4 vezes. 

/a{2,}/ irá selecionar quando se repetir duas ou mais vezes.
*/

// Procura digitos seguidos de 2 à 3

const rexepDigitos1 = /\d{2,3}/g;

const newTextDigitos1 = '222.333.222.42'.replace(rexepDigitos1, 'X');
console.log(newTextDigitos1);

// Procura: letras seguidos com 1 caracter ou mais
const regexpLetras = /\w{1,}/g;

const newTextLetras = 'A melhor linguagem é JavaScript'.replace(
  regexpLetras,
  'X'
);
console.log(newTextLetras);

/*
MAIS +
O sinal de + significa que devemos selecionar 
quando existir pelo menos uma ou mais ocorrências.
*/

// Procura: dígitos em ocorrência de um ou mais
const rexepMais = /\d+/g;

const textRexepMais = '222.333.222.42'.replace(rexepMais, 'X');
console.log(textRexepMais);

// Procura: Começa com d, seguido por uma ou mais letras

const regezpletras = /d\w+/g;

const textletras = 'Dígitos, dados, desenhos, Dito, d'.replace(
  regezpletras,
  'X'
);
console.log(textletras);

/*
ASTERISCO *
O sinal * significa que devemos selecionar 
quando existir 0 ou mais ocorrências.
*/

const regexpAste = /d\w+/g;

const textAste = 'Dígitos, dados, desenhos, Dito, d'.replace(regexpAste, 'X');
console.log(textAste);

/*
OPCIONAL ?
O sinal ? significa que o caracter 
é opcional, pode ou não existir.
*/

const rexepOpci = /regexp?/g;

const textRegexpOpci = 'Qual é o certo, regexp ou regex?'.replace(
  rexepOpci,
  'Regular Expression'
);
console.log(textRegexpOpci);

/*
ALTERNADO |
O sinal | irá selecionar um ou outro. java|php
*/

const regexpAlter = /java|php/gi;

const textAlter = 'PHP e Java são linguagens diferentes'.replace(
  regexpAlter,
  'X'
);
console.log(textAlter);

/*
WORD BOUNDARY \B
O sinal \b irá indicar que pretendemos fazer 
uma seleção que deve ter início e
 fim de não caracteres \w.
*/

// Procura: java (case insensitive)
const regexpWordB = /java/gi;
'Java não é JavaScript.'.replace(regexpWordB, 'X');
// X não é XScript.

// Procura: java (case insensitive)
const regexpBoundary = /\bjava\b/gi;
'Java não é JavaScript.'.replace(regexpBoundary, 'X');
// X não é JavaScript.

// // Procura: Dígitos em sequência, que estejam isolados
// const regexpDigito = /\b\d+\b/gi;
// 'O Restaurante25 na Rua 3, custa R$ 32,00'.replace(regexDigito, 'X');
// // O Restaurante25 na Rua X, custa R$ X,X

// '11_22 33-44 55é66 77e88'.replace(regexpDigito, 'X');
// // 11_22 X-X XéX 77e88

/*
NOT WORD BOUNDARY \B
É o contrário do \b.
*/

/*
ANCHOR BEGINNING
Com o ^ é possível informar que a busca deve ser 
iniciada no início da linha.
*/

// Procura: sequência de alfanuméricos
// no início da linha.

const rexepAnchor = /^\w+/g;

const email = 'lucas@gmail.com';
const contato = 'contato@mail.com';

const replace = email.replace(rexepAnchor, 'X');
const replace2 = contato.replace(rexepAnchor, 'X');

console.log(replace);
console.log(replace2);

/*
ANCHOR END
Com o $ é possível informar que a busca deve ser 
iniciada no final da linha.
*/

// Procura: sequência de alfanuméricos
// no final da linha.

const rexepEnd = /\w+$/g;

const mail = 'lucas@gmail.com';

const replace3 = mail.replace(rexepEnd, 'X');
console.log(replace3);

/*
FLAG: M
Com a flag m de multiline, 
podemos informar que a busca de início ^ e final $ de 
linha devem ocorrer em todas as linhas disponíveis.
*/
// Procura: sequência de alfanuméricos
// no início da linha.
const regexpM = /^\w+/gm;

const contact = 'contato@origamid.com'.replace(regexpM, 'X');
console.log(contact);

/*
LINE FEED \N
O \n irá selecionar o final de uma linha, 
quando criamos uma nova.
*/
const rexepLine = /\n/g;

const textLine = `lucas@gmail.com\ncontact@mail.com`.replace(rexepLine, '---');
console.log(textLine);

/*
UNICODE \U
O \u irá selecionar o respectivo caracter unicode, 
de acordo com o código passado em \uXXXX. 
Ex: \u0040 seleciona o @.
*/

// Procura @ ou sinal de copyright

const regexpCod = /\u0040|\00A9/g;

const Contato = 'contato@gmail.com'.replace(regexpCod, '---');

console.log(Contato);
