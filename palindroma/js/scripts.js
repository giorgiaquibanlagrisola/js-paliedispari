/*

    Chiedere all'utente di inserire una parola
    Creare una funzione per capire se la parola inserita è palindroma

*/

const word = prompt('Scrivi la tua parola');
console.log('word', word, typeof word);

const reverseWord = word.split('').reverse().join('');

if (word == reverseWord) {
    console.log('è palindroma');
}
else {
    console.log('non è palindroma');
}