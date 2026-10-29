// Anonüümse funktsiooni näide
/*var tervita = function() {
    console.log("Tere maailm!");
};

// Anonüümse funktsiooni kutsumine
tervita();

var summa = function(a, b) {
    return a + b;
};

var tulemus = summa(3, 5);
console.log(tulemus); // Väljund: 8

// Anonüümne funktsioon koos argumendiga
setTimeout(function() {
    console.log("Tere pärastlõunast!");
}, 1000);

var array = [1, 2, 3, 4, 5];

array.forEach(function(element) {
    console.log(element);
});*/

/*const array = [1, 2, 3, 4, 5];

array.forEach(function(element, index, array) {
    console.log("Element:", element);
    console.log("Index:", index);
    console.log("Array:", array);
});

(function() {
    var x = 10;
    console.log(x); // Output: 10
})();

const noolFunktsioon= () => {
    // funktsiooni keha
};

const noolFunktsioon = () => {
    console.log("Tere noolfunktsioon!")
};

noolFunktsioon();

const noolFunktsioon = () => console.log("Tere noolfunktsioon!");
noolFunktsioon();


//noolefunktsioon argumentidega
let tervita = (nimi) => {console.log(`Tere ${nimi}`)};
tervita("Juhan");

//noolefunktsioon lihtsustatud - KUI ARGUMENTE ON ÜKS, SIIS VÕIB KA NEED SULUD ÄRA JÄTTA
let tervita2 = nimi => console.log(`Tere ${nimi}`);
tervita2("Mari");

//kui kehas on rohkem ridu, siis sulud jäävad
let liitmine = (a, b) => {
    let result = a + b;
    return result;
};
console.log(liitmine(3,5));

//noolefunktsioon ja massiviist elementide kuvamine
const array = [1, 2, 3, 4, 5];
array.forEach(element => console.log(element));

const number = 5;
const isEven = number => number % 2 === 0 ? "paaris" : "paaritu";

console.log(isEven(number)); // Väljund: paaritu

const arvud = [1, 2, 3, 4, 5];

arvud.forEach(nr => {
    const paaris = nr % 2 === 0 ? "paaris" : "paaritu";
    console.log(`${nr} is ${paaris}`);
});

let nimed = ["Kati", "Marta", "Andres", "Jüri", "Liisa"];

nimed.forEach(function(nimi) {
    console.log(`<li>${nimi}</li>`);
});

let nimed = ["Kati", "Marta", "Andres", "Jüri", "Liisa"];

const kasutaja = function(nimi) {
    console.log(`<li>${nimi}</li>`);
};
nimed.forEach(kasutaja)

let nimed = ["Kati", "Marta", "Andres", "Jüri", "Liisa"];

//pikalt
const kasutaja = nimi => console.log(`<li>${nimi}</li>`);
nimed.forEach(kasutaja);

//lühidalt
nimed.forEach(nimi => console.log(`<li>${nimi}</li>`));

const teostaAJAXPäring = (url, callback) => {
    setTimeout(() => {
        const vastus = "Vastus andmebaasist";
        callback(vastus);
    }, 2000);
};

const callbackFunktsioon = (vastus) => {
    console.log("Vastus saadud:", vastus);
};

teostaAJAXPäring("https://api.example.com/data", callbackFunktsioon);*/

//1.Erinevad funktsioonid
// Klassikaline funktsioon
function NimiKlassikaline() {
    console.log("Aron");
}

// Noolefunktsioon
const NimiNool = () => console.log("Aron");

NimiKlassikaline();
NimiNool()


//2. Argumendiga funktsioon

function kuupaevEesti() {
    const kuud = [Jaanuar, Veebruar, Marts, April, Mai, Junni, Juuli, August, Spetember, Oktoober, November, Detsember];
}
console.log(kuud);