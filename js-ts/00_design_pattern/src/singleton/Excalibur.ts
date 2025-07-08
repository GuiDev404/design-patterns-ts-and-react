export default class Excalibur {
  private static instance: Excalibur | null = null
  private constructor(){}

  public static getInstance(): Excalibur {
    if (!Excalibur.instance){
      Excalibur.instance = new Excalibur()
      console.log('Se ha forjado la legendaria espada!');
    }

    return Excalibur.instance
  }

  public portarEspada(): void {
    console.log(`El elegido empuña la legendaria espada ${Excalibur.name}`);
  }
}