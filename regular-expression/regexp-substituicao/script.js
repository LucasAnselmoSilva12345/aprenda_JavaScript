/*
REFERÊNCIA DA SELEÇÃO
É possível utilizarmos o $& durante o 
momento da substituição para fazermos uma referência à seleção.
*/

const regexpSubs = /Java/g;

const texto = 'PHP e Java são linguagens diferentes'.replace(
  regexpSubs,
  '$&Script'
);
console.log(texto);

// $& será igual a java

/*
GRUPO DE CAPTURA
É possível definirmos diferentes grupos de captura, 
que poderão ser referenciados durante a substituição. 

Basta envolvermos um grupo entre () parênteses. 
A referência se cada grupo será feita com $n, 
sendo o primeiro $1.
*/

// Procura: sequencia alfanumerica, seguida
// de @, seguida de alfanumerica ou .

const regexpCap = /(\w+)@[\w.]+/g;

const textoCap = 'lucas@yahoo.com'.replace(regexpCap, '$1@gmail.com');
console.log(textoCap);

/*
MAIS DE UM GRUPO
Podemos definir quantos grupos de captura quisermos.
*/

// Procura: sequencia alfanumerica, seguida
// de , seguido espaço de sequencia alfanumerica

const regexpGroup = /(\w+),\s(\w+)/g;

const textoGroup = 'Lucas, Anselmo'.replace(regexpGroup, '$2 $1');

console.log(textoGroup);

/*
MAIS DO QUE CAPTURA APENAS
Um grupo também serve para agruparmos uma sequência 
de caracteres que queremos em repetição.
*/

// Procura: qualquer sequência de ta

const regexpPlusCap = /(ta)+/gi;

const textPlusCap = 'Tatata, tata, ta'.replace(regexpPlusCap, 'pá');
console.log(textPlusCap);

/*
IGNORAR CAPTURA
Utilize o (?:) para ignorar a captura.
*/

const regexpCap2 = /(?:ta)+/gi;

const textCap2 = 'Tatata tata ta'.replace(regexpCap2, 'Pá');
console.log(textCap2);

/*
POSITIVE LOOKAHEAD
Faz a seleção dos itens que possuírem o padrão 
dentro de (?=) à sua frente. 

Apesar de utilizar () parênteses o positive 
lookahead não captura grupo.
*/

// Procura: dígitos em sequência, que
// possuírem px, sem selecionar o px.

const regexpLook = /\d(?=px)/g;

const textLook = '2em, 4px, 5%, 2px, 1px'.replace(regexpLook, 'X');
console.log(textLook);

/*
NEGATIVE LOOKAHEAD
Faz a seleção dos itens não possuírem o 
padrão dentro de (?!) à sua frente.
*/

/*
POSITIVE LOOKBEHIND
Faz a seleção dos itens que possuírem o p
adrão dentro de (?<=) atrás dos mesmos.
*/

// Procura: dígitos que possuírem R$
// na frente dos mesmos

const regexpLookBe = /(?<=R\$)[\d]+/g;

const textLookBe = 'R$99, 100, 200, R$20'.replace(regexpLookBe, 'X');

console.log(textLookBe);
