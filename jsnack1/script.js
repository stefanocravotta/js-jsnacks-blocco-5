
/* 
Jsnack 1
Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine.
*/

const zucchina = [
    {
        varieta: 'nera',
        peso: 12,
        lunghezza: '15cm'
    },
    {
        varieta: 'romanesca',
        peso: 20,
        lunghezza: '20cm'
    },
    {
        varieta: 'fiorentina',
        peso: 18,
        lunghezza: '5cm'
    },
    {
        varieta: 'napoletana',
        peso: 22,
        lunghezza: '35cm'
    },
    {
        varieta: 'tonde',
        peso: 28,
        lunghezza: '10cm'
    },
    {
        varieta: 'trombetta',
        peso: 8,
        lunghezza: '5cm'
    },
    {
        varieta: 'Crookneck',
        peso: 22,
        lunghezza: '55cm'
    },
    {
        varieta: 'rugoso friulano',
        peso: 18,
        lunghezza: '35cm'
    },
    {
        varieta: 'eccentriche',
        peso: 2,
        lunghezza: '20cm'
    },
    {
        varieta: 'pâtisson',
        peso: 10,
        lunghezza: '30cm'
    },
]

let sum = 0;

for(let key of zucchina){
    sum += key.peso; 
}

console.log(sum);
