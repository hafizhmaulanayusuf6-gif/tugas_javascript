const prompt = require('prompt-sync')({ sigint: true });

let harga, pajak, fee, total;

harga = Number(prompt('Masukan Harga Makanan : '));

pajak = harga * 0.10;
fee = harga * 0.05;
total = harga + pajak + fee;

console.log(`pajak : ${pajak}`);
console.log(`fee : ${fee}`);
console.log(`Total : ${total}`);