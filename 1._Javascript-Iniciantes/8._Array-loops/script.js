var videoGames = ['Switch', 'PS4', 'Xbox'];
console.log(videoGames[0]);
console.log(videoGames[1]);
console.log(videoGames[2]);

var ultimoItem = videoGames.pop() // mostra e exclui ultimo item do array
console.log(ultimoItem)
console.log(videoGames)

videoGames.push('Play2')
console.log(videoGames)

/* For Loop */
for (var numero = 0; numero < 10; numero++){
  console.log(numero)
}// retorna de 0 a 9 no console

/* While Loop */
var i = 0;
while (i < 10){
  console.log(i);
  i++;
} // retorna de 0 a 9 mais comum

/* Array + loops */
var games = ['PS2', 'Switch', 'Xbox', '3DS'];
for (var i = 0; i < games.length; i++){
  console.log(`----------${games[i]}--------`)
}

/* Break */
var games = ['PS2', 'Switch', 'Xbox', '3DS']
for (var i = 0; i < games.length; i++){
  console.log(games[i])
  if(games[i] === 'PS2'){
    break
  }
}

/* FOREach */
var frutas = ['banana', 'maca', 'pera', 'abacaxi']
frutas.forEach(function(i){
  console.log(`*${i}*`)
}) // o argumento i será atribuido dinamicamente

console.log('----------Exercício--------------')
/* EXERCÍCIO */

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var titulosBrasil = ['1959','1962','1970','1994','2002']

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

for (var i = 0; i < titulosBrasil.length; i++){
  console.log(`O Brasil ganhou a copa de ${titulosBrasil[i]}`)
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
for (var i = 0; i < frutas.length; i++){
  console.log(frutas[i])
  if(frutas[i] === 'Pera'){
    break
  }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância'];

var ultimaFruta = frutas[frutas.length -1]
console.log(`**${ultimaFruta}**`)
