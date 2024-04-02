// Il software deve chiedere per 10 volte all'utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

// Richieste all' utente dei 10 numeri
const num1 = parseInt(prompt("Inserisci il primo numero"))
const num2 = parseInt(prompt("Inserisci il secondo numero"))
const num3 = parseInt(prompt("Inserisci il terzo numero"))
const num4 = parseInt(prompt("Inserisci il quarto numero"))
const num5 = parseInt(prompt("Inserisci il quinto numero"))
const num6 = parseInt(prompt("Inserisci il sesto numero"))
const num7 = parseInt(prompt("Inserisci il settimo numero"))
const num8 = parseInt(prompt("Inserisci l' ottavo numero"))
const num9 = parseInt(prompt("Inserisci il nono numero"))
const num10 = parseInt(prompt("Inserisci il decimo numero"))

// Faccio la somma dei numeri dell' utente
const sum = num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9 + num10

// Se la somma è un numero stampo la somma alla console
if (isNaN(sum) === false){
    console.log(`La somma dei tuoi numeri inseriti è di ${sum}`);
    // altrimenti se è stato inserito un valore non valido o è stato omesso un numero stampo il seguente messaggio in console
} else {
    console.log("E' stato inserito un valore non valido. Si prega di riprovare");
}


