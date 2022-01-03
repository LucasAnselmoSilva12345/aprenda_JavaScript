/*
SUBCLASSES
É possível criarmos uma subclasse, 
esta irá ter acesso aos métodos da classe à 
qual ela estendeu através do seu protótipo.
*/
class Veiculo {
  constructor(rodas) {
    this.rodas = rodas;
  }
  acelerar() {
    console.log('Acelerou');
  }
}

class Moto extends Veiculo {
  empinar() {
    console.log('Empinou com ' + this.rodas + ' rodas');
  }
}

const honda = new Moto(2); // rodas
honda.empinar();

const civic = new Veiculo(4);
civic.acelerar();
//civic.empinar(); // error

/*
MÉTODOS
Podemos escrever por cima de um método herdado.
*/
class Automovel {
  constructor(rodas) {
    this.rodas = rodas;
  }
  acelerar() {
    console.log('Acelerar');
  }
}

class Caminhao extends Automovel {
  acelerar() {
    console.log('Acelerar muito');
  }
}

const mercedez = new Caminhao(8);
mercedez.acelerar();

/*
SUPER
É possível utilizar a palavra chave super para 
falarmos com a classe que pai e acessarmos os 
seus métodos e propriedades.
*/
class Carrinhos {
  constructor(rodas) {
    this.rodas = rodas;
  }
  acelerar() {
    console.log('Acelerou');
  }
}

class Onibus extends Carrinhos {
  acelerar() {
    super.acelerar();
    console.log('Demais');
  }
}
const busao = new Onibus(8);
busao.acelerar();

/*
SUPER E CONSTRUCTOR
Podemos utilizar o super para estendermos o método constructor.
*/

class VeiculoNovo {
  constructor(rodas, combustivel) {
    this.rodas = rodas;
    this.combustivel = combustivel;
  }
}

class Carro extends VeiculoNovo {
  constructor(rodas, combustivel, capacete) {
    super(rodas, combustivel);
    this.capacete = capacete;
  }
}

const cruze = new Carro(4, 'Gasolina', false);
