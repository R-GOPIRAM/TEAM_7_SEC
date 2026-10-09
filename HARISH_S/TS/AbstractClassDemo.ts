abstract class Animal {
    abstract makeSound(): void;

    move(): void {
        console.log("Animal is moving");
    }
}

class Dog extends Animal {

    makeSound(): void {
        console.log("Dog barks");
    }
}

class AbstractClassDemo {

    static main(): void {
        const dog = new Dog();

        dog.makeSound();
        dog.move();
    }
}

AbstractClassDemo.main();