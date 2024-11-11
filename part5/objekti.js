
// Izveido mainīgo, kurā glabājas objekts, kas reprezentē automašīnu ar trim īpašībām: marku, modeli un gadu.
// Konsolē izvadi automašīnas marku un modeli, izmantojot gan dot notation, gan bracket notation.
// Izveido nosacījumu, kas pārbauda vai automašīna ir vecāka par 10 gadiem, un izdod attiecīgu paziņojumu.
// Palīgs darbam ar datumiem: 'let currentYear = new Date().getFullYear();'
// Izveido nosacījumu, kas pārbauda vai automašīna ir Toyota marka. Ja tā ir Toyota, izvada paziņojumu "Šī ir Toyota automašīna".
// Esošajam objektam pievieno jaunu atribūtu owner ar vērtību nezināms.

let marka;
let modelis;
let gads;

const car = {marka:'volvo', modelis:'v40', gads:2000};

console.log(car);

function gadaParbaude(){
    if (gads>2014) {
        console.log("Masina ir jaunaka par 10 gadiem!");
    } else {
        console.log("Masina ir vecaka par 10 gadiem..");
    }
}

gadaParbaude();

function markasParbaude(){
    if (marka == 'Toyota') {
        console.log("Šī ir Toyota automašīna");
    } else {
        console.log("Si ir - " + car.marka);
    }
}

markasParbaude();

car.owner = "Elans";
console.log(car);


