// Calcola la somma e la media dei primi 10 numeri.

let sum = 0

for (let i = 0; i <= 10; i++){
    sum = sum + i;
}

const average = sum / 10

console.log(`La somma dei 10 numeri è: ${sum}`);
console.log(`La media dei 10 numeri è: ${average}`);