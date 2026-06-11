const prompt = require('prompt-sync')({ sigint: true });

let totalBelanja, totalDibulatkan, sisa, selisih, jumlah;
const pecahanUang = [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100, 50, 25];
const hasil = [];

totalBelanja = parseInt(prompt('masukan total belanja : '));

totalDibulatkan = Math.floor(totalBelanja / 25) * 25;
selisih = totalBelanja - totalDibulatkan;

sisa = totalDibulatkan;

for (let i = 0; i < pecahanUang.length; i++) {
    jumlah = Math.floor(sisa / pecahanUang[i]);

    if (jumlah > 0) {
        sisa = sisa - (jumlah * pecahanUang[i]);
        hasil.push({
            pecahan: pecahanUang[i],
            jumlah: jumlah
        });
    }
}

console.log(`\nTotal belanja      : Rp${totalBelanja}`);
console.log(`Setelah dibulatkan : Rp${totalDibulatkan}`);
console.log(`Total yang harus dibayar : Rp${totalDibulatkan}`);