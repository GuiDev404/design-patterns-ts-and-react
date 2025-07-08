interface Arma {
  usar: ()=> void
}

class Paladin {
  atacar(arma: Arma){
    arma.usar()
  }
}

class Espada {
  cortar(){
    console.log('Cortando con espada!');
  }
}

class AdaptadorEspada implements Arma {
  espada: Espada
  constructor(espada: Espada){
    this.espada = espada
  }

  usar(): void {
    this.espada.cortar()
  };

}

class Mazo {
  aplastar(){
    console.log('Aplastando con mazo!');
  }
}

class AdaptadorMazo implements Arma {
  mazo: Mazo
  constructor(mazo: Mazo){
    this.mazo = mazo
  }

  usar(): void {
    this.mazo.aplastar()
  };

}

const paladin = new Paladin()

const espada = new Espada()
const adapterEspada = new AdaptadorEspada(espada)

paladin.atacar(adapterEspada)

const mazo = new Mazo()
const adapterMazo = new AdaptadorMazo(mazo)
paladin.atacar(adapterMazo)