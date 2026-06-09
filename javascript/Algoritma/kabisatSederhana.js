const prompt = require('prompt-sync')({ sigint: true });

let tahun = parseInt(prompt('masukan tahun : '));

if (tahun % 4 === 0) {
    console.log('tahun kabisat');
} else {
    console.log('bukan tahun kabisat');
};