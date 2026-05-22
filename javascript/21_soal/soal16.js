const prompt = require('prompt-sync')({ sigint: true });

let nila = Number(prompt('Masukan Peringkat : '));

if (nila === 1) {
    console.log('Selamat Anda Juara Utama')
} else if (nila === 2) {
    console.log('Selamat Anda Runner Up')
} else if (nila === 3) {
    console.log('Selamat Anda Juara 3')
} else {
    console.log('Inputan Anda Salah!')
};