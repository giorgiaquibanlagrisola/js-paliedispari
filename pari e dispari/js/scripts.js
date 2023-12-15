/*

    L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
    Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
    Sommiamo i due numeri
    Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
    Dichiariamo chi ha vinto.

*/

const choice = prompt('Scegli tra pari e dispari');
console.log('choice', choice, typeof choice);

const userNumber = parseInt(prompt('Scegli un numero tra 1 e 5'));
console.log('userNumber', userNumber, typeof userNumber);

function generateNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const pcNumber = generateNumber(1, 5);
console.log('pcNumber', pcNumber, typeof pcNumber);
