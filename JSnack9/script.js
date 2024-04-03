// Calcola la somma e la media dei primi 10 numeri.

// creo una variabile per la somma
let sum = 0

// creo un ciclo per i primi 10 numeri
for (let i = 1; i <= 10; i++){
    console.log(i);
    // Incremento il numero precedente con in numero sucessivo in modo da ottenere la somma
    sum = sum + i;
}

// Creo la media dei 10 numeri
const average = sum / 10

// Stampo somma e media
console.log(`La somma dei 10 numeri è: ${sum}`);
console.log(`La media dei 10 numeri è: ${average}`);