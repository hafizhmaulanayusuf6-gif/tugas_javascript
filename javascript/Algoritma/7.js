const prompt = require('prompt-sync')({ sigint: true});

let uang, pecahan1000, pecahan500, pecahan100, pecahan50, pecahan25, sisa;

uang = parseInt(prompt('masukan uang : '));

pecahan1000 = Math.floor(uang / 1000);
sisa = uang % 1000;

pecahan500 = Math.floor(sisa / 500);
sisa = sisa % 500;

pecahan100 = Math.floor(sisa / 100);
sisa = sisa % 100;

pecahan50 = Math.floor(sisa / 50);
sisa = sisa % 50;

pecahan25 = Math.floor(sisa / 25);
sisa = sisa % 25;

console.log(pecahan1000, pecahan500, pecahan100, pecahan50, pecahan25);