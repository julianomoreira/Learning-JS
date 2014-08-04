LearningJavascript
==================

My little notebook as I learn Javascript


### Javascript Object

Dot notation is the most common method for getting, setting, and updating an object's properties.

Bracket notation can be very handy when you need to access a property key and what you have to work with is a variable that contains a string value representing the property name. Below, I demonstrate the advantage of bracket notion over dot notation by using it to access the property foobar. I do this using two variables that, when joined, produce the string version of the property key contained in foobarObject.

```
var foobarObject = {foobar: 'Foobar is code for no code'};
var string1 = 'foo';
var string2 = 'bar';
console.log(foobarObject[string1 + string2]);
```

### Javascript Prototype

Using *hasOwnProperty* method will verify if a property is not from the prototype chain.

The *in* operator is used to check if an object contains a given property. You should be aware that the *in* operator not only checks for a property contained in a referenced object but also for any properties that objects inherits via the *protoype* chain.
