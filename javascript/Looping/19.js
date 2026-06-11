const prompt = require('prompt-sync')({ sigint: true });




let arr = [];

while (true) {
    let pilihan = prompt('masukan pilihan angka atau ketik (selesai): ');
    if (pilihan === 'selesai') {
        break;
    } 

    let anggka = parseFloat(pilihan);
    if (isNaN(pilihan)) {
        arr.push[anggka]
    } else {
        console.log('input salah');
    }
}

if (arr.length > 0) {
    let jumlah = 0

    for (let nilai of arr){
        jumlah += nilai;
    }

    let rataRata = jumlah / arr.length;
    console.log(`Rata-rata nilai    : ${rataRata}`);
}