class Hero {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    switch (this.tipo) {
      case 'mago':
        ataque = 'usou magia';
        break;
      case 'guerreiro':
        ataque = 'usou espada';
        break;
      case 'monge':
        ataque = 'usou artes marciais';
        break;
      case 'ninja':
        ataque = 'usou shuriken';
        break;
      default:
        ataque = 'usou um ataque indefinido';
    }

    console.log(`o ${this.tipo} atacou usando ${ataque}`);
  }
}

// Exemplo de uso
const mago = new Hero('Merlin', 100, 'mago');
mago.atacar();

const guerreiro = new Hero('Aragorn', 35, 'guerreiro');
guerreiro.atacar();
