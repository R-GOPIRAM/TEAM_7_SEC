class Animal {
    makeSound(): void {
        console.log("Some generic animal sound");
    }
}

class Dog extends Animal {
    override makeSound(): void {
        console.log("Woof! Woof!");
    }
}

class Cat extends Animal {
    override makeSound(): void {
        console.log("Meow!");
    }
}

const animal: Animal = new Animal();
const dog: Animal = new Dog();
const cat: Animal = new Cat();

animal.makeSound();
dog.makeSound();
cat.makeSound();
