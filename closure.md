## Closure

Closure is about maintaining state inside of a function. **Read about Lexical scoping**.

```Javascript
var addTo = function(passed){
  var inner = 2;
  return passed + inner
}
addTo(3);
```

A simple example of closure.

```Javascript
var passed = 3;

var addTo = function(){
  var inner = 2;
  return passed + inner;
}
```

```Javascript
var addTo = function(passed){
	var add = function(inner){
  	return passed + inner;
  };
  return add;
};

var addThree = new addTo(3);
var addFour = new addTo(4);

//console.dir(addThree);
//console.dir(addFour);

console.log(addThree(1));
console.log(addFour(1));
```

*console.dir to look at closure*
