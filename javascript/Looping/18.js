const prompt = require('prompt-sync')({ sigint: true });

let anggka, perkalian, format, i;
anggka = parseInt(prompt('masukan anggka: '));

for (i = 1; i <= 5; i++) {
    perkalian = anggka * i;
    format = `${anggka} x ${i} = ${perkalian}`;
    console.log(format);
}