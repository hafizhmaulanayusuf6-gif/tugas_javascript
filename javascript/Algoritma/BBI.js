const prompt = require('prompt-sync')({ sigint: true });

let tinggi, beratbadanIdeal, beratbadanAktual;

tinggi = parseInt(prompt('masukan tinggi : '));
beratbadanAktual = parseInt(prompt('masukan berat badan saat ini : '));

if (tinggi <= 0) {
    console.log('kesalahan input');
} else {
    beratbadanIdeal = (tinggi - 100) - 0.10 * (tinggi - 100);
    const selisih = Math.abs(beratbadanAktual - beratbadanIdeal);
    
    if (selisih <= 2) {
        console.log('ideal');
    } else {
        console.log('tidak ideal')
    }
};