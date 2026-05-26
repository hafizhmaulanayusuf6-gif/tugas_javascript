function konversiDetik(totalDetik) {
    // Math.floor digunakan untuk membulatkan angka ke bawah
    const hari = Math.floor(totalDetik / 86400);
    const sisaSetelahHari = totalDetik % 86400;
    
    const jam = Math.floor(sisaSetelahHari / 3600);
    const sisaSetelahJam = sisaSetelahHari % 3600;
    
    const menit = Math.floor(sisaSetelahJam / 60);
    const detik = sisaSetelahJam % 60;

    return { hari, jam, menit, detik };
}

// Contoh Penggunaan Inputan:
let inputDetik = 400000; // Misalnya 400.000 detik
let hasil = konversiDetik(inputDetik);

console.log(`${inputDetik} detik sama dengan: 
${hasil.hari} hari, ${hasil.jam} jam, ${hasil.menit} menit, dan ${hasil.detik} detik.`);
