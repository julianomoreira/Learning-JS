# React

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

```
class SearchBar extends Component {
  render() {
    return <input />
  }
}
```
