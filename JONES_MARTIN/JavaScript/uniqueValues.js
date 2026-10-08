function Unique(arr) {
    const map = {};

    for (const num of arr) {
        map[num] = (map[num] || 0) + 1;
    }

    return arr.filter(num => map[num] === 1);
}

const numbers = [1, 2, 2, 3, 4, 4, 5, 1, 6];

console.log(Unique(numbers));



