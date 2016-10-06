## Closures

A simple example of closure.

```Javascript
var passed = 3;

var addTo = function(){
  var inner = 2;
  return passed + inner;
}
```