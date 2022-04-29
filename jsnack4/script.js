/*  
Jsnack 4
Crea un array di oggetti, in cui ogni oggetto descrive una bici da corsa con le seguenti proprietà: nome e peso.
Stampa a schermo la bici con peso minore utilizzando destructuring e template literal
*/

const biciDaCorsa = [
    {
        nome: 'Argon 18',
        peso: 9.3
    },
    {
        nome: 'Bottecchia',
        peso: 6.8
    },
    {
        nome: 'Atala',
        peso: 7.9
    },
    {
        nome: 'Bixxis',
        peso: 8.1
    },
]

const container = document.getElementById('container');

let weight = biciDaCorsa[0].peso;
let biciLeggera = {};

for(let bici of biciDaCorsa){

    const {peso} = bici;

    if(weight > peso){
        weight = peso;
        biciLeggera = bici;
    }
  
}

stampa(biciLeggera);

function stampa(bici){

    const {nome,peso} = bici;

    container.innerHTML = `La bicicletta che pesa di meno è ${nome} di ${peso} kg ` 
} 
