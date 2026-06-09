const prompt = require('prompt-sync')({ sigint: true });

let jamKerja, gaji, jamLembur = 0;
const upahNormal = 2000;
const upahLembur = 3000;
const batasjam = 48;

jamKerja = parseInt(prompt('masukan jumlah jam kerja : '));

if (jamKerja <= batasjam) {
    gaji = jamKerja * upahNormal;
} else if (jamKerja > batasjam) {
    jamLembur = jamKerja - batasjam;
    gaji = (batasjam * upahNormal) + (jamLembur * upahLembur);
} else {
    console.log('anda belum bekerja');
};

console.log(`jamKerja: ${jamKerja} \njamLembur: ${jamLembur} \ngaji: ${gaji}`);