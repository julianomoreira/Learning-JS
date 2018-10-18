## Scope

Scope is a compiled time process. Scope won't be created until a function is executed. For example:

```Javascript
var func = function(){
  var local = true;
}
func();
```

```Javascript
var x = 'global'; // Global Scope
```

```Javascript
function encapsulate(){
  z = 'global here too';
  window.y = 'also global';
}
```
### Parent vs Child Scope

Parent can't reach into the child cope, but child can reach into parent scope.

```Javascript
var g = 'global';

function blender(fruit){
  var b = fruit;
  var y = 'yogurt';

  function bs(){
    var x = 'asdf';
    console.log(b + ' and ' + y + ' makes ' + b + ' swirl');
  }
  console.log(x); // error can't reach into child's scope
  bs();
}
```

### Precedence or shadowing

```Javascript
function go(){
  var l = 'local';
  var g = 'in here!';
  alert(g + ' inside go');
}
go();
alert(g + ' outside go ');
```

### block scope

Only a function block defines the area of private scope.

```Javascript
var inBlock = false;
for (var i = 0; i < 5; i++){
  var inBlock = true;
};
if(inBlock){
  console.log('Is there block scope? ' + !inBlock);
}
```

Scope manager looks for formal declarations (var, function) to add to scope. If there's a variable without var it skips and the variable gets created at runtime.

```javascript
var foo = "bar";
function bar() {
  var foo = "baz";
  function baz(foo) {
    foo = "bam";
    bam = "yay";
  }
  baz();
}
bam; // throws a reference error because bar() hasn't been executed.
bar();
foo;
baz();
```
