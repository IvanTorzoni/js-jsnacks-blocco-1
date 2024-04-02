// In un array sono contenuti i nomi degli invitati alla festa del grande
// Gatsby, chiedi all'utente il suo nome e comunicagli se può partecipare o
// no alla festa.


// Chiedo il nome all'invitato
const nameInvite = prompt("inserire il proprio nome per la verifica")

// Creo la "lista" degli invitati tramite l'array
const arrayInvite = ["Marta", "Claudio", "Sara", "Tommaso"]

// Creo una variabile booleana per il risultato
result = false

// Eseguo il ciclo e se il nome inserito dall'utente è uguale ad uno dei nomi sulla lista, porto la variabile risultato da false a true
for (let i = 0; i < arrayInvite.length; i++){
    if (nameInvite === arrayInvite[i]) {
        result = true
    } 
}

// Eseguo le condizioni
if (result === true){
    console.log("Accesso consentito");
} else {
    console.log("Nome non presente");
}