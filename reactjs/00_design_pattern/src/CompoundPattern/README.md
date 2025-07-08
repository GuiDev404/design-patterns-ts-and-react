
### Uso de  `React.Children.map` y `React.cloneElement`


```jsx
// Ejemplo usando un mapeo de los children hijos del componente
export function FlyOut(props) {
  const [open, toggle] = React.useState(false);

  return (
    <div>
      {React.Children.map(children, child => {
        // Validar que sea un elemento React válido
        if (!React.isValidElement(child)) return child;

        // Pasar las props necesarias a los hijos directos
        return React.cloneElement(child, { open, toggle });
      })}
    </div>
  );
}


export default function FlyoutMenu() {
  return (
    <FlyOut>
      <FlyOut.Toggle />
      <FlyOut.List>
        <FlyOut.Item>Edit</FlyOut.Item>
        <FlyOut.Item>Delete</FlyOut.Item>
      </FlyOut.List>
    </FlyOut>
  );
}

```

### Contras de usar `React.Children.map` y `React.cloneElement`

Cuando usas `React.Children.map` para pasar valores (como props), **existe una limitación importante**:
**Sólo los hijos directos** del componente padre tendrán acceso a las props como `open` y `toggle`.

#### ¿Qué significa esto?

Mira este ejemplo:

```jsx
<FlyOut>
  {/* ❌ Esto NO funcionará porque los hijos están envueltos en un div */}
  <div>
    <FlyOut.Toggle />
    <FlyOut.List>
      <FlyOut.Item>Edit</FlyOut.Item>
      <FlyOut.Item>Delete</FlyOut.Item>
    </FlyOut.List>
  </div>
</FlyOut>
```

Este código **no funcionará correctamente**, porque los componentes `FlyOut.Toggle` y `FlyOut.List` **no son hijos directos** de `FlyOut`, sino que están envueltos dentro de un `<div>`. Por esa razón, **no reciben las props `open` y `toggle`** que `FlyOut` está tratando de pasar usando `React.Children.map`.

---

### Sobre `React.cloneElement`

Cuando usamos `React.cloneElement`, estamos copiando un elemento de React y agregando o sobrescribiendo sus props. Esto se hace mediante una **fusión superficial (shallow merge)**.

#### Problema de colisión de nombres

Como la mezcla de props es superficial, si el componente original ya tenía una prop con el mismo nombre que la que le estás pasando, **se sobrescribirá**.

Por ejemplo:

```jsx
React.cloneElement(child, { toggle: true });
```

Si `child` ya tenía una prop llamada `toggle`, su valor será reemplazado por `true`, lo que puede causar errores difíciles de rastrear si no lo haces intencionalmente.

---

### En resumen:

* Si usas `React.Children.map`, los componentes deben ser hijos directos para recibir las props correctamente.
* Si usas `React.cloneElement`, ten cuidado con sobrescribir props sin querer, porque el merge de props es superficial.

---

- [¿Qué es el Compound Components Pattern?](https://www.reactjs.wiki/que-es-el-compound-components-pattern)
- [React Hooks: Compound Components](https://kentcdodds.com/blog/compound-components-with-react-hooks)