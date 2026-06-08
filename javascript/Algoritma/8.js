const prompt = require('prompt-sync')({ sigint: true });

let cm, km, m, sisa;

cm = parseInt(prompt('masukan x : '));

km = Math.floor(cm / 100000);
sisa = cm % 100000;

m = Math.floor(sisa / 100);
sisa = sisa % 100;

cm = sisa;

console.log(`${km} km ${m} m ${cm} cm`);