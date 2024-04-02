// Crea un array vuoto.
// Chiedi per 6 volte all'utente di inserire un numero,
// se è dispari inseriscilo nell'array.

// Creo le richieste all'utente
const request1 = parseInt(prompt("Inserisci il primo numero"))
const request2 = parseInt(prompt("Inserisci il secondo numero"))
const request3 = parseInt(prompt("Inserisci il terzo numero"))
const request4 = parseInt(prompt("Inserisci il quarto numero"))
const request5 = parseInt(prompt("Inserisci il quinto numero"))
const request6 = parseInt(prompt("Inserisci il sesto numero"))

// creo un array vuoto su cui appoggiare i valori dispari
const arrayNum = []

// Creo le condizioni di ogni richiesta. Se il numero inserito è dispari, pusha il numero nell'array vuoto
if (request1 % 2 !== 0){
    arrayNum.push(request1)
} 
if (request2 % 2 !== 0){
    arrayNum.push(request2)
} 
if (request3 % 2 !== 0){
    arrayNum.push(request3)
} 
if (request4 % 2 !== 0){
    arrayNum.push(request4)
} 
if (request5 % 2 !== 0){
    arrayNum.push(request5)
} 
if (request6 % 2 !== 0){
    arrayNum.push(request6)
} 

console.log(arrayNum);