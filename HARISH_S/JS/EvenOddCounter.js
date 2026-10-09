class EvenOddCounter {

    static main() {
        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        let evenCount = 0;
        let oddCount = 0;

        for (let i = 0; i < array.length; i++) {
            if (array[i] % 2 === 0) {
                evenCount++;
            } else {
                oddCount++;
            }
        }

        console.log("Even elements:", evenCount);
        console.log("Odd elements:", oddCount);
    }
}

EvenOddCounter.main();