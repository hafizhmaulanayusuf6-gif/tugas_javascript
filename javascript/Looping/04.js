let jumlah, anggka, i;
jumlah = 0;
anggka = '';
for (i = 1; i<= 5; i++) {
    anggka += i + ' ';
    jumlah += i;
};

console.log(anggka.trim() + ' = ' + jumlah);
