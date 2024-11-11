
// Izveido funkciju, kas izvada konsolē statisku tekstu, piem., tavu vārdu. Izsauc šo funkciju pārliecinoties, ka tā izvada vārdu.
// Izveido funkciju ar vienu parametru name. Izsauc šo funkciju kā argumentu padodot statisku tekstu, piem., savu vārdu
// Izveido funkciju, kura izvada konsolē skaitļus no 1 līdz 10
// Izveido funkciju ar diviem parametriem - skaitļiem,
//  kuri nosaka, no kura līdz kuram skaitlim veikt izvadi.
//  Izsauc šo funkciju, piem., ar argumentiem 5 un 8 un pārliecinies, ka izvade ir attiecīgi 5, 6, 7, 8


function name() {
    console.log("Kira");
}

name();
// --------------------
function customName(name) {
    console.log(name);
}

customName("Kira");
// -------------------

function skaitli(){
    for (let i = 1; i < 11; i++) {
        console.log(i);
    }
    
}

skaitli();

// -------------

console.log("////////////////////////////");

function divi(pirmais, otrais){
    for (let i = pirmais; i <= otrais; i++) {
        console.log(i);
        
    }
}

divi(5, 8);







