## Scope

Scope won't be created until a function is executed. For example:

```
var func = function(){
  var local = true;
}
func();
```
```
var x = 'global'; // Global Scope
```

```
function encapsulate(){
  z = 'global here too';
  window.y = 'also global';
}
```
### Parent vs Child Scope

Parent can't reach into the child cope, but child can reach into parent scope.

```
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

### Precedence

```
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

```
var inBlock = false;
for (var i = 0; i < 5; i++){
  var inBlock = true;
};
if(inBlock){
  console.log('Is there block scope? ' + !inBlock);
}
```
