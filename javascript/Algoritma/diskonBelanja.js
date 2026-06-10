const prompt = require('prompt-sync')({ sigint: true });

let total_belanja, diskon, setelah_diskon;

total_belanja = parseInt(prompt('masukan total belanja : '));

if (total_belanja > 100000) {
    diskon = total_belanja * 0.1;
    setelah_diskon = total_belanja - diskon;
    console.log(`diskon yang anda dapat ${diskon}, total yang harus anda bayar adalah: ${setelah_diskon}`);
} else if (total_belanja <= 100000) {
    diskon = 0;
    setelah_diskon = total_belanja;
    console.log(`anda tidak mendapat diskon ${diskon}, total yang harus anda bayar adalah: ${setelah_diskon}`)
};

