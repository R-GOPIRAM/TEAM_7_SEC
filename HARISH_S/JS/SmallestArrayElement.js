class SmallestArrayElement {

    static main() {
        const array = [45, 12, 78, 3, 56, 9, 21];

        let smallest = array[0];

        for (let i = 1; i < array.length; i++) {
            if (array[i] < smallest) {
                smallest = array[i];
            }
        }

        console.log("Smallest element:", smallest);
    }
}

SmallestArrayElement.main();