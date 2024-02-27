// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

/**
 * 
 * @param {string} word 
 * @returns {alert}
 */
function findPalindromeWord(word) {

    // tranform word in array, revers and reunite
    const wordArray = word.split('');
    const wordArrayReverse = wordArray.reverse()
    const wordReverse = wordArrayReverse.join('');
    
    // check if is a palindrome word
    if (word === wordReverse) {
        return alert('La parola è palindroma');
    } else {
        return alert('la parola non è palindroma');
    }

}

// recalls function
findPalindromeWord(prompt('insrisci una parola'));