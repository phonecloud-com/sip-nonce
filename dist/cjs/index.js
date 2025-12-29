"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nonce = () => {
    return randomString(randomInt(10, 16));
};
function randomString(length) {
    let res = '';
    const offset = randomInt(2, 11);
    let charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var randChars = shuffleString(`${charset}${charset}${charset}`);
    for (let i = 0; i < length + offset + 1; i++) {
        res += randChars.charAt(Math.floor(Math.random() * randChars.length));
    }
    return res.substring(offset, offset + length);
}
function randomInt(min, max) {
    if (!min || min < 1 || typeof min != "number")
        min = 1;
    if (!max || max > 9007199254740991 || typeof min != "number")
        max = 9007199254740991;
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
    return arr.join('');
}
exports.default = (nonce);
