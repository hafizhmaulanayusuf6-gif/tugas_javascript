const prompt = require('prompt-sync')({ sigint: true });

let angka = Number(prompt('Masukan Angka : '))

if (angka > 100 ) {
    console.log('Nilai Kamu Sempurna!')
};