function findSecondSmallest(numbers) {
    const uniqueNumbers = [...new Set(numbers)];

    if (uniqueNumbers.length < 2) {
        return null;
    }

    uniqueNumbers.sort((a, b) => a - b);

    return uniqueNumbers[1];
}

const input = prompt("Enter numbers separated by spaces:");

const numbers = input.trim().split(/\s+/).map(Number);

const secondSmallest = findSecondSmallest(numbers);

if (secondSmallest === null) {
    console.log("At least two different numbers are required.");
} else {
    console.log("Second-smallest element:", secondSmallest);
}