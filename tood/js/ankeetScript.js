//tekst kastist lugemine
function nimiLugemine(){
let nimi=document.getElementById("nimi");
    let vastus=document.getElementById("vastus");
    //innerHTML -dünaamiliselt genireeri  teksti html'ina
    vastus.innerHTML="Tere hommikust, "+nimi.value;
    vastus.style.color="red";

    return nimi.value;
}
//radionupude valikud
function  suguValik(){
    let vastus2=document.getElementById("vastus2");
    let naine=document.getElementById("naine");
    let mees=document.getElementById("mees");
    let muu=document.getElementById("muu");

    //radio valikud
    let sugu="";
    if(naine.checked){
         sugu=naine.value; }
        else if(mees.checked){
            sugu=mees.value;
        } else if(muu.checked){
            sugu=muu.value;
    }   else{
             sugu="Palun vali sugu";
    }
        vastus2.innerHTML="valitud sugu on " +sugu;
        vastus2.style.color="darkblue";

        return sugu;
}
//checkboxi'i valik
function sportValik(){
    let vastus3=document.getElementById("vastus3");
    let ujumine=document.getElementById("ujumine");
    let poks=document.getElementById("poks");
    let suusatamine=document.getElementById("suusatamine");
    let jooksmine=document.getElementById("jooksmine");
    let uisutamine=document.getElementById("uisutamine");

    let sport="";
    if(ujumine.checked){
        sport+=ujumine.value + ", ";
    }
    if (poks.checked){
        sport+=poks.value+ ", ";
    }
    if (suusatamine.checked){
        sport+=suusatamine.value+ ", ";
    }
    if (jooksmine.checked){
        sport+=jooksmine.value+ ", ";
    }
    if (jooksmine.checked){
        sport+=jooksmine.value+ ", ";
    }
    if (uisutamine.checked){
        sport+=uisutamine.value+ " ";
    }
    if (sport==""){
        sport="sa ei teesporti"
    }
    vastus3.innerHTML=sport;
    return sport;
}
function tervitus(){
    let vastus4=document.getElementById("vastus4");
    let nimi= nimiLugemine();
    let sugu= suguValik();
    let spordiala= sportValik();

    vastus4.innerHTML = 'Sisestatud nimi on ' + nimi + '<br>' + 'Valitud sugu on ' + sugu + '<br>' + 'Valitud spordiala on: ' + spordiala;
    vastus4.style.backgroundColor = "Yellow";

}
function puhasta(){
    vastus.innerHTML="";
    vastus2.innerHTML="";
    vastus3.innerHTML="";
    vastus4.innerHTML="";
}