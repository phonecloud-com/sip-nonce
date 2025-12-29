const nonce = function (minLength = 8, maxLength = 10) {
    if (typeof minLength != "number" || minLength < 8)
        minLength = 8;
    if (typeof maxLength != "number" || maxLength > 24)
        maxLength = 24;
    const length = randomInt(minLength, maxLength);
    const offset = randomInt(1, 17);
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    chars = shuffleString(chars.repeat(4));
    let res = "";
    for (let i = 0; i < length + offset + 1; i++) {
        res += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return res.substring(offset, offset + length);
};
function randomInt(min, max) {
    if (!min || min < 1 || typeof min != "number")
        min = 1;
    if (!max || max > 24 || typeof min != "number")
        max = 24;
    min = Math.ceil(min);
    max = Math.floor(max);
    if (min > max)
        return randomInt(min);
    return Math.floor(min + Math.random() * (max - min) + Math.random());
}
function shuffleString(str) {
    let arr = Array.from(str);
    let currIndex = arr.length;
    let randIndex;
    while (currIndex !== 0) {
        randIndex = Math.floor(Math.random() * currIndex);
        currIndex--;
        [arr[currIndex], arr[randIndex]] = [arr[randIndex], arr[currIndex]];
    }
    return arr.join("");
}
export default nonce;
