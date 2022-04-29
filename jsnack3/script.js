/* 
Jsnack 3
Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)
*/

const stringa = 'Ciao sono Simbad il Marinaio'

const parolaGirata = (stringa) => stringa.split('').reverse().join('');

console.log(parolaGirata(stringa));