// Retorne um número aleatório
// entre 1050 e 2000

const aleatorio = Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050;

console.log(aleatorio);

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';

const arrayNumeros = numeros.split(', ');
const numeroMaximo = Math.max(...arrayNumeros);
console.log(numeroMaximo);

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222', 'R$ 230  ', 'r$  200'];

function limparPreco(precos_lista) {
  precos_lista = +precos_lista
    .toUpperCase()
    .replace('R$', '')
    .trim()
    .replace(',', '.');
  precos_lista = +precos_lista.toFixed(2);
  return precos_lista;
}

let soma = 0;
listaPrecos.forEach((item) => {
  soma += limparPreco(item);
});
console.log(soma);
