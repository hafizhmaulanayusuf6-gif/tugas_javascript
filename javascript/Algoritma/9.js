const prompt = require('prompt-sync')({ sigint: true });

let m, yard, kaki, inci;

m = parseInt(prompt('masukan m : '));

yard = m / 0.9144;
kaki = m / 0.3048;
inci = m / 0.0254;

console.log(`${yard.toFixed(2)}yard ${kaki.toFixed(2)}kaki ${inci.toFixed(2)}inci`);
