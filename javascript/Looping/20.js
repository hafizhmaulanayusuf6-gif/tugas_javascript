const prompt = require('prompt-sync')({ sigint: true });

let batasPerkalian = parseInt(prompt('masukan anggka perkalian: '));

console.log(`Masukkan Jumlah Perkalian: ${batasPerkalian}`);

for (let baris = 0; baris <= batasPerkalian; baris++) {
    
    for (let kolom = 0; kolom <= batasPerkalian; kolom++) {
        
        if (baris === 0 && kolom === 0) {
            process.stdout.write("*\t");
        } 
        else if (baris === 0) {
            process.stdout.write(kolom + "\t");
        } 
        else if (kolom === 0) {
            process.stdout.write(baris + "\t");
        } 
        else {
            let hasilKali = baris * kolom;
            process.stdout.write(hasilKali + "\t");
        }
    }
    
    console.log();
}