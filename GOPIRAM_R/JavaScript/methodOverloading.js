class Calculator {
    add(a, b) {
        if (b === undefined) {
            return a;
        }
        return a + b;
    }
}
let c = new Calculator();
console.log(c.add(10));
console.log(c.add(10, 20));