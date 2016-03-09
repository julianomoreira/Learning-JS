# Looping

## Looping through an array and creating an object of each property

```
var animalNames = ['Sheep','Liger','Big Bird'];
var farm = [];

for (var i = 0; i < animalNames.length; i++){
    farm[i] = AnimalMaker(animalNames[i]);
}
// or
for (var i = 0; i < animalNames.length; i++){
    var animal = AnimalMaker(animalNames[i]);
    farm.push(animal);
}
// or
for (var i = 0; i < animalNames.length; i++){
    var animal = AnimalMaker(animalNames[i]);
    farm.push(AnimalMaker(animal));
}
```
