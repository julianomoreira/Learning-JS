// let animal = {}
// animal.name = 'Leo'
// animal.energy = 10

// animal.eat = function (amount) {
//   console.log(`${this.name} is eating.`)
//   this.energy += amount
// }

// animal.sleep = function (length) {
//   console.log(`${this.name} is sleeping.`)
//   this.energy += length
// }

// animal.play = function (length) {
//   console.log(`${this.name} is playing.`)
//   this.energy -= length
// }

// console.log(animal);

// ** Functional Instantiation **

// function Animal (name, energy) {
//     let animal = {}
//     animal.name = name
//     animal.energy = energy
  
//     animal.eat = function (amount) {
//       console.log(`${this.name} is eating.`)
//       this.energy += amount
//     }
  
//     animal.sleep = function (length) {
//       console.log(`${this.name} is sleeping.`)
//       this.energy += length
//     }
  
//     animal.play = function (length) {
//       console.log(`${this.name} is playing.`)
//       this.energy -= length
//     }
  
//     return animal
//   }
  
//   const leo = Animal('Leo', 7)
//   const snoop = Animal('Snoop', 10)
//   leo.play(10);
//   console.log(leo);

// ** Functional Instantiation with Shared Methods **

// const animalMethods = {
//     eat(amount) {
//       console.log(`${this.name} is eating.`)
//       this.energy += amount
//     },
//     sleep(length) {
//       console.log(`${this.name} is sleeping.`)
//       this.energy += length
//     },
//     play(length) {
//       console.log(`${this.name} is playing.`)
//       this.energy -= length
//     }
//   }
  
//   function Animal (name, energy) {
//     let animal = {}
//     animal.name = name
//     animal.energy = energy
//     animal.eat = animalMethods.eat
//     animal.sleep = animalMethods.sleep
//     animal.play = animalMethods.play
  
//     return animal
//   }
  
//   const leo = Animal('Leo', 7)
//   const snoop = Animal('Snoop', 10)

// ** Object.create **

// const parent = {
//     name: 'Stacey',
//     age: 35,
//     heritage: 'Irish'
//   }
  
//   const child = Object.create(parent)
//   child.name = 'Ryan'
//   child.age = 7
  
//   console.log(child.name) // Ryan
//   console.log(child.age) // 7
//   console.log(child.heritage) // Irish


// ** Functional Instantiation with Shared Methods and Object.create **

// const animalMethods = {
//     eat(amount) {
//       console.log(`${this.name} is eating.`)
//       this.energy += amount
//     },
//     sleep(length) {
//       console.log(`${this.name} is sleeping.`)
//       this.energy += length
//     },
//     play(length) {
//       console.log(`${this.name} is playing.`)
//       this.energy -= length
//     }
//   }
  
//   function Animal (name, energy) {
//     let animal = Object.create(animalMethods);
//     animal.name = name
//     animal.energy = energy    
  
//     return animal
//   }

//   let horse = Animal("Juliano",10)
//   horse.sleep(5);
//   horse.play(8);
//   console.log(horse);

// ** Prototypal Instantiation ** //

// function Animal (name, energy) {
//     let animal = Object.create(Animal.prototype)
//     animal.name = name
//     animal.energy = energy
  
//     return animal
//   }
  
//   Animal.prototype.eat = function (amount) {
//     console.log(`${this.name} is eating.`)
//     this.energy += amount
//   }
  
//   Animal.prototype.sleep = function (length) {
//     console.log(`${this.name} is sleeping.`)
//     this.energy += length
//   }
  
//   Animal.prototype.play = function (length) {
//     console.log(`${this.name} is playing.`)
//     this.energy -= length
//   }
  
//   const leo = Animal('Leo', 7)
//   const snoop = Animal('Snoop', 10)
  
//   leo.eat(10)
//   snoop.play(5)

  // ** Pseudo Classical Instantiation ** //

  function Animal (name, energy) {
    this.name = name
    this.energy = energy
  }
  
  Animal.prototype.eat = function (amount) {
    console.log(`${this.name} is eating.`)
    this.energy += amount
  }
  
  Animal.prototype.sleep = function (length) {
    console.log(`${this.name} is sleeping.`)
    this.energy += length
  }
  
  Animal.prototype.play = function (length) {
    console.log(`${this.name} is playing.`)
    this.energy -= length
  }
  
  const leo = new Animal('Leo', 7)
  const snoop = new Animal('Snoop', 10)



