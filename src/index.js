module.exports = function reverse(n) {
    const str = String(n);
    let result = "";
    for (i = str.length - 1; i >= 0; i--) {
        if (str[i] != "-") {
            result += str[i];
        }
    }
    return Number(result);
};