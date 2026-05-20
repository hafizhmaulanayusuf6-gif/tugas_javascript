const prompt = require('prompt-sync')({ sigint: true });

let r, volume, luas_permukaan;

r = parseInt(prompt('masukan nilai r : '));

volume = 4/3 * Math.PI * r * r * r;
luas_permukaan = 4 * Math.PI * r * r;

console.log(`volume     :${volume.toFixed(2)}cm³`);
console.log(`luas permukaan     :${luas_permukaan.toFixed(2)}cm²`); 