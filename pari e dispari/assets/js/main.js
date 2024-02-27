//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

const play = document.getElementById('button')
const even = document.getElementById('select-even')
const numb = document.getElementById('select-number')


// al click del tasto...
play.addEventListener('click', function () {

    // leggo i dati inseriti dall'utente
    const userChoice = even.value;
    const userNumber = Number(numb.value);

    
    // genero il numero casuale del pc
    const pcNumber = Math.floor(Math.random() * 5) + 1;

    // verifico se la somma dei due numeri è pari o dispari usando una funzione e determino se ha vinto l'utente
    if (summIsEvenOrOdd(userNumber, pcNumber) == userChoice ) {
        
        return alert(`hai vinto, il numero del computer era ${pcNumber}`)

     } else {
        
        return alert(`hai perso, il numero del computer era ${pcNumber}`)

    }
}
)



/**
 somma 2 numeri e verifica se il risultato è pari o dispari* 
 * @param {number} numb 
 * @returns {string}
 */
function summIsEvenOrOdd(numb1, numb2) {
    let result;
    let numb = numb1 + numb2
    if (numb % 2 == 0) {
        result = 'even'
    } else {
        result = 'odd'
    }
    return result
}


