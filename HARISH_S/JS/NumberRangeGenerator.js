class NumberRangeGenerator {

    static main() {
        const start = 5;
        const end = 15;

        const array = [];

        for (let i = start; i <= end; i++) {
            array.push(i);
        }

        console.log(array);
    }
}

NumberRangeGenerator.main();