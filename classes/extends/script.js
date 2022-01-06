/*
SUBCLASSES
É possível criarmos uma subclasse, 
esta irá ter acesso aos métodos da classe 
à qual ela estendeu através do seu protótipo.
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

const honda = new Moto(2);
honda.empinar();

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

class Onibus extends Automovel {
  acelerar() {
    console.log('Onibus Acelerou muito com suas ' + this.rodas + ' rodas');
  }
}

const mercedez = new Onibus(8);
mercedez.acelerar();

/*
SUPER
É possível utilizar a palavra chave super 
para falarmos com a classe que pai 
e acessarmos os seus métodos e propriedades.
*/

class Automeveis {
  constructor(rodas) {
    this.rodas = rodas || 4;
  }
  acelerar() {
    console.log('Acelerarrr');
  }
}

class Caminhao extends Automeveis {
  acelerar() {
    super.acelerar();
    console.log('Muitoooo');
  }
}

const Scannia = new Caminhao();
Scannia.acelerar();

/*
SUPER E CONSTRUCTOR
Podemos utilizar o super 
para estendermos o método constructor.
*/

class Veiculos {
  constructor(rodas, combustiveis) {
    this.rodas = rodas;
    this.combustiveis = combustiveis;
  }
}

class Car extends Veiculos {
  constructor(rodas, combustiveis, lugares) {
    super(rodas, combustiveis);
    this.lugares = lugares;
  }
}

const onix = new Car(4, 'Flex', '7');
