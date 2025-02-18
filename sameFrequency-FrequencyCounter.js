function sameFrequency(num1, num2) {
    const lookup = {};
    const string1 = num1.toString();
    const string2 = num2.toString();
    for (let char of string1) {
        lookup[char] = (lookup[char] || 0) + 1;
    }
    for (let char of string2) {
        if (!lookup[char]--) {
            return false;
        }
    }
    return true;
}