# HOC Pattern

Los High Order Components son funciones que reciben un componente como parámetro y devuelven un componente.

Es un patrón que nos permite reutilizar código y así podemos inyectar funcionalidad, estilos o cualquier otra cosa a un componente de forma sencilla.

Con la llegada de los hooks, los HOCs se han vuelto menos populares, pero todavía se usan en algunos casos.

```jsx
function withStyles(Component) {
  return props => {
    const style = { padding: '0.2rem', margin: '1rem' }
    return <Component style={style} {...props} />
  }
}

const Button = () = <button>Click me!</button>
const Text = () => <p>Hello World!</p>

const StyledButton = withStyles(Button)
const StyledText = withStyles(Text)
```

### Fuentes

- [HOC Pattern](https://www.patterns.dev/react/hoc-pattern/)
- [¿Qué son los High Order Components (HOC)?](https://www.reactjs.wiki/que-son-los-high-order-components-hoc#content)