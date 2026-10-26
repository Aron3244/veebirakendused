let auto1 = {
    mark: "Toyota",
    mudel: "Corolla",
    aasta: 2022,
    varv: "punane",
    lisavarustus: ["kliimaseade", "elektriaknad", "navigatsioonisüsteem"]
};

//Väljastamiseks trüki välja kogu objekt:

console.log(auto1);

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

let auto3 = {
    //omadused
    mark: "Toyota",
    mudel: "Corolla L",
    aasta: 2022,
    varv: "punane",
    omadused: ["kliimaseade", "elektriaknad", "navigatsioonisüsteem"],

    //meetodid
    taisnimi() {
        return this.mark + " " + this.mudel;
    },

    kuvaOmadused() {
        this.omadused.forEach(omadus => console.log(omadus));
    }
};

auto3.kuvaOmadused();


let autod1 = [
    { mark: 'Toyota', mudel: 'Corolla', aasta: 2007 },
    { mark: 'Honda', mudel: 'Civic', aasta: 2012 },
    { mark: 'Tesla', mudel: 'Model 3', aasta: 2019 }
];

//console.log(autod1);
//console.log(autod1[0]);
console.log(autod1[0].mark);


let autod2 = [
    { mark: 'Toyota', mudel: 'Corolla', aasta: 2007 },
    { mark: 'Honda', mudel: 'Civic', aasta: 2012 },
    { mark: 'Tesla', mudel: 'Model 3', aasta: 2019 }
];


autod2.forEach((auto4) => {
    console.log(`
    Mark: ${auto4.mark},
    Mudel: ${auto4.mudel},
    Aasta: ${auto4.aasta}
    `);
});

let raamat ={
    pealkiri: "Sipsik",
    autor: "Eno Raud",
    aasta: "1962",

    Kirjeldus: function (){
        return this.pealkiri + " " + this.autor + " " + this.aasta;
    },
        Aasta: function (uusAasta){
         this.aasta = uusAasta;

        }
    };
    console.log(raamat.Kirjeldus());
    raamat.Aasta("1970");
    console.log(raamat.Kirjeldus());



let raamatukogu = {
    raamatud: [
        { pealkiri: "Sipsik", autor: "Eno Raud", aasta: 1962 },
        { pealkiri: "Tõde ja õigus I", autor: "A. H. Tammsaare", aasta: 1926 },
        { pealkiri: "Kevade", autor: "Oskar Luts", aasta: 1912 },
        { pealkiri: "Rehepapp", autor: "Andrus Kivirähk", aasta: 2000 },
        { pealkiri: "Meelelahutaja", autor: "Sass Henno", aasta: 2022 }
    ],

    lisaRaamat: function(uusPealkiri, uusAutor, uusAasta) {
        this.raamatud.push({ pealkiri: uusPealkiri, autor: uusAutor, aasta: uusAasta });
    },

    kuvaKoguarv: function() {
        console.log(`Raamatukogus on kokku ${this.raamatud.length} raamatut.`);
    },

    uuedRaamatud: function() {
        let loendur = 0;
        this.raamatud.forEach((raamat) => {
            if (raamat.aasta > 2000) {
                loendur++;
            }
        });
        console.log(`Pärast 2000. aastat on ilmunud ${loendur} raamatut.`);
    },

    otsiAutoriJargi: function(otsitavAutor) {
        this.raamatud.forEach((raamat) => {
            if (raamat.autor.toLowerCase() === otsitavAutor.toLowerCase()) {
                console.log(`Leitud raamat: "${raamat.pealkiri}" (${raamat.aasta})`);
            }
        });
    }
};

raamatukogu.lisaRaamat("Nullpunkt", "Margus Karu", 2010);
raamatukogu.kuvaKoguarv();
raamatukogu.uuedRaamatud();
raamatukogu.otsiAutoriJargi("Eno Raud");

raamatukogu.raamatud.forEach((raamat) => {
    console.log(`
    Pealkiri: ${raamat.pealkiri},
    Autor: ${raamat.autor},
    Aasta: ${raamat.aasta}
    `);
});
