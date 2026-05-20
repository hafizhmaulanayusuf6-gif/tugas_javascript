const prompt = require('prompt-sync')({ sigint: true });

let r, tinggi, s, volume, luas_permukaan;

r = parseInt(prompt('masukan nilai r : '));
tinggi = parseInt(prompt('masukan tinggi : '));

volume = 1/3 * Math.PI * r * r * tinggi;
s = Math.sqrt( r * r + tinggi * tinggi );
luas_permukaan = Math.PI * r * ( r + s );

console.log(`volume     :${volume.toFixed(2)}cm³`);
console.log(`luas permukaan     :${luas_permukaan.toFixed(2)}cm²`);