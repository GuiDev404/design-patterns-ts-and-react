# Repaso de POO

**Miembro de clase estatico:** Un miembro de clase estatico (variable, método, propiedad o evento) es aquel que *pertenece a la clase en sí, no a una instancia de la clase*. Esto significa que existe una única copia de ese miembro para toda la clase, y se puede acceder a él sin crear una instancia de la clase

**Clases abstractas:** Las clases abstractas son un concepto central en la programación orientada a objetos. Se definen como clases que no pueden ser instanciadas directamente, es decir, no se pueden crear objetos de ellas. En cambio, se utilizan como base para la creación de otras clases, las cuales implementarán los métodos abstractos que la clase base declara, pero no define

Estos miembros pueden ser abstractos (sin implementación) o concretos (con implementación). Las clases abstractas se usan para crear plantillas para otras clases, y obligan a las clases derivadas a implementar sus métodos abstractos

```ts
abstract class DecoradorPocion implements Pocion {
  protected pocion: Pocion;
  
  constructor (pocion: Pocion){
    this.pocion = pocion
  }

  abstract efecto(): string 
  abstract precio(): number 
} 

```

Aunque la clase es abstracta, **puede tener un constructor**.
- Este constructor será llamado desde las clases hijas cuando se cree una instancia.
- No necesita modificador como `public`, `private` o `protected`, porque:
  - Las clases abstractas **no se instancian directamente**.
  - El constructor **sí se hereda implícitamente**.
  - Las subclases lo pueden invocar con `super(...)`.

`implements vs extends`

En la programación orientada a objetos, extends se usa para la herencia de clases, mientras que implements se usa para la implementación de interfaces. La herencia permite que una clase (subclase) herede propiedades y métodos de otra clase (clase padre), mientras que la implementación de interfaces garantiza que una clase cumpla con un contrato definido por la interfaz

`protected`
En Programación Orientada a Objetos (POO), `protected` es un modificador de acceso que restringe la visibilidad de un miembro (variable, método o propiedad) a la clase en la que está definida y a sus clases hijas (subclases)
Esto significa que el miembro puede ser accedido desde la clase donde se define y desde cualquier subclase de esa clase, sin importar en qué paquete se encuentren. NO PUEDEN SER ACCEDIDOS DESDE UNA INSTANCIA (OSEA SON COMO PRIVATE PERO PARA CLASE BASE Y DERIVADAS) 