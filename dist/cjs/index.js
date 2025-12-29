"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nonce = () => {
    let result = randomString(randomInt(10, 16));
    return result;
};
function randomString(length) {
    let res = '';
    const offset = randomInt(2, 11);
    let charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz12345679';
    var randChars = shuffleString(`${charset}${charset}${charset}`);
    for (let i = 0; i < length + offset + 1; i++) {
        res += randChars.charAt(Math.floor(Math.random() * randChars.length));
    }
    return res.substring(offset, offset + length);
}
function randomInt(min, max) {
    if (!min || min < 1)
        min = 1;
    if (!max || max > 9007199254740991)
        max = 9007199254740991;
    min = Math.ceil(min);
    max = Math.floor(max);
    if (min > max)
        return randomInt(min, min);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function shuffleString(str) {
    let arr = Array.from(str);
    let currentIndex = arr.length, randIndex;
    while (currentIndex !== 0) {
        randIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [arr[currentIndex], arr[randIndex]] = [arr[randIndex], arr[currentIndex]];
    }
    return arr.join('');
}
exports.default = (nonce);
