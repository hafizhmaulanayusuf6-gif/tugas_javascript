for (let baris = 0; baris <= 6; baris++ ) {
    for (let kolom = 1; kolom < baris; kolom++) {
        process.stdout.write('*');
    }
    console.log('')
}

for (let kolom = 1; kolom <= 7; kolom++) {
    process.stdout.write("*");
}
console.log();

for (let baris = 5; baris >= 1; baris-- ) {
    for (let kolom = 1; kolom < baris; kolom++) {
        process.stdout.write('*');
    }
    console.log()
}