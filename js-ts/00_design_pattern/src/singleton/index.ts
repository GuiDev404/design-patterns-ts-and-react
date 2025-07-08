import Singleton from './Singleton'
import Excalibur from './Excalibur'

const s1 = Singleton.getInstance()
const s2 = Singleton.getInstance()

console.log(s1 === s2);

const espadaReyArturo = Excalibur.getInstance()
const espadaPaladin = Excalibur.getInstance()

espadaReyArturo.portarEspada()
espadaPaladin.portarEspada()

console.log(espadaReyArturo === espadaPaladin);
