const prompt = require('prompt-sync')({ sigint: true });

let nilaiPixel, pixelBaru;

nilaiPixel = parseInt(prompt('masukan nilai pixel: '));

if (nilaiPixel < 0) {
    pixelBaru = 0;
} else if (nilaiPixel > 225) {
    pixelBaru = 225;
} else {
    pixelBaru = nilaiPixel;
};

console.log(`nilai pixel sebelum di cliping ${nilaiPixel}, setelah di cliping ${pixelBaru}`);