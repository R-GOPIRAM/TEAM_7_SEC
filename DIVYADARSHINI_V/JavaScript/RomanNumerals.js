function convertToRoman(number) {
    const values = [
        1000, 900, 500, 400,
        100, 90, 50, 40,
        10, 9, 5, 4, 1
    ];

    const symbols = [
        "M", "CM", "D", "CD",
        "C", "XC", "L", "XL",
        "X", "IX", "V", "IV", "I"
    ];

    let romanNumber = "";

    for (let i = 0; i < values.length; i++) {
        while (number >= values[i]) {
            romanNumber += symbols[i];
            number -= values[i];
        }
    }

    return romanNumber;
}

const input = Number(prompt("Enter an integer:"));

if (!Number.isInteger(input) || input <= 0 || input > 3999) {
    console.log("Enter a positive integer between 1 and 3999.");
} else {
    const romanNumber = convertToRoman(input);

    console.log("Roman numeral:", romanNumber);
}