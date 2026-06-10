const prompt = require('prompt-sync')({ sigint: true });

let bulan, tahun, jumlahHari;

bulan = Number(prompt('masukan bulan : '));
tahun = Number(prompt('masukan tahun : '));

if (bulan < 1 || bulan > 12 || tahun < 1) {
    console.log('tahun atau bulan tidak valid')
} else {
    if ([1, 3, 5 , 7, 8, 10, 12].includes(bulan)) {
        jumlahHari = 31;
    } else if ([4, 6, 9, 11].includes(bulan)) {
        jumlahHari = 30;
    } else if (bulan === 2) {
        if ((tahun % 4 === 0 && tahun % 100 !== 0) || (tahun % 400 === 0)) {
            jumlahHari = 29;
        } else {
            jumlahHari = 28;
        }
    } else {
        jumlahHari = 0
    }

    console.log(`jumlah hari dalam bulan: ${bulan}, tahun: ${tahun} adalah ${jumlahHari}`);
}