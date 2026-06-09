const prompt = require('prompt-sync')({ sigint: true });

let anggka = parseInt(prompt('masukan angka diantara 1 sampai 4 : '));
switch (anggka) {
    case 1:
        console.log('satu');
        break;
    case 2:
        console.log('dua');
        break;
    case 3:
        console.log('tiga');
        break;
    case 4:
        console.log('empat');
        break;
    default:
        console.log('input tidak valid. harap masukan angka antara 1 - 4');
};