const prompt = require('prompt-sync')({ sigint: true });

let nama, jamKerja, golongan, gaji, jamLembur = 0;

nama = prompt('masukan nama karyawan : ');
jamKerja = parseInt(prompt('masukan jam kerja : '));
golongan = prompt('masukan golongan A/B/C/D : ').toUpperCase();

const golongan_A = 4000;
const golongan_B = 5000;
const golongan_C = 6000;
const golongan_D = 7500;
const batasjam = 48;
const upahLembur = 3000;

if (jamKerja > batasjam && golongan === 'A') {
    jamLembur = jamKerja - batasjam;
    gaji = (batasjam * golongan_A) + (jamLembur * upahLembur);

} else if (jamKerja > batasjam && golongan === 'B') {
    jamLembur =jamKerja - batasjam;
    gaji = (batasjam * golongan_B) + (jamLembur * upahLembur);

} else if (jamKerja > batasjam && golongan === 'C') {
    jamLembur =jamKerja - batasjam;
    gaji = (batasjam * golongan_C) + (jamLembur * upahLembur);

} else if (jamKerja > batasjam && golongan === 'D') {
    jamLembur =jamKerja - batasjam;
    gaji = (batasjam * golongan_D) + (jamLembur * upahLembur);

} else if (jamKerja <= batasjam && golongan === 'A') {
    gaji = jamKerja * golongan_A;

} else if (jamKerja <= batasjam && golongan === 'B') {
    gaji = jamKerja * golongan_B;

} else if (jamKerja <= batasjam && golongan === 'C') {
    gaji = jamKerja * golongan_C;

} else if (jamKerja <= batasjam && golongan === 'D') {
    gaji = jamKerja * golongan_D;

} else {
    console.log('Untuk Golongan tersebut tidak ada');
}
    console.log(`nama \t\t: ${nama} \nGolongan \t: ${golongan} \nJam kerja \t: ${jamKerja} \nJam lembur \t: ${jamLembur} \nTotal gaji \t: ${gaji}`);