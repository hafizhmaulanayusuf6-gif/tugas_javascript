const prompt = require('prompt-sync')({ sigint: true });

let a, b, c, arr, nilai;
a = parseInt(prompt('masukan nilai a: '));
b = parseInt(prompt('masukan nilai b: '));
c = parseInt(prompt('masukan nilai c: '));
arr = [a, b, c]

arr.sort((x, y) => x - y);
console.log(`urutan terkecil ke terbesar: ${arr[0]}, ${arr[1]}, ${arr[2]}`);

