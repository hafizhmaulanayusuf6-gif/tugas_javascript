const prompt = require('prompt-sync')({ sigint: true });

let X_RPL_1 = Number(prompt('masukan jumlah siswa x rpl 1 : '));
let X_RPL_2 = Number(prompt('masukan jumlah siswa x rpl 2 : '));
let X_TKJ_1 = Number(prompt('masukan jumlah siswa x tkj 1 : '));
let X_TKJ_2 = Number(prompt('masukan jumlah siswa x tkj 2 : '));

let jumlah = X_RPL_1 + X_RPL_2 + X_TKJ_1 + X_TKJ_2

console.log(`Jumlah siswa seluruh kelas : ${jumlah}`);