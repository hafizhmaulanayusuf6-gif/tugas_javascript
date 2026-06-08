const prompt = require('prompt-sync')({ sigint: true });

let tinggi, beratbadanIdeal;

tinggi = parseInt(prompt('masukan tinggi : '));

beratbadanIdeal = (tinggi - 100) - 0.10 * (tinggi - 100);

console.log(beratbadanIdeal);