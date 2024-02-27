//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
// Sommiamo i due numeri e tabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

const play = document.getElementById('button')
const even = document.getElementById('select-even')
const numb = document.getElementById('select-number')


// al click del tasto...
play.addEventListener('click', function () {


    // leggo i dati inseriti dall'utente
    const userChoice = even.value;
    const userNumber = Number(numb.value);

    
    // genero il numero casuale del pc con una funzione
    const pcNumber = randomNumber(5)


    // verifico se la somma dei due numeri è pari o dispari usando una funzione e determino se ha vinto l'utente
    if (summIsEvenOrOdd(userNumber, pcNumber) == userChoice ) {
        
        return alert(`hai vinto, il numero del computer era ${pcNumber}`)

     } else {
        
        return alert(`hai perso, il numero del computer era ${pcNumber}`)

    }
}
)


/**
 somma due numeri e determina se il risultato è un numero pari o dispari* 
 * @param {number} numb1 
 * @param {number} numb2 
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


/**
 genera un numero casuale da 1 a x* 
 * @param {number} x 
 * @returns {number}
 */
function randomNumber(x) {
    const result = Math.floor(Math.random() * x) + 1;
    return result
}
