function MuusikaKuulamisArv(){
    let tund=document.getElementById("tund");
    let vastus=document.getElementById("vastus");
    if(tund) {
        vastus.innerHTML=tund.value + " tundi";
        return tund.value;
    }
    return "";
}
function muusikValik(){
    let vastus2=document.getElementById("vastus2");
    let eeva=document.getElementById("eeva_talsi");
    let villu=document.getElementById("villu_tamme");
    let tonu=document.getElementById("tonu_trubetsky");
    let toomas=document.getElementById("toomas_sularaha");
    let muu=document.getElementById("muu");

    let muusik="Palun vali muusik";
    if(eeva && eeva.checked){ muusik=eeva.value; }
    else if(villu && villu.checked){ muusik=villu.value; }
    else if(tonu && tonu.checked){ muusik=tonu.value; }
    else if(toomas && toomas.checked){muusik=toomas.value; }
    else if(muu && muu.checked){ muusik=muu.value; }

    if(vastus2) {
        vastus2.innerHTML="valitud muusik on " + muusik;
        vastus2.style.color="lightblue";
    }
    return muusik;
}
function arvamusLugemine(){
    let muusika=document.getElementById("Muusika");
    let vastusArvamus=document.getElementById("vastusArvamus");
    if(muusika && vastusArvamus) {
        vastusArvamus.innerHTML=muusika.value;
        return muusika.value;
    }
    return "";
}
function raadioValik(){
    let vastusRaadio=document.getElementById("vastusRaadio");
    let jah=document.getElementById("Jah");
    let ei=document.getElementById("Ei");

    let raadio="Valik tegemata";
    if(jah && jah.checked){ raadio=jah.value; }
    else if(ei && ei.checked){ raadio=ei.value; }

    if(vastusRaadio) {
        vastusRaadio.innerHTML="raadio kuulamine: " + raadio;
    }
    return raadio;
}
function jaamadLugemine(){
    let radio=document.getElementById("Radio");
    let vastusJaamad=document.getElementById("vastusJaamad");
    if(radio && vastusJaamad) {
        vastusJaamad.innerHTML=radio.value;
        return radio.value;
    }
    return "";
}
function MuusikaStiiliValik(){
    let vastus3=document.getElementById("vastus3");
    let rock=document.getElementById("Rock");
    let classic=document.getElementById("Classic");
    let pop=document.getElementById("Pop");

    let sport="";
    if(rock && rock.checked){ sport+=rock.value + ", "; }
    if(classic && classic.checked){ sport+=classic.value+ ", "; }
    if(pop && pop.checked){ sport+=pop.value+ " "; }

    if (sport==""){ sport="sa ei valinud muusika stiili"; }
    else if(sport.endsWith(", ")) { sport = sport.slice(0, -2); }

    if(vastus3) { vastus3.innerHTML=sport; }
    return sport;
}
function tervitus(){
    let vastus4=document.getElementById("koondvastus");
    if(!vastus4) return;

    let tund=MuusikaKuulamisArv();
    let muusik=muusikValik();
    let arvamus=arvamusLugemine();
    let raadio=raadioValik();
    let jaamad=jaamadLugemine();
    let MuusikaStiil=MuusikaStiiliValik();

    vastus4.innerHTML='Tunde päevas: '+tund+'<br>'
        +'Lemmikmuusik: '+muusik+'<br>'
        +'Arvamus koolis: '+arvamus+'<br>'
        +'Kuulab raadiot: '+raadio+'<br>'
        +'Raadiojaamad: '+jaamad+'<br>'
        +'Muusikastiilid: '+MuusikaStiil;

    vastus4.style.backgroundColor="green";
}
function puhasta(){
    if(document.getElementById("vastus")) document.getElementById("vastus").innerHTML="";
    if(document.getElementById("vastus2")) document.getElementById("vastus2").innerHTML="";
    if(document.getElementById("vastusArvamus")) document.getElementById("vastusArvamus").innerHTML="";
    if(document.getElementById("vastusRaadio")) document.getElementById("vastusRaadio").innerHTML="";
    if(document.getElementById("vastusJaamad")) document.getElementById("vastusJaamad").innerHTML="";
    if(document.getElementById("vastus3")) document.getElementById("vastus3").innerHTML="";
    if(document.getElementById("koondvastus")) {
        document.getElementById("koondvastus").innerHTML="";
    }
}
