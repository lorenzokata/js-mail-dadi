var numUser = Math.floor(Math.random() * 6 + 1);
var numPc = Math.floor(Math.random() * 6 + 1);
var risultato;

risultato = 'I numeri sono uguali'

if (numUser > numPc) {
    risultato = 'Hai vinto!!'
} else if (numUser < numPc) {
    risultato = 'Ha vinto il Pc'
}

document.getElementById('risultato').innerHTML = risultato;

console.log(numUser);
console.log(numPc);
console.log(risultato);