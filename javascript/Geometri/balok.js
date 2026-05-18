const prompt = require('prompt-sync')({ sigint: true });

let p, l, t, volume, luas_permukaan;

p = parseInt(prompt('masukan panjang : '));
l = parseInt(prompt('masukan lebar : '));
t = parseInt(prompt('masukan tinggi : '));

volume = p * l * t;;
luas_permukaan = 2 * (p * l + p * t + l * t);

console.log(`volume     :${volume.toFixed(2)}cm³`);
console.log(`luas permukaan     :${luas_permukaan.toFixed(2)}cm²`);