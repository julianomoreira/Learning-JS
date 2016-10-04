Learning-JS
==================

My little notebook as I learn Javascript


### Javascript Prototype

Using *hasOwnProperty* method will verify if a property is not from the prototype chain.

The *in* operator is used to check if an object contains a given property. You should be aware that the *in* operator not only checks for a property contained in a referenced object but also for any properties that objects inherits via the *protoype* chain.

### Enumarate (loop over) an object's properties using *for in* loop

By using *for in* we can loop over all the properties in a given object. In the code below, we're going to loop over the object cody.

```
var cody = {age: 33, gender: 'male'}
for (var key in cody) {
    if (key.hasOwnProperty(key)) {
        console.log(key);
    }
}
```

The *for in* loop has one drawback, it access the properties of the object being looped as well as properties

### Host vs Native Objects
You should know that the environment in which Javascript is executed contain what are know as *host* objects. Host objects are not part of ECMAScript implementation but are available as objects during execution. For example, in a browser environment, *window* and *head* all its containing objects are known as host objects. Following our previous exercise, let's access the properties of the window object in a browser (host) environment.

```
for (x in window) {
    console.log(x);
}
```

The most famous hosted objects is the interface for working with HTML, also widly known as DOM or Document Object Model. Here it is how you can access the document's properties:

```
for (x in window.document){
    console.log(x);
}
```

One important thing to note here is that Javascript specification and host objects don't concern itself with each other. There's a dividing line between what Javascript provides and what Webkit, Mozilla, and many other host environment provide.

### Constructor

It's a function (method) that returns an object or creates an instance of an object.

```
function AnimalMaker(name) {
    return {
        speak: function(){
            console.log("My name is ", name);
        },
        name: name
    }
}
var myAnimal = AnimalMaker('Cheetah');
myAnimal.speak(); || myAnimal["speak"]();
// My name is Cheetah
```

### Notes on React

State: only gets used if a component has an internal value that changes w/o effecting the rest of the app. Aside from that, you want to use props. 

Super(): Executes the constructor of the parent class. (ES6)
