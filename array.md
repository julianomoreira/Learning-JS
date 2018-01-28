# Array

## Creating arrays

You can create arrays() in many differents ways; by using the constructor or using literal notation.

```
var contacts = new Array();
var contacts = [];
```

```
// create array with a few values
noiseArray = ['honk','burp','sneeze','fart'];
```

You can put objects into arrays() in many different ways as shown below:

```
contacts[0] = objectName;
contacts.push(objectName);
```

```
// adding with a function
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
## Review

- What are the different ways you can add properties and values to arrays?
  - Bracket notation `noiseArray[5] = 'honk honk';`
  - Arrays methods: `push()` `unshift()`
- Come up with two ways you can add an element to the end of an array, without knowing the exact length of the array.
  - `noiseArray.push('buh buh');`
