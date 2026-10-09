function generateRandomInteger(minimum, maximum) {
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}

const minimum = Number(prompt("Enter minimum value:"));
const maximum = Number(prompt("Enter maximum value:"));

if (minimum > maximum) {
    console.log("Minimum value cannot be greater than maximum value.");
} else {
    const randomNumber = generateRandomInteger(minimum, maximum);

    console.log("Random integer:", randomNumber);
}