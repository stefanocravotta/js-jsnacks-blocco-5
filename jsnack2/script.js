/* 
Jsnack 2
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15. Infine stampa separatamente quanto pesano i due gruppi di zucchine.
*/
const zucchina = [
    {
        varieta: 'nera',
        peso: 12,
        lunghezza: 15
    },
    {
        varieta: 'romanesca',
        peso: 20,
        lunghezza: 20
    },
    {
        varieta: 'fiorentina',
        peso: 18,
        lunghezza: 5
    },
    {
        varieta: 'napoletana',
        peso: 22,
        lunghezza: 35
    },
    {
        varieta: 'tonde',
        peso: 28,
        lunghezza: 10
    },
    {
        varieta: 'trombetta',
        peso: 8,
        lunghezza: 5
    },
    {
        varieta: 'Crookneck',
        peso: 22,
        lunghezza: 55
    },
    {
        varieta: 'rugoso friulano',
        peso: 18,
        lunghezza: 35
    },
    {
        varieta: 'eccentriche',
        peso: 2,
        lunghezza: 20
    },
    {
        varieta: 'pâtisson',
        peso: 10,
        lunghezza: 30
    },
]

const zucchineCorte = [];
const zucchineLunghe = [];

for(let key of zucchina){
    (key.lunghezza <= 15) ? zucchineCorte.push(key) : zucchineLunghe.push(key);
}

console.log(zucchineCorte);
console.log(zucchineLunghe);

let sumCorte = 0;
let sumLunghe = 0;

for (let key of zucchineCorte){
    sumCorte += key.peso;
}
for (let key of zucchineLunghe){
    sumLunghe += key.peso;
}

document.querySelector('.output1').prepend(sumCorte);
document.querySelector('.output2').prepend(sumLunghe);
