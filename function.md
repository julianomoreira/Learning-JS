## Function

#### Anatomy of a function

![Function Anatony](https://s3.amazonaws.com/media-p.slid.es/uploads/biancagandolfo/images/687987/Screen_Shot_2014-10-02_at_5.25.11_PM.png)

```
var nameImprover = function(name, adj){
  return 'Col ' + name + ' adj ' + 'Sir';
}
nameImprover('juliano','cute');
```

#### Arguments

Arguments are the data you pass into the method's parameters when the method is called (calltime).

#### Parameters

A parameter is a variable in a method definition.

#### Return vs Side effects

If you don't have `return` in your statement, it's going to return undefined so everything else that is not *returning* anything is a side effect. For example: appending an element to DOM, etc.

#### Arguments Keyword

The arguments keyword returns an array of number and it has the length property which you can loop through. However, arguments keyword doesn't work with array-like methods (.slice, etc).

```
var add = function(a,b){
    var results = 0;
    for (var i =0; i < arguments.length; i++) {
        results += arguments[i];
    }
    return results;
}
```

```
var add = function(a,b){
  return a + b + arguments[2];
}
add(4,3,4); //11
```

```
var add = function(a,b){
  return a + b + arguments[2];
}
add(4,3,4); //11
```

#### Array-like object

```
var add = function(a,b){
  arguments.slice(0,1);
  return a + b;
}
add(3,10,4);
```

#### Functions are objects

```
var add = function(a,b){
  return a + b;
}
add.example = 'something';
```
