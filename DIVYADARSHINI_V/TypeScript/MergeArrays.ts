function mergeArrays<T>(arr1: T[], arr2: T[]): T[] {
    return Array.from(new Set([...arr1, ...arr2]));
}

console.log(mergeArrays([1, 2, 3], [3, 4, 5]));