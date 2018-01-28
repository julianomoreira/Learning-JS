# Arrays in ES6

## Extracting data from arrays

Say you got an array of names.

```
const names = ['Luke', 'Eva', 'Phil'];
```

Next, let's use destructuring to extract data from the array.

## Extracting elements from an array

Let’s start with the absolute basics — extracting the first element from the array.

```
const [first] = names;  
console.log(first); // 'Luke'
```

Ok, let’s break down what this syntax actually does. By wrapping a variable declaration with square brackets, we’re saying that we want to take the first element from names and assign it to the variable — in our case assigning the first element to the variable first.

Now, what do we do if we want to extract several elements — say the first and the second element? Easy — we simply add more variables between the square brackets. This will result in new elements being fetched from the front of the array and assigned to the variables defined.

```
const [first, second] = names;  
console.log(first, second); // 'Luke' 'Eva'
```

## Default values when elements are missing

But what happens if we try to extract four elements from our array that contains only three elements?

```
const [first, second, third, fourth] = names;  
console.log(fourth); // undefined  
```

In this scenario fourth will be undefined.

This is in many scenarios undesired, so what we can do is to define a default value that will be used if the array doesn’t contain enough elements.

```
const [first, second, third, fourth='Martin'] = names;  
console.log(fourth); // 'Martin'
```

## Skipping elements in the array

Until now we’ve kept it simple and picked elements from the start of the list.

Now, there may be scenarios where we would like to skip elements. In this case, we would like to avoid assigning the unwanted elements to variables.

Luckily, destructuring got a nice solution for this problem.

```
var [first, , second] = names;  
console.log(first, second); // 'Luke' 'Phil'
```

By simply adding another comma without assigning a variable, we’re able to jump to the next element. What if we want to skip more elements? Easy — simply add more commas!

## Assign the rest of an array to a variable

We’ve seen that extracting different elements is easy, but often we would like to keep the part of the array that hasn’t been extracted.

Let’s see how we could do this using destructuring.

```
var [first, ...rest] = names;  
console.log(rest); // ['Eva','Phil']
```

## Array Methods

- `forEach()`
- `filter()`
- `sort()`
- `map()`
- `reduce()`
