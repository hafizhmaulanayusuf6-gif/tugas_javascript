const prompt = require('prompt-sync')({ sigint: true });

let panjang, lebar, tinggi, tinggi_segita, luas_alas, keliling_alas, luas_selubung, volume, luas_permukaan;

panjang = parseInt(prompt('masukan panjang : '));
lebar = parseInt(prompt('masukan lebar : '));
tinggi = parseInt(prompt('masukan tinggi : '));
tinggi_segita = parseInt(prompt('masukan tinggi segitiga : '));

luas_alas = panjang * lebar;
keliling_alas = 2 * (panjang + lebar);
luas_selubung = 1/2 * keliling_alas * tinggi_segita;
volume = 1/3 * luas_alas * tinggi;
luas_permukaan = luas_alas + luas_selubung;

console.log(`volume     :${volume.toFixed(2)}cm³`);
console.log(`luas pemukann      :${luas_permukaan.toFixed(2)}cm²`);
