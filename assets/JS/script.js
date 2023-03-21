const scontoMinorenni = 20;
const scontoOver65 = 40;
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

document.getElementById("data-biglietto").innerHTML = data;

let orarioPartenza = `
  ${ora}:${minuti}
`;

document.getElementById("orario-partenza").innerHTML = orarioPartenza;

// Calcolo orario arrivo
// let minutiViaggio = (km / velTreno) * 60;

// for(let i=0; i < minutiViaggio; i++) {
//   if (minuti < 60) {
//     minuti ++;
//     console.log(minuti);
//   } 
//   else 
//   {
//     ora ++;
//     minuti = 0;
//   }
// }

let orarioArrivo = `
  ${ora}:${minuti}
`;

document.getElementById("orario-arrivo").innerHTML = orarioArrivo;

let prezzoTot = prezzoAlKm * km;

if(age < 18) {
  prezzoTot -= ((scontoMinorenni/100)*prezzoTot);
  ageCategory = "Minorenne";
}

if(age > 65) {
  prezzoTot = prezzoTot - ((scontoOver65/100)*prezzoTot);
  ageCategory = "Over 65";
}

document.getElementById("prezzo-biglietto").innerHTML = `
  ${prezzoTot.toFixed(2)}&euro;
`;

document.getElementById("nominativo").innerHTML = `
  ${nome} ${cognome}
`;

document.getElementById("age-category").innerHTML = ageCategory;