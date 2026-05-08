const prompt = require('prompt-sync')({ sigint: true });

let luas, keliling, sisi, d1, d2;

sisi = parseInt(prompt('masukan sisi : '));
d1 = parseInt(prompt('masukan nilai diagonal1 : '));
d2 = parseInt(prompt('masukan nilai diagonal2 : '));

luas = 1/2 * d1 * d2;
keliling = 4 * sisi;

console.log(`luas   :${luas.toFixed(2)}cm²`);
console.log(`keliling   :${keliling.toFixed(2)}cm`);
