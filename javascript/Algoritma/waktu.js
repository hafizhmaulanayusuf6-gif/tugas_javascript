const prompt = require('prompt-sync')({ sigint: true});

let totalDetik, hari, jam, menit, detik, sisa;

totalDetik = parseInt(prompt('masukan jumlah detik: '));

hari = Math.floor(totalDetik / 86400);
sisa = totalDetik % 86400;

jam = Math.floor(sisa / 3600);
sisa = sisa % 3600;

menit = Math.floor(sisa / 60);
detik = sisa % 60;

console.log(`${hari} hari ${jam} jam ${menit} menit ${detik} detik`);