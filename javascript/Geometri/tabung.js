const prompt = require('prompt-sync')({ sigint: true });

let r, tinggi, volume, luas_permukaan;

r = parseInt(prompt('masukan nilai r : '));
tinggi = parseInt(prompt('masukan tinggi : '));

volume = Math.PI * r * r * tinggi;
luas_permukaan = 2 * Math.PI * r * ( r + tinggi);

console.log(`volume     :${volume.toFixed(2)}cm³`);
console.log(`luas permukaan     :${luas_permukaan.toFixed(2)}cm²`);