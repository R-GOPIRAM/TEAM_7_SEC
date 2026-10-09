function checkNumberType(number) {
    if (Number.isInteger(number)) {
        return "Integer";
    }

    return "Floating-point number";
}

const input = prompt("Enter a number:");
const number = Number(input);

if (Number.isNaN(number)) {
    console.log("Invalid number.");
} else {
    console.log("The number is:", checkNumberType(number));
}