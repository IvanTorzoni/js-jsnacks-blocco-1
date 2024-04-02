// Chiedi un numero di 4 cifre all'utente
// e calcola la somma di tutte le cifre che compongono il numero.

// Chiedo all'utente un numero di quattro cifre
const num = prompt("Inserisci un numero di quattro cifre");

// Creo un array tramite la Array.from e porto la stringa precedentemente inserita dall'utente come numero. Splitto direttamente in 4 cifre separate per la somma
const digit = Array.from(num, Number);

// Creo le condizioni per eseguire il ciclo for: 
// Se il valore inserito è un numero e la lungezza dell'array è di 4 eseguo il ciclo
if ((isNaN(num) === false) && (digit.length === 4)){

    // Creo una variabile per la somma
    let sum = 0;

    // Eseguo il ciclo for
    for (let i = 0; i <= digit.length - 1; i++) {
        sum += digit[i]
    }

    // Stampo la somma
    console.log(sum);

    // Altrimenti stampo il seguente messaggio
} else {
    console.log("Il valore inserito non è valido")
}


