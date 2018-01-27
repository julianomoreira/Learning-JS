# Props and PropTypes

# Props

Props are read-only.

In a **functional-based component** props are an argument, whereas in a **class-based component** props are available anywhere.

`this.props` in a class-based Component

`props.videos` in a funcional component (passed in as an argument)

## PropTypes

`propTypes` are used for typechecking purposes to make sure the `data` received is valid.

To run typechecking on the props for a component, you can assign the special propTypes property:

```
import PropTypes from 'prop-types';

class Greeting extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

Greeting.propTypes = {
  name: PropTypes.string
};
```

PropTypes exports a range of validators that can be used to make sure the data you receive is valid. In this example, we’re using PropTypes.string. When an invalid value is provided for a prop, a warning will be shown in the JavaScript console. For performance reasons, propTypes is only checked in development mode.
