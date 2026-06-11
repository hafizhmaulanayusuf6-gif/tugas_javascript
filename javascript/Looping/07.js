let jumlah = 0, anggka = '', i, j;

for (i = 1; i <= 6; i++ ) {
    if (i % 2 === 0) {
        j = i - 1;
        jumlah += j;
        anggka += j + ' ';
        
        if (j < 5) {
            anggka += '+ ';
        }
    }
};
console.log(anggka.trim() + ' = ' + jumlah);