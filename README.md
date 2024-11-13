# Programiranje-Korisnickih-Interfejsa-Ispitni-Projekat

Ovaj repozitorijum poseduje izvorni kod aplikacije za ispit iz programiranja korisničkih interfejsa na smeru Računarske nauke, Fakulteta za Informatiku i Računarstvo Univerziteta Singidunum
## Tehnologije

Aplikacija je razvijana upotrebom frontend okruženja Angular 18. Pored toga korišćene su sledeće biblioteke:

    - [Angular Material](https://material.angular.io/)
   
## Strukutra aplikacije

Izvorni kod aplikacije koristi standardnu strukturu Angular projekta bez app.modules.ts datoteke koja nije potrebna upravo od verzije 18. Svi potrebni moduli se uvoze direktno u komponentama koje ih upotrebljavaju.

Prikaz svih direktorijuma:

    src/app - Glavni direktorijum koji sadrzi sve komponente
    src/models - Direktorijum u kome skladištimo definicije tipova/interfejsa potrebnih za brži razvoj aplikacije
    src/services - Direktorijum koji sadrži definicije servisa neophodnih za rad aplikacije

## Dodatne informacije

Aplikacija koristi Angular Router koji zahteva da prilikom puštanja aplikacije u produkciju svaka putanja bude redirektovana na index.html datoteku jer su rute definisane programski u javascript-u a ne fizički postajenjem fajlova.