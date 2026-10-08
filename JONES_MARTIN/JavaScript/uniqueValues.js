function Unique(arr) {
    return [...new Set(arr)];
}

const numbers = [1, 2, 2, 3, 4, 4, 5, 1, 6, 1];

console.log(Unique(numbers));



