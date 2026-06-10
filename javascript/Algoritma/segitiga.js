const prompt = require('prompt-sync')({ sigint: true });

let a, b, c;
a = parseInt(prompt('masukan a : '));
b = parseInt(prompt('masukan b : '));
c = parseInt(prompt('masukan c : '));

if (a + b <= c || a + c <= b || b + c <= a) {
    console.log('bukan segitiga');
} else {
    if (a === b && b === c) {
        console.log('segiti sama sisi');
    } else if (a === b || a === c || b === c) {
        console.log('segitiga sama kaki');
    } else {
        console.log('segitiga sembarang')
    }
};