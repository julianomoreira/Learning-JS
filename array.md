# Array

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
