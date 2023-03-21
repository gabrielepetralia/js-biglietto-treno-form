// Creazione costanti utili
const scontoMinorenne = 20;
const scontoOver65 = 40;
const prezzoAlKm = 0.21;
const velTreno = 300;
const maxCP = 999999;
const minCP = 1;
const maxCarr = 9;
const minCarr = 1;

// Dichiarazione variabili utili
let nominativoPasseggero;
let km;
let ageCategory;
let prezzoBiglietto;
let cp;
let numCarrozza;
let tariffaApplicata;

// Dichiarazione variabili per comporre data e orario
let giorno;
let mese;
let anno;
let ora;
let minuti;

// Dichiarazione variabili per contenere data e orari
let data;
let orarioPartenza;
let orarioArrivo;

// Creazione collegamenti ai bottoni dell'HTML
const btnGenera = document.getElementById('btn-genera');
const btnAnnulla = document.getElementById('btn-annulla');

// Evento click bottone Genera
btnGenera.addEventListener('click', function(){
  // Lettura campi di input e assegnazione a variabili
  nominativoPasseggero = document.getElementById('nominativo-passeggero').value;
  km = document.getElementById('km-da-percorrere').value;
  ageCategory = document.getElementById('age-category').value;

  // Calcolo prezzo biglietto e scrittura sconto nell'HTML
  prezzoBiglietto = prezzoAlKm * km;
  if(ageCategory == "minorenne") {
    prezzoBiglietto -= ((scontoMinorenne/100)*prezzoBiglietto);
    document.getElementById("sconto").innerHTML = `<strong>Sconto:</strong> ${scontoMinorenne}%`;
    tariffaApplicata = "Minorenne";
  } else if(ageCategory == "over65") {
    prezzoBiglietto -= ((scontoOver65/100)*prezzoBiglietto);
    document.getElementById("sconto").innerHTML = `<strong>Sconto:</strong> ${scontoOver65}%`;
    tariffaApplicata = "Over 65";
  } else {
    document.getElementById("sconto").innerHTML = `<strong>Sconto:</strong> Nessuno sconto`;
    tariffaApplicata = "Standard";
  }

  // Scrittura nome,tariffa e prezzo nell'HTML
  document.getElementById("nominativo").innerHTML = `<strong>Nominativo:</strong> ${nominativoPasseggero}`;
  document.getElementById("prezzo-biglietto").innerHTML = `
  ${prezzoBiglietto.toFixed(2)}&euro;
  `;
  document.getElementById("tariffa").innerHTML = tariffaApplicata;

  // Lettura data e orario
  const now = new Date();
  giorno = now.getDate();
  mese = now.getMonth() + 1;
  anno = now.getFullYear();
  ora = now.getHours();
  minuti = now.getMinutes();

  // Controllo numero cifre
  if(giorno < 10) giorno = "0" + giorno;
  if(mese < 10) mese = "0" + mese;
  if(ora < 10) ora = "0" + ora;
  if(minuti < 10) minuti = "0" + minuti;

  // Assegnazione e scrittura nell'HTML dell'orario di partenza
  orarioPartenza = `
    ${ora}:${minuti}
  `;
  document.getElementById("orario-partenza").innerHTML = orarioPartenza;

  // Calcolo orario arrivo
  let minutiViaggio = (km / velTreno) * 60;

  for(let i=0; i < minutiViaggio; i++) {
    if (minuti < 59) {
      minuti ++;
    } else if (ora < 23) {
      ora ++;
      minuti = 0;
    } else {
      giorno ++;
      ora = 0;
      minuti = 0;
    }
  }

  if(ora < 10) ora = "0" + ora;
  if(minuti < 10) minuti = "0" + minuti;
  if(giorno < 10) giorno = "0" + giorno;

  // Assegnazione e scrittura nell'HTML di orario di arrivo e data
  orarioArrivo = `
    ${ora}:${minuti}
  `;
  document.getElementById("orario-arrivo").innerHTML = orarioArrivo;

  data = `
    ${giorno}/${mese}/${anno}
  `;
  document.getElementById("data-biglietto").innerHTML = data;

  // Generazione casuale del CP, controllo numero cifre e scrittura nell'HTML
  cp = Math.floor(Math.random() * (maxCP - minCP + 1) ) + minCP;

  if(cp < 100000) {
    cp = "0" + cp;
  } else if(cp < 10000) {
    cp = "00" + cp;
  } else if(cp < 1000) {
    cp = "000" + cp;
  } else if(cp < 100) {
    cp = "0000" + cp;
  } else if(cp < 10) {
    cp = "00000" + cp;
  }

  document.getElementById("codice-prenotazione").innerHTML = cp;

  // Generazione casuale del numero di carrozza e scrittura nell'HTML
  numCarrozza = Math.floor(Math.random() * (maxCarr - minCarr + 1) ) + minCarr;
  console.log(cp);
  
  document.getElementById("num-carrozza").innerHTML = numCarrozza;

  // Aggiunta classe per la generazione biglietto
  document.getElementById("biglietto").classList.add("genera-biglietto");
})

// Evento click bottone Annulla
btnAnnulla.addEventListener('click', function(){
  // Reset campi di input
  document.getElementById('nominativo-passeggero').value = "";
  document.getElementById('km-da-percorrere').value = "";
  document.getElementById('age-category').value = "adulto";

  // Rimozione classe per la generazione biglietto
  document.getElementById("biglietto").classList.remove("genera-biglietto");
})