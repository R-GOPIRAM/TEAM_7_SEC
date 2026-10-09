function checkNumber(num) {
    if (num > 0) return "Positive";
    if (num < 0) return "Negative";
    return "Zero";
}

console.log(checkNumber(-5));