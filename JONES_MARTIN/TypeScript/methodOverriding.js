"use strict";
class Animal {
    makeSound() {
        console.log("Some generic animal sound");
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("Woof! Woof!");
    }
}
class Cat extends Animal {
    makeSound() {
        console.log("Meow!");
    }
}
const animal = new Animal();
const dog = new Dog();
const cat = new Cat();
animal.makeSound();
dog.makeSound();
cat.makeSound();
