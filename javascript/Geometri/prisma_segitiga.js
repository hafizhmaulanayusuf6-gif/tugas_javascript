const prompt = require('prompt-sync')({ sigint: true });

let alas, tinggi_segita, tinggi_prisma, sisi_a, sisi_b, sisi_c, volume,
luas_permukaan, keliling_alas, luas_alas;

alas = parseInt(prompt('masukan nilai alas : '));
tinggi_segita = parseInt(prompt('masukan tinggi segitiga : '));
tinggi_prisma = parseInt(prompt('masukan tinggi prisma : '));
sisi_a = parseInt(prompt('masukan nilai sisi A : '));
sisi_b = parseInt(prompt('masukan nilai sisi B : '));
sisi_c = parseInt(prompt('masukan nilai sisi C : '));

volume = 1/2 * alas * tinggi_segita * tinggi_prisma;
keliling_alas = sisi_a + sisi_b + sisi_c;
luas_alas = 1/2 * alas * tinggi_segita;
luas_permukaan = (2 * luas_alas) + (keliling_alas * tinggi_prisma);

console.log(`volume     :${volume.toFixed(2)}cm³`);
console.log(`luas permukaan     :${luas_permukaan.toFixed(2)}cm²`);