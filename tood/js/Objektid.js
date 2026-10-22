let auto = {
    mark: "Toyota",
    mudel: "Corolla",
    aasta: 2022,
    varv: "punane",
    lisavarustus: ["kliimaseade", "elektriaknad", "navigatsioonisüsteem"]
};

//Väljastamiseks trüki välja kogu objekt:

    console.log(auto);



let auto2 = {
    //omadused
    mark: "Toyota",
    mudel: "Corolla L",
    aasta: 2022,
    varv: "punane",
    omadused: ["kliimaseade", "elektriaknad", "navigatsioonisüsteem"],

    //meetodid
    taisnimi: function() {
        return this.mark + " " + this.mudel;
    }
};

console.log(auto2.taisnimi());



let autod = [
    { mark: 'Toyota', mudel: 'Corolla', aasta: 2007 },
    { mark: 'Honda', mudel: 'Civic', aasta: 2012 },
    { mark: 'Tesla', mudel: 'Model 3', aasta: 2019 }
];

console.log(autod);

let autod2 = [
    { mark: 'Toyota', mudel: 'Corolla', aasta: 2007 },
    { mark: 'Honda', mudel: 'Civic', aasta: 2012 },
    { mark: 'Tesla', mudel: 'Model 3', aasta: 2019 }
];

//Lisab uue objekti massiivi lõppu
autod.push({ mark: 'BMW', mudel: '320i', aasta: 2015 });
autod.unshift({ mark: 'Ford', mudel: 'Focus', aasta: 2020 });


//Otsimine
let otsing = autod.find(auto=>auto.aasta > 2018 && auto.mark === "Tesla");
console.log(otsing);

let arvud = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filtreeritud = arvud.filter(arv => arv % 2 === 0);
console.log(filtreeritud);

autod.sort((a, b) => a.aasta - b.aasta);
console.log(autod);





// 1. RAAMATU OBJEKT
const raamat = {
    pealkiri: "Tõde ja õigus I",
    autor: "A. H. Tammsaare",
    aasta: 1926,

    kuvaKirjeldus() {
        console.log(`"${this.pealkiri}" - ${this.autor} (${this.aasta})`);
    },


    muudaAastat(uusAasta) {
        this.aasta = uusAasta;
        console.log(`Raamatu "${this.pealkiri}" uus aasta on: ${this.aasta}`);
    }
};

// 2. RAAMATUKOGU OBJEKT
const raamatukogu = {
    raamatud: [
        { pealkiri: "Kevade", autor: "Oskar Luts", aasta: 1912 },
        { pealkiri: "Harry Potter ja tarkade kivi", autor: "J.K. Rowling", aasta: 1997 },
        { pealkiri: "Mees, kes teadis ussisõnu", autor: "Andrus Kivirähk", aasta: 2007 },
        { pealkiri: "Sapiens", autor: "Yuval Noah Harari", aasta: 2011 }
    ],


    kuvaKõikRaamatud() {
        console.log("--- Raamatukogu nimekiri ---");
        this.raamatud.forEach(r => {
            console.log(`• "${r.pealkiri}" (${r.autor}, ${r.aasta})`);
        });
    },


    lisaRaamat(pealkiri, autor, aasta) {
        this.raamatud.push({ pealkiri, autor, aasta });
        console.log(`Lisatud uus raamat: "${pealkiri}"`);
    },


    kuvaKoguarv() {
        console.log(`Raamatukogus on kokku ${this.raamatud.length} raamatut.`);
    },


    uuedRaamatudPärast2000() {
        let loendur = 0;
        this.raamatud.forEach(r => {
            if (r.aasta > 2000) {
                loendur++;
            }
        });
        console.log(`Pärast 2000. aastat ilmunud raamatuid: ${loendur}`);
    },


    otsiPealkirjaJärgi(otsitavPealkiri) {
        let leitud = this.raamatud.find(r => r.pealkiri.toLowerCase() === otsitavPealkiri.toLowerCase());
        if (leitud) {
            console.log(`Leitud raamat: "${leitud.pealkiri}" autorilt ${leitud.autor}.`);
        } else {
            console.log(`Kahjuks raamatut pealkirjaga "${otsitavPealkiri}" ei leitud.`);
        }
    }
};

raamat.kuvaKirjeldus();
raamat.muudaAastat(1930);
raamatukogu.kuvaKõikRaamatud();
raamatukogu.lisaRaamat("Digitaalne ajastu", "John Doe", 2024);
raamatukogu.kuvaKoguarv();
raamatukogu.uuedRaamatudPärast2000();


