
function fuc(sentence : string) : Map<String, number> {
    const map = new Map<String, number>();
    const words = sentence.split(" ");
    for(const word of words){
        map.set(word,(map.get(word) || 0)+1);
    }
    return map;
}




const text = "Hello Hello Hello Jones jones Jones jones martin";
const frequencies = fuc(text);

frequencies.forEach((count, word) => {
    console.log(`${word}: ${count}`);
});





