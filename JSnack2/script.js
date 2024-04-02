// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

const string1 = prompt("Scegli una parola")

const string2 = prompt("Scegli un' altra parola")

if (string1.length > string2.length) {
    console.log(`${string2} ${string1}`);
} else if (string1.length < string2.length) {
    console.log(`${string1} ${string2}`);
} else {
    console.log("Si prega di inserire due parole di lunghezze diverse");
}