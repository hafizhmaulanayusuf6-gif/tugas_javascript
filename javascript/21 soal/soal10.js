const prompt = require('prompt-sync')({ sigint: true });

let judul_buku = prompt('masukan judul buku : ');
let penerbit = prompt('masukan penerbit : ');
let jumlah_buku = prompt('masukan jumlah buku : ');
let tanggal_pembelian = prompt('masukan tanggal pembelian : ');

console.log(' ')
console.log(`Judul Buku : ${judul_buku}`);
console.log(`penerbit : ${penerbit}`);
console.log(`Jumlah Buku : ${jumlah_buku}`);
console.log(`Tanggal Pembelian : ${tanggal_pembelian}`);
console.log('Terimakasih');