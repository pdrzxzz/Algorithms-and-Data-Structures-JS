//Frequency counter is to prevent using nested loops (O²)
function validAnagram(word1, word2) {
    if (word1.length != word2.length) {
        return false;
    }
    let wordObj1 = {}
    let wordObj2 = {}
    for (let char of word1) {
        wordObj1[char] = (wordObj1[char] || 0) + 1;
    }
    for (let char of word2) {
        wordObj2[char] = (wordObj2[char] || 0) + 1;
        if (wordObj2[char] > (wordObj1[char] || 0)) {
            return false;
        }
    }
    return true;
}