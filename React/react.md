# React

React is pretty much the ability to write individual components or views. A component or view produces HTML.

Create component, then render component on the DOM.

JSX is a dialet transpiled on the page. It makes our code legible.

Every React component that is class-based must have a render function.

Each class component has its own state.

State is a plain JS object that is used to record and react to user events. Each class-based component has its own state object. Whenever a component state changes it re-renders and it forces all its children to re-render as well.

## Functional component

Functional component is literally a JS function and it passes a single props arguments with data and returns a React element. It has no states.

You need to import react in order for the component to work properly.

`import React from 'react';`

```
const SearchBar = () => {
  return <input />
};
```


## Class Component

You need to import react and react.component in order for the component to work properly.

`import React, { Component } from 'react';`

ES6 Class to create a component. Class component is aware of itself; it has states. Every React class-based component must have a render method.

State is a plain JS object that is used to record and react to user events. Each class-based component has a state object. Whenever the states chages, the component immediately re-renders.

```
class SearchBar extends Component {
  render() {
    return <input />
  }
}
```
### Worth Reading

- [Understanding array.map();](https://www.discovermeteor.com/blog/understanding-javascript-map/)

