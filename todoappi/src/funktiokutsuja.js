/*
Kokeillaan erilaisia tapoja kutsua funktioita.

Tavallisia funktioita sekä lambda-funktioita:

Tavallinen funktio on muotoa:

    function nimi(parametrit) {
        koodi;
    }

Lambda-funktio on muotoa:

    (parametrit) => koodi

tai

    (parametrit) => { koodi; }

Myös sulut parametrien ympärillä on vapaaehtoiset, jos parametreja on vain yksi:

    parametri => koodi
*/

function main() {
    teeAsiaKahteenKertaan(sanoHei);

    teeAsiaKahteenKertaan(() => console.log("Heippa"));

    const teeAsiaKolmeenKertaan = (asia) => teeAsiaNkertaa(asia, 3);

    teeAsiaKahteenKertaan(
        () => teeAsiaKolmeenKertaan(sanoMoi)
    );
}

function sanoMoi() {
    console.log("Moi");
}

const sanoHei = () => {
    console.log("Hei");
}

function teeAsiaKahteenKertaan(asiaFunktio) {
    asiaFunktio();
    asiaFunktio();
}

function teeAsiaNkertaa(asiaFunktio, n) {
    for (let i = 0; i < n; ++i) {
        asiaFunktio();
    }
}

main()
