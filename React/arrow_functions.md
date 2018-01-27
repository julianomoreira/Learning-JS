# (Fat) Arrow Functions

Example of fat arrow functions

### Non-fat arrow anonymous Function

```
var x = function(a){
  return a;
}
console.log(x('hello'));

```

### Fat Arrow Function

Passing parameters

```
var x = a => a;
console.log(x('hello'));

```

Not passing parameters

```
var x = () => {
      alert('hello yo!')
};
x();

```
