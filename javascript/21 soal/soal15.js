const prompt = require('prompt-sync')({ sigint: true });

let password = Number(prompt('Masukan Password : '));

if ( password === 78821 ) {
    console.log('You are authenticated')
} else {
    console.log('You have no access')
};