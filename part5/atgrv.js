
// Izveido funkciju ar diviem parametriem - skaitļiem, kuri nosaka, no kura līdz kuram skaitlim veikt izvadi.
//  Izsauc šo funkciju, piem., ar argumentiem 5 un 8 un pārliecinies, ka izvade ir attiecīgi 5, 6, 7, 8
// Izveido funkciju, kas atgriež statisku tekstu, piemēram, tavu vārdu.
//  Izsauc šo funkciju, saglabājot atgriezto vērtību jaunā mainīgajā. Konsolē izvadi jaunā mainīgā vērtību.
// Izveido funkciju, kas pieņem divus skaitļus kā parametrus un atgriež to summu. Izsauc šo funkciju, padodot divus skaitļus, un konsolē izvadi atgriezto vērtību.
// Izveido funkciju, kas pieņem divus skaitļus un atgriež lielāko no tiem. Izsauc šo funkciju ar dažādiem skaitļiem un pārbaudi, vai tiek atgriezts pareizais rezultāts.


function divi(nr1, nr2){
    for (let i = nr1; i <= nr2; i++) {
        console.log(i);
        
    }
}

divi(5,8);

let vards = "Kira";
function atgriez(){

    return vards;
}

atgriez();

