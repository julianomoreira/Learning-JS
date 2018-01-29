# Object in ES6

## Deconstructing Objects

```
const person = {
  first: 'Wes',
  last: 'Bos',
  country: 'Canada',
  city: 'Hamilton',
  twitter: '@wesbos'
};
```
Old way

```
const first = person.first;
const last = person.last;
```


New way

```
const { first, last } = person;
console.log(first);
console.log(last);
```

```
const wes = {
  first: 'Wes',
  last: 'Bos',
  links: {
    social: {
      twitter: 'https://twitter.com/wesbos',
      facebook: 'https://facebook.com/wesbos.developer',
    },
    web: {
      blog: 'https://wesbos.com'
    }
  }
};
const { twitter, facebook } = wes.links.social;
console.log(twitter);
console.log(facebook);
```

## Destructuring objects

Ok, now that we’ve got the array covered, let’s look at have we can extract data from objects.

Consider the following object describing a person.

```
const person = {  
  name: 'Luke',
  age: '24',
  facts: {
    hobby: 'Photo',
    work: 'Software Developer'
  }
}
```

### Extracting data from the object

```
const {name, age} = person;  
console.log(name, age); // 'Luke' '24'
```

As you can see, we almost got the same syntax as with the array — only that we now use curly braces instead of square brackets to say what we want to extract.

### Extracting nested values

Now, what if we want to extract something deeper in the object structure — say the person’s hobby?

```
const {facts: {hobby}} = person;  
console.log(hobby); // 'Photo'
```

By using the colon, we’re able to explain the path through the object, resulting in us being able to explain what property we’re interested in.

### Default values when data is missing

As we saw when destructuring arrays, we’re able to give default values that will be used if the data to be extracted doesn’t exist.

To see how this is done, let’s attempt to extract the hometown, but with Unknown as the default value.

```
const {hometown = 'Unknown'} = person;  
console.log(hometown); // 'Unknown'
```

### Destructuring the function parameter

Before wrapping up, let’s look at one last handy usage — destructuring function parameters.

Say your function gets an object as a parameter. Then you can destructure the parameter straight in the parameter list!

Let’s give it a try by creating a toString function that prints the persons name and age.

```
const toString = ({name, age}) => {  
  return `${name} is ${age} years old`;
}

toString(person); // Luke is 24 years old  
```


#### Resources

- http://www.deadcoderising.com/2017-03-28-es6-destructuring-an-elegant-way-of-extracting-data-from-arrays-and-objects-in-javascript/
