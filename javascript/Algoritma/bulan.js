const prompt = require('prompt-sync')({ sigint: true });

let bulan = parseInt(prompt('masukan bulan : '));
switch (bulan) {
    case 1:
        console.log('januari');
        break;
    case 2:
        console.log('februari');
        break;
    case 3:
        console.log('maret');
        break;
    case 4:
        console.log('april');
        break;
    case 5:
        console.log('mei');
        break;
    case 6:
        console.log('juni');
        break;
    case 7:
        console.log('juli');
        break;
    case 8:
        console.log('agustus');
        break;
    case 9:
        console.log('september');
        break;
    case 10:
        console.log('oktober');
        break;
    case 11:
        console.log('novenber');
        break;
    case 12:
        console.log('desember');
        break;
    default:
        console.log('input tidak valid. harap masukan angka antara 1 - 4');
};