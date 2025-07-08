interface Pocion {
  efecto(): string
  precio(): number
}

class PocionBase implements Pocion {
  private alquimista: string;

  constructor(alquimista:string) {
    this.alquimista = alquimista
  }

  efecto(): string {
    return "electrolitos para el cuerpo";
  }

  precio(): number {
    return 10;
  }

  getAlquimista(): string {
    return this.alquimista
  }
}

abstract class DecoradorPocion implements Pocion {
  protected pocion: Pocion;
  
  constructor (pocion: Pocion){
    this.pocion = pocion
  }

  abstract efecto(): string 
  abstract precio(): number 
  
} 


class ConAumentoDeFuerza extends DecoradorPocion {

  efecto(): string {
    return `${this.pocion.efecto()} con aumento de fuerza!`;
  }

  precio(): number {
    return this.pocion.precio() + 20;
  }

} 

class ConAumentoDeVelocidad extends DecoradorPocion {

  efecto(): string {
    return `${this.pocion.efecto()} con aumento de velocidad!`;
  }

  precio(): number {
    return this.pocion.precio() + 15;
  }

} 

const pocion = new PocionBase("Merlin")
console.log(
  `${pocion.efecto()} - Precio: ${pocion.precio()} monedas - [Alquimista: ${pocion.getAlquimista()}]`
);

const pocionConFuerza = new ConAumentoDeFuerza(pocion);

console.log(
  `${pocionConFuerza.efecto()} - Precio: ${pocionConFuerza.precio()} monedas`
);

const pocionConVelocidad = new ConAumentoDeVelocidad(pocionConFuerza);
console.log(
  `${pocionConVelocidad.efecto()} - Precio: ${pocionConVelocidad.precio()} monedas`
);
