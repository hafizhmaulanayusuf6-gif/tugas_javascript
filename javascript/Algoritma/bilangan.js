const prompt = require('prompt-sync')({ sigint: true });

let angka = parseInt(prompt('masukan angka : '));

if (angka > 0) {
    console.log(`${angka} adalah bilangan positif`);
} else if (angka < 0) {
    console.log(`${angka} adalah bilangan negatif`);
} else if (angka === 0) {
    console.log(`${angka} adalah bilangan nol`);
} else {
    console.log('bukan anggka');
};