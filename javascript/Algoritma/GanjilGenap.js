const prompt = require('prompt-sync')({ sigint: true });

let angka = parseInt(prompt('masukan angka : '));

if (angka % 2 === 0) {
    console.log(`${angka} adalah bilangan genap`);
} else {
    console.log(`${angka} adalah bilangan ganjil`);
};