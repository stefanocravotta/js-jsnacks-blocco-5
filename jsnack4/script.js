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

const pesoBici = [];

for(let bici of biciDaCorsa){
    
    pesoBici.push(bici.peso)
    
}

 const biciLeggera = Math.min.apply(Math, pesoBici);

 console.log(biciLeggera);
 stampa(biciDaCorsa)

function stampa(bici){

    const{peso, nome} = bici

    container.innerHTML = `La bicicletta che pesa di meno è ${nome} di ${peso} kg ` 
} 
