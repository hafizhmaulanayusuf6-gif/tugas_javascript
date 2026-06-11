for (let baris = 6; baris >= 1; baris-- ) {
    for (let kolom = 1; kolom < baris; kolom++) {
        process.stdout.write('*');
    }
    console.log()
}