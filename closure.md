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

```Javascript
var closureAlert = function() {
  var x = "Help! I'm a variable stuck in a closure."
  var alerter = function() {
    console.log(x);
  }
  setTimeout(alerter, 1000);
  console.log('will still run after');
}
```

```Javascript
var closureAlert = function() {
  var x = 0;
  var alerter = function() {
    console.log(++x);
  }  
  return alerter;
}
var funcStorer = closureAlert();
```
