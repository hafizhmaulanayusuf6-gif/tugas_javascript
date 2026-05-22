const prompt = require('prompt-sync')({ sigint: true });

let harga, total, diskon;

harga = Number(prompt('masukan harga barang : '));

if (harga >= 200000) {
    diskon = harga * 0.075;
} else {
    diskon = 0;
    console.log('Anda tidak Mendapat diskon');
    
};

total = harga - diskon;

console.log(`diskon : ${diskon}`);
console.log(`Total Bayar : ${total}Rp`);