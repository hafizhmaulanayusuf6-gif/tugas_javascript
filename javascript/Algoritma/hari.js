const prompt = require('prompt-sync')({ sigint: true });

let hari, bulan, tahun, sisa;

hari = parseInt(prompt('masukan hari: '));

tahun = Math.floor(hari / 365);
sisa = hari % 365;

bulan = Math.floor(sisa / 30);
sisa = sisa % 30;

hari = sisa;

console.log(`${tahun}tahun ${bulan}bulan ${tahun}hari`);