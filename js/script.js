// CONSEGNA ESERCIZIO

/* Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito23
*/

// Suddivido in Step
/*
1. Chiedere il nome;
2. Chiedere il cognome;
3. Chiedere il colore preferito;
4. Dichiaro le variabili dei dati ricevuti;
5. Dichiaro una variabile che concateni i dati ricevuti nome, cognome e colore;
6. Dichiaro variabile di output che verrà stampata +23 come da traccia;
7. Stampo sulla pagina HTML la variabile outputStr;
*/

//acquisisco valori dall'utente
const nome = prompt('Inserisci il tuo nome');

const cognome = prompt('Inserisci il tuo cognome');

const colore = prompt('Inserisci il tuo colore preferito');

// Variabile che concatena i dati ricevuti
const password = nome + cognome + colore;

// Variabile di output
const outputStr = `
  La password è ${password}23
`

// Stampo in HTML risultato 
document.getElementById("output").innerHTML = outputStr;