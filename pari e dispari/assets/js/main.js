//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

const play = document.getElementById('button')
const even = document.getElementById('select-even')
const numb = document.getElementById('select-number')


// al click del tasto leggo i dati inseriti dall'utente

play.addEventListener('click', function() {
userChoice = even.value;
userNumb = numb.value;


}
) 
// genero un numero casuale e lo sommo a quello dell'utente

// verifico se è pari o dispri e determinpo se ha vinto l'utente

// faccio apparire un messaggio