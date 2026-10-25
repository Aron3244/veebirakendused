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