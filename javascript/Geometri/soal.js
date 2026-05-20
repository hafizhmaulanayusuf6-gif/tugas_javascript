const prompt = require('prompt-sync')({ sigint: true });

let x, y, z, k, j;

x = parseInt(prompt('masukan nilai x : '));
y = parseInt(prompt('masukan nilai y : '));
z = parseInt(prompt('masukan nilai z : '));

k = x + y - z;
j = ( x * y ) - ( z + x );

console.log(`nilai k       :${k}`);
console.log(`nilai j       :${j}`);