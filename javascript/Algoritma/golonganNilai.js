const prompt = require('prompt-sync')({ sigint: true });

let nilai_ujian = parseInt(prompt('masukan nilai ujian : '));

if (nilai_ujian >= 80) {
    console.log('indeks nilai=A');
} else if (70 <= nilai_ujian && nilai_ujian < 80) {
    console.log('indeks nilai=B')
} else if (55 <= nilai_ujian && nilai_ujian < 70) {
    console.log('indeks nilai=C')
} else if (40 <= nilai_ujian && nilai_ujian < 55) {
    console.log('indeks nilai=D')
} else if (nilai_ujian < 40) {
    console.log('indeks nilai=E')
} else {
    console.log('yang anda inputkan bukan nilai')
};