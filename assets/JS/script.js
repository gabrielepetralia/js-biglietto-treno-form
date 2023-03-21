const nome = prompt("Inserisci il tuo nome");
const cognome = prompt("Inserisci il tuo cognome");
const km = prompt("Inserisci il numero di km che vuoi percorrere");
const age = prompt("Inserisci la tua età");
const prezzoAlKm = 0.21;
const velTreno = 300;
let ageCategory = "Adulto";

const now = new Date();
let giorno = now.getDate();
let mese = now.getMonth() + 1;
let anno = now.getFullYear();
let ora = now.getHours();
let minuti = now.getMinutes();

if(giorno < 10) giorno = "0" + giorno;
if(mese < 10) mese = "0" + mese;
if(ora < 10) ora = "0" + ora;
if(minuti < 10) minuti = "0" + minuti;

const data = `
  ${giorno}/${mese}/${anno}
`;

document.getElementById("dataBiglietto").innerHTML = data;

let orarioP = `
  ${ora}:${minuti}
`;

document.getElementById("orarioPartenza").innerHTML = orarioP;

let minutiViaggio = (km / velTreno) * 60;

for(let i; i < minutiViaggio; i++) {
  if (minuti < 60) {
    minuti ++;
    console.log(minuti);
  } 
  else 
  {
    ora ++;
    minuti = 0;
  }
}

let orarioA = `
  ${ora}:${minuti}
`;

document.getElementById("orarioArrivo").innerHTML = orarioA;

let prezzoTot = prezzoAlKm * km;

if(age < 18) {
  prezzoTot -= ((20/100)*prezzoTot);
  ageCategory = "Minorenne";
}

if(age > 65) {
  prezzoTot = prezzoTot - ((40/100)*prezzoTot);
  ageCategory = "Over 65";
}

document.getElementById("prezzoBiglietto").innerHTML = `
  ${prezzoTot.toFixed(2)}&euro;
`;

document.getElementById("nominativo").innerHTML = `
  ${nome} ${cognome}
`;

document.getElementById("categoriaEta").innerHTML = ageCategory;