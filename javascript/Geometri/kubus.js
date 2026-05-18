const prompt = require('prompt-sync')({ sigint: true});

let sisi, volume, luas_permukaan;

sisi = parseInt(prompt('masukan sisi : '));

volume = sisi * sisi * sisi;
luas_permukaan = 6 * sisi * sisi;

console.log(`volume     :${volume.toFixed(2)}cm³`);
console.log(`luas permukaan     :${luas_permukaan.toFixed(2)}cm²`);