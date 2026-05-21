const prompt = require('prompt-sync')({ sigint: true });

let angka = Number(prompt('masukan angka : '));

if (angka % 7 === 0) {
    console.log('Kelipatan 7');
} else {
    console.log('Anda Belum Beruntung')
};