/* 
Jsnack 3
Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)
*/

const stringa = 'Ciao sono Simbad il Marinaio'

console.log(parolaGirata(stringa));


function parolaGirata(stringa){
   return stringa.split('').reverse().join('');
}