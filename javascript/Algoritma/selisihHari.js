const prompt = require('prompt-sync')({ sigint: true });

let tanggal1, tanggal2, hari1, bulan1, tahun1, hari2, bulan2, tahun2,
hari, bulan, tahun, totalHari1, totalHari2, selisih, data1, data2, sisa;

tanggal1 = prompt('masukan tanggal1 : ');
data1 = tanggal1.split(':')

hari1 = parseInt(data1[0]);
bulan1 = parseInt(data1[1]);
tahun1 = parseInt(data1[2]);

tanggal2 = prompt('masukan tanggal2 : ');
data2 = tanggal2.split(':')

hari2 = parseInt(data2[0]);
bulan2 = parseInt(data2[1]);
tahun2 = parseInt(data2[2]);

totalHari1 = (tahun1 * 365) + (bulan1 * 30) + hari1;
totalHari2 = (tahun2 * 365) + (bulan2 * 30) + hari2;

selisih = Math.abs(totalHari2 - totalHari1);

tahun = Math.floor(selisih / 365);
sisa = selisih % 365;

bulan = Math.floor(sisa / 30);
sisa = sisa % 30;

hari = sisa;

console.log(`${tahun}tahun ${bulan}bulan ${hari}hari`);