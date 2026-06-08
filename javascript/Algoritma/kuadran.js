const prompt = require('prompt-sync')({ sigint: true });

let x, y;

x = parseInt(prompt('masukan nilai x : '));
y = parseInt(prompt('masukan nilai y : '));

if (x > 0 && y > 0) {
    console.log('titik P terletak di kuadran I');
} else if (x < 0 && y > 0) {
    console.log('titik P terletak di kuadran II');
} else if (x < 0 && y < 0) {
    console.log('titik P terletak di kuadran III');
} else if (x > 0 && y < 0) {
    console.log('titik P terletak di kuadran IV');
} else {
    console.log('titik P tidak terletak di kuadran manapun');
}; 