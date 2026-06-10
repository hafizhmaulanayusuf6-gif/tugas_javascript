const prompt = require('prompt-sync')({ sigint: true });

let angka = parseInt(prompt('masukan angka : '));

if (angka % 4 === 0) {
    console.log(`${angka} adalah kelipatan 4`)
} else {
    console.log(`${angka} bukan kelipatan 4`)
};