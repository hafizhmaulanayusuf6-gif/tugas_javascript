const prompt = require('prompt-sync')({ sigint: true });

let x, y, z;

x = Number(prompt('Masukan nilai x : '));
y = Number(prompt('Masukan nilai y : '));
z = Number(prompt('Masukan nilai z : '));

if (x > y && x > z) {
    console.log('nila terbesar adalah :' + x)
} else if (y > x && y > z) {
    console.log('nilai terbesar adalah :' + y);
} else {
    console.log('nilai terbesar adalah :' + z);
};

if (x < y && x < z) {
    console.log('nila terkecil adalah :' + x)
} else if (y < x && y < z) {
    console.log('nilai terkecil adalah :' + y);
} else {
    console.log('nilai terkecil adalah :' + z);
};
