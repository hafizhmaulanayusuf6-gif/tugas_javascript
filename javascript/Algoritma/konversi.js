const prompt = require('prompt-sync')({ sigint: true });

let karakter, hasil;

karakter = prompt('masukan karakter 0-9 : ');

if (karakter.length === 1 && karakter >= '0' && karakter <= '9') {
    hasil = parseInt(karakter);
    console.log(hasil);
} else {
    console.log(-99)
};