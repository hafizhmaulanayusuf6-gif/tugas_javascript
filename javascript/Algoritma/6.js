const prompt = require('prompt-sync')({ sigint: true });

let x, y, z, temp;

x = parseInt(prompt('masukan nilai x : '));
y = parseInt(prompt('masukan nilai y : '));
z = parseInt(prompt('masukan nilai z : '));

temp = x;
x = y;
y = z;
z = temp;

console.log(x, y, z);