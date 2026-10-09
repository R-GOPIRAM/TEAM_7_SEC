function secondSmallest(arr) {
    const sorted = [...new Set(arr)].sort((a, b) => a - b);
    return sorted[1];
}

console.log(secondSmallest([12, 5, 2, 8, 2, 9]));