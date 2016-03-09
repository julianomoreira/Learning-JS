# Javascript Object

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

Please note below that you can also set property names as strings and the only case where you can't set property names as string is one of the following:

**Construction Notation**

```
function Person(name, age) {
    this.name = name;
    this.age = age;
}
var jujuba = new Person("Juliano", 33);
```

- property name is a reserved keyword
- contains spaces or special characters (anything other than numbers,letters, the dollar sign ($) or the underscore (_ character)
- starts with a number



```
var cake = {
    'poweder': true,
    'flavor': 'chocolate',
    'mixture':'vanilla'
}

```

**Dot Notation**

The difference between dot notation and bracket notation is when accessing a property, in that dot notation can't be used to access variables, numbers, expressions, weird characters, quotations, etc. Dot notation is safe to use access strings.

```
var juju = new Object();
juju.living = true;
juju.gender = "male";
juju.city = "Petrolina, PE";
```

**Bracket Notation**

Bracket notation can be used to access numbers, variables, weird things, etc.

```
var juju = new Object();
juju["living"] = true;
juju["gender"] = "male";
juju["city"] = "Petrolina, PE";
```

**Object Literal Notation**

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
