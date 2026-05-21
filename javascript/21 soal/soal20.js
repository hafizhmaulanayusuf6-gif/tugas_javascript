const prompt = require('prompt-sync')({ sigint: true });

let huruf = prompt('masukan huruf :').toLowerCase;

if (huruf === 'a' || huruf === 'i' || huruf === 'u' || huruf === 'e' || huruf === 'o') {
    console.log('Ini adalah huruf vokal ')
} else if (huruf >= 'a' && huruf <= 'z') {
    // konsonan
} else {
    // bukan huruf
}