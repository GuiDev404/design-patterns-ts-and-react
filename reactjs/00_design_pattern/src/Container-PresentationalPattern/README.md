# Container/Presentational Pattern

En React, una forma de aplicar la separación de preocupaciones/intereses es mediante el uso del patrón Contenedor/Presentación. Con este patrón, podemos separar la vista de la lógica de la aplicación.

1. **Componentes de presentación**: Componentes que se preocupan por cómo se muestran los datos al usuario. En este ejemplo, esa es la representación de la lista de imágenes de perros.

Los componentes de presentación **suelen ser sin estado**, no contienen su propio estado de React, a menos que necesiten un estado para fines de interfaz de usuario. Los datos que reciben, no se ven alterados por los propios componentes de presentación

2. **Componentes del contenedor**: componentes que se preocupan por los datos que se muestran al usuario. En este ejemplo, obtener las imágenes del perro.

### Hooks como alternativa
Una alternative, pero que mantiene separado la vista (componente presentacional) y los datos es usando un hooks
Simplemente usamos los datos devueltos por el hooks, sin modificarlos dentro del componente.
Esto no seria en si el patron de ya que no existe la separacion de componentes, leer cons

```tsx
export default function DogImages() { // NO RECIBE MAS LAS IMAGENES POR PROPS
  const { dogs, loading } = useDogs(); // USA UN HOOK PARA OBTENER LOS DATOS

  return dogs.map((dog, i) => (
    <img key={i} src={dog} className='w-full h-[250px] empty:bg-gray-200 object-cover' alt='Dog' />
  ));
}
```

Pros
There are many benefits to using the Container/Presentational pattern.

The Container/Presentational pattern encourages the separation of concerns. Presentational components can be pure functions which are responsible for the UI, whereas container components are responsible for the state and data of the application. This makes it easy to enforce the separation of concerns.

Presentational components are easily made reusable, as they simply display data without altering this data. We can reuse the presentational components throughout our application for different purposes.

Since presentational components don’t alter the application logic, the appearance of presentational components can easily be altered by someone without knowledge of the codebase, for example a designer. If the presentational component was reused in many parts of the application, the change can be consistent throughout the app.

Testing presentational components is easy, as they are usually pure functions. We know what the components will render based on which data we pass, without having to mock a data store.

Cons
The Container/Presentational pattern makes it easy to separate application logic from rendering logic. However, Hooks make it possible to achieve the same result without having to use the Container/Presentational pattern, and without having to rewrite a stateless functional component into a class component.Note that today, we don’t need to create class components to use state anymore.

Although we can still use the Container/Presentational pattern, even with React Hooks, this pattern can easily be an overkill in smaller sized application.

