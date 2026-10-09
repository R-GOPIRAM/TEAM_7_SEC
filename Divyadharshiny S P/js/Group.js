let words = ["apple", "ant", "banana", "ball", "cat"];

let groups = new Map();

for (let word of words) {
    let firstChar = word[0];

    if (!groups.has(firstChar)) {
        groups.set(firstChar, []);
    }

    groups.get(firstChar).push(word);
}

console.log(groups);