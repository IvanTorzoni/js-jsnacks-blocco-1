// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

const userNum1 = parseInt(prompt("Scegli un numero"))

const userNum2 = parseInt(prompt("Scegli un altro numero"))

if (userNum1 > userNum2){
    console.log(userNum1);
} else if (userNum1 < userNum2) {
    console.log(userNum2);
} else {
    console.log("Si prega di inserire due numeri diversi");
}