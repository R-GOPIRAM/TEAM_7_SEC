"use strict";
function fuc(sentence) {
    const map = new Map();
    const words = sentence.split(" ");
    for (const word of words) {
        map.set(word, (map.get(word) || 0) + 1);
    }
    return map;
}
const text = "Hello Hello Hello Jones jones Jones jones martin";
const frequencies = fuc(text);
frequencies.forEach((count, word) => {
    console.log(`${word}: ${count}`);
});
