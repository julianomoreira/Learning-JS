# JS Deep Foundations

## Type, Coercion

- Primitive Types
- Natives
- Coercion
- Equality

For NaN or negative zero use Object.is(); function.

```var foo = new Object(); // imperative form```
foo.a = 1;
foo.b = 2;

`var foo = {a = 1; b = 2;} // declarative form`

## Coercion

The ability to convert a value to a desirable format.

When ToString() is called upon a primitive value is straight forward, however when called upon a non-primitive value is a bit more complicated.

The operator (+) does exaclty the same thing as Number(foo) For example:

`baz = number(foo);`

is the same thing as

`baz = +foo`

Double equal (==) prefers to compare numbers.


Always choose named function expressions.


## Module pattern (encapsulation)

- outer enclosing function that runs at least once.
- inner function with closure that gets returned.
