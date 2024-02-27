//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

const play = document.getElementById('button')
const even = document.getElementById('select-even')
const numb = document.getElementById('select-number')


// al click del tasto leggo i dati inseriti dall'utente

play.addEventListener('click', function() {
const userChoice = even.value;
const userNumb = Number(numb.value);
console.log(userNumb);

// genero un numero casuale e lo sommo a quello dell'utente
const pcNumber = Math.floor(Math.random()*5) +1;
console.log(pcNumber);

const sumNumber = pcNumber + userNumb
console.log(sumNumber);


// verifico se è pari o dispri e determinpo se ha vinto l'utente

if (sumNumber % 2 == 0 && userChoice == 'even') {
    console.log('hai vinto');
    return alert (`hai vinto, il numero del computer era ${pcNumber}`)
} else if (sumNumber % 2 != 0 && userChoice == 'shots'){
    console.log('hai vinto');
    return alert (`hai vinto, il numero del computer era ${pcNumber}`)

} else {
    console.log('hai perso');
    return alert (`hai perso, il numero del computer era ${pcNumber}`)

}
}
) 



