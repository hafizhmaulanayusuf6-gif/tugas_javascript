const prompt = require('prompt-sync')({ sigint: true });

let nama = prompt('Masukan Nama : ');
let nilai = Number(prompt('masukan nilai : '));

if (nilai >= 90 && nilai <= 100)  {
    console.log(`Nama  : ${nama}`);
    console.log(`Nilai : ${nilai}`);
    console.log('Grade : A');
} else if (nilai >= 80 && nilai <= 89 ) {
    console.log(`Nama  : ${nama}`);
    console.log(`Nilai : ${nilai}`);
    console.log('Grade : B');
} else if (nilai >= 70 && nilai <= 79) {
    console.log(`Nama  : ${nama}`);
    console.log(`Nilai : ${nilai}`);
    console.log('Grade : C');
} else if (nilai >= 60 && nilai <= 69) {
    console.log(`Nama  : ${nama}`);
    console.log(`Nilai : ${nilai}`);
    console.log('Grade : D');
} else {
    console.log('Grade : D');
};