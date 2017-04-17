# Promises in JS

## Example 1:

```js
let promiseToCleanTheRoom = new Promise(function(resolve, reject){
  // cleaning the room
  let isClean = false;

  if (isClean){
    resolve('Clean');
  } else {
    reject('not Clean');
  }
});
```

```js
promiseToCleanTheRoom.then(function(fromResolve){
  console.log('the room is ' + fromResolve);
}).catch(function(fromReject){
  console.log('the room is ' + fromReject);
});
```

## Example 2:

```js
let cleanRoom = function() {
  return new Promise(function(resolve, reject){
    resolve('Cleaned The Room');
  });
};

let removeGarbage = function(message){
  return new Promise(function(resolve, reject){
    resolve(message + ' remove garbage');
  });
};

let winIcecream = function(message){
	return new Promise(function(resolve, reject){
    resolve(message + ' won Icecream');
  });
};

cleanRoom().then(function(result){
	return removeGarbage(result);
}).then(function(result){
	return winIcecream(result);
}).then(function(result){
	console.log('finished ' + result);
});

// if you need to run them in parallel

Promise.all([cleanRoom(), removeGarbage(), winIcecream()]).then(function(){
  console.log('all finished');
});

// if you want only one of them to finish

Promise.race([cleanRoom(), removeGarbage(), winIcecream()]).then(function(){
  console.log('one of them is finished');
});

```