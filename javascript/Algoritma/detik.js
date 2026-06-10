const prompt = require('prompt-sync')({ sigint: true });

let waktu, jam, menit, detik, dataWaktu, jamBaru;

waktu = prompt('masukan jam, contoh hh:mm:ss : ');
dataWaktu = waktu.split(':');

jam = parseInt(dataWaktu[0]);
menit = parseInt(dataWaktu[1]);
detik = parseInt(dataWaktu[2]);

detik = detik + 1;

if (detik >= 60) {
    detik = 0;
    menit = menit + 1
} if (menit >=60) {
    menit = 0;
    jam = jam + 1;
} if (jam >= 24) {
    jam = 0
};

jamBaru = `${String(jam).padStart(2, '0')}:${String(menit).padStart(2, '0')}:${String(detik).padStart(2, '0')}`;

console.log(jamBaru);