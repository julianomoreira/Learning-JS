Learning-JS
==================

My little notebook as I learn Javascript


## Array

You can create arrays() in many differents ways; by using the constructor or using literal notation.

```
var contacts = new Array();
var contacts = [];
```

You can put objects into arrays() in many different ways as shown below:

```
contacts[0] = objectName;
contacts.push(objectName);
```
```
function add(firstName, lastName, email, phoneNumber){
      contacts[contacts.length] = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber
    };
}
add("Liane","Silva","lili@gmail.com","508.123.4433");
```


## Javascript Object

Javascript's core — most often used and most fundamental — data type is the Object data type. The Object data type has five simple data types, or primitive data types, that are immutable, in other words, they can NOT change. THey are: Number, String, Boolean, Undefined, and Null.

**What is an object?**

Think of an object as a list in which it has list items or children. Each children has a property and a value. Here it is a very simple example:

```
var myFirstObject = {
    firstName: "Juliano",
    lastName: "Dasilva"
}
```

```
var ageGroup = {30: "Children", 100:"Very Old"};
console.log(ageGroup.30) // This will throw an error
// This is how you will access the value of the property 30, to get value "Children"
console.log(ageGroup["30"]); // Children

//It is best to avoid using numbers as property names.
```

**Reference data type and primitive data type**

One of the main differences between reference data type and primitive data types is reference data type’s value is stored as a reference, it is not stored directly on the variable, as a value, as the primitive data types are. For example:

```
// The primitive data type String is stored as a value
var person = "Kobe";  
var anotherPerson = person; // anotherPerson = the value of person
person = "Bryant"; // value of person changed

console.log(anotherPerson); // Kobe
console.log(person); // Bryant
```

```
var human = {
    name: 'Juju'
}
var anotherHuman = human;
human.name = 'Joao';
```

**Object data properties have atributes**

Each data property (object property that store data) has not only the name-value pair, but also 3 attributes (the three attributes are set to true but default):

1. Configurable Atribute: specifies whether the property can be deleted or changed.
2. Enumerable Attribute: specifies whether property can be retorned in for/in loop.
3. Writable Attribute: specifies whether the property can be changed.

###Creating objects####

Essentially, there's two ways for creating objects: Object literal (literal notation) or Object Constructor. Let's see both cases and advantages and disadvantages of each.

**Object Literals**

The most common and, indeed, the easiest way to create objects is with the object literal described here:

```
// This is an empty object initialized using the object literal notation
var myBooks = {};

// This is an object with 4 items, again using object literal
var mango = {
color: "yellow",
shape: "round",
sweetness: 8,

howSweetAmI: function () {
    console.log("Hmm Hmm Good");
 }
}

```

**Object Constructor**

The second most common way to create objects is with Object Constructor. A constructor is a function used to initialize new objects, and you use the *new*keyword to call the constructor.

```
var mango =  new Object ();
mango.color = "yellow";
mango.shape= "round";
mango.sweetness = 8;

mango.howSweetAmI = function () {
console.log("Hmm Hmm Good");
}

```

**Construction Notation**

```
function Person(name, age) {
    this.name = name;
    this.age = age;
}
var jujuba = new Person("Juliano", 33);
```


**Dot Notation**

```
var juju = new Object();
juju.living = true;
juju.gender = "male";
juju.city = "Petrolina, PE";
```

**Literal Notation**

```
var juju = {
    living: true,
    gender: 'male',
    city: 'Petrolina, PE'
}
```


Properties can be a name or a number, but if the property name is a number, it has to be accessed with the bracket notation.

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

