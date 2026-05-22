const prompt = require('prompt-sync')({ sigint: true });

let nama = prompt('masukan nama : ');

console.log(`Apakabar ${nama}? Wish you luck!`);