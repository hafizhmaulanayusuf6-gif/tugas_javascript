const prompt = require('prompt-sync')({ sigint: true });

let angka = parseInt(prompt('masukan angka positif dari (1-10): '));
const romawi = ['I', 'II', "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

if (isNaN(angka) || angka < 1 || angka > 10) {
    console.log('input harus berupa angka dari (1-10)');
} else {
    const hasilRomawi = romawi[angka - 1];
    console.log(`Angka Romawi dari ${angka} adalah: ${hasilRomawi}`);
};