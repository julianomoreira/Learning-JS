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
