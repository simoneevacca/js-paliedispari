// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma



// inserire una parola in una variabile

const word = 'avere';
console.log(word);

// trasformare la parola in un array

const wordArray = word.split('');

// invertire l'ordine dell'array

const wordArrayReverse = wordArray.reverse()

const wordReverse = wordArrayReverse.join('');
console.log(wordReverse);

// verificare se l'array invertita è uguale a quella originale

if (word === wordReverse) {
    console.log('ciao');
} else {
    console.log('strunz');
}

//stampare il risultato