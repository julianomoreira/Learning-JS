// create array and add data to it.
var noiseArray = ['honk'];
noiseArray.unshift('burp');
noiseArray.push('fart');
noiseArray[3] = 'sneeze';

noiseArray.forEach(eachNoise => {
  console.log('method 1', eachNoise);
})

for (let i = 0; i < noiseArray.length; i++) {
  console.log('method 2', noiseArray[i]);
}

// console.log(noiseArray.length);
// console.log(noiseArray.lastIndexOf('juju'));

var animal = {
  username: 'Lion',
  tagline: 'Roar you!'
}
animal.noises = noiseArray; // adding arrays to objects

var animals = [];

animals.push(animal);

var quackers = { username: 'DaffyDuck', tagline: 'Yippeee!', noises: ['quack', 'honk', 'sneeze', 'growl'] }

animals[1] = quackers;

var goat = { username: 'Goat Duck', tagline: 'Yippeee!', noises: ['quack', 'honk', 'sneeze', 'growl'] }

var cat = { username: 'Mimi', tagline: 'Meau!', noises: ['quack', 'honk', 'sneeze', 'growl'] }

animals.push(goat, cat);
console.log(animals.length);

const person = {
  first: 'Wes',
  last: 'Bos',
  country: 'Canada',
  city: 'Hamilton',
  twitter: '@wesbos'
};
const { first, last } = person;

console.log(first);
console.log(last);

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
