const prompt = require('prompt-sync')({ sigint: true });

let alas, tinggi, luas, keliling, sisi_miring;

alas = parseInt(prompt('masukan alas : '));
tinggi = parseInt(prompt('masukan tinggi :'));
sisi_miring = parseInt(prompt('masukan sisi miring :'));

luas = alas * tinggi;
keliling = 2 * (alas + sisi_miring);

console.log(`luas   :${luas.toFixed(2)} cm²`);
console.log(`keliling   :${keliling.toFixed(2)} cm`);