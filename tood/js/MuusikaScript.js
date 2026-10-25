function MuusikaKuulamisArv(){
    let tund=document.getElementById("tund");
    let vastus=document.getElementById("vastus");

    vastus.innerHTML=tund.value + " tundi";

    return tund.value;
}

function muusikValik(){
    let vastus2=document.getElementById("vastus2");
    let eeva=document.getElementById("eeva_talsi");
    let villu=document.getElementById("villu_tamme");
    let tonu=document.getElementById("tonu_trubetsky");
    let toomas=document.getElementById("toomas_sularaha");
    let muu=document.getElementById("muu");
    let pilt2=document.getElementById("pilt2");

    let muusik="";
    if(eeva.checked){
        muusik=eeva.value;
        pilt2.src="../pildid/EevaTalsi.JPG";
        pilt2.style.display="inline";
    }
    else if(villu.checked){
        muusik=villu.value;
        pilt2.src="../pildid/VilluTamme.jpg";
        pilt2.style.display="inline";
    }
    else if(tonu.checked){
        muusik=tonu.value;
        pilt2.src="../pildid/TonuTrubetsky.jpg";
        pilt2.style.display="inline";
    }
    else if(toomas.checked){
        muusik=toomas.value;
        pilt2.src="../pildid/ToomasSularaha.jpg";
        pilt2.style.display="inline";
    }
    else if(muu.checked){
        muusik=muu.value;
        pilt2.style.display="none";
    }
    else{
        muusik="Palun vali muusik";
        pilt2.style.display="none";
    }
    vastus2.innerHTML="Valitud muusik on " + muusik;

    return muusik;
}

function arvamusLugemine(){
    let Muusika=document.getElementById("Muusika");
    let vastusArvamus=document.getElementById("vastusArvamus");

    vastusArvamus.innerHTML="Sinu arvamus: " + Muusika.value;

    return Muusika.value;
}

function raadioValik(){
    let vastusRaadio=document.getElementById("vastusRaadio");
    let jah=document.getElementById("Jah");
    let ei=document.getElementById("Ei");
    let pilt1=document.getElementById("pilt1");

    let raadio="";
    if(jah.checked){
        raadio=jah.value;
        pilt1.src="../pildid/HeaTuju.jpg";
        pilt1.style.display="inline";
    }
    else if(ei.checked){
        raadio=ei.value;
        pilt1.src="../pildid/SadFace.png";
        pilt1.style.display="inline";
    }
    else{
        raadio="Palun vali vastus";
        pilt1.style.display="none";
    }
    vastusRaadio.innerHTML="Raadio kuulamine: " + raadio;

    return raadio;
}

function jaamadLugemine(){
    let Radio=document.getElementById("Radio");
    let vastusJaamad=document.getElementById("vastusJaamad");

    vastusJaamad.innerHTML="Sinu raadiojaamad: " + Radio.value;

    return Radio.value;
}

function MuusikaStiiliValik(){
    let vastus3=document.getElementById("vastus3");
    let Rock=document.getElementById("Rock");
    let Classic=document.getElementById("Classic");
    let Pop=document.getElementById("Pop");

    let stiil="";
    if(Rock.checked){
        stiil+=Rock.value + ", ";
    }
    if(Classic.checked){
        stiil+=Classic.value + ", ";
    }
    if(Pop.checked){
        stiil+=Pop.value + ", ";
    }
    if(stiil==""){
        stiil="sa ei kuula muusikat";
    }
    vastus3.innerHTML=stiil;

    return stiil;
}

function tervitus(){
    let koondvastus=document.getElementById("koondvastus");
    let tund=MuusikaKuulamisArv();
    let muusik=muusikValik();
    let arvamus=arvamusLugemine();
    let raadio=raadioValik();
    let jaamad=jaamadLugemine();
    let stiil=MuusikaStiiliValik();

    koondvastus.innerHTML='Kuulad muusikat '+tund+' tundi päevas'+'<br>'
        +'Valitud muusik: '+muusik+'<br>'
        +'Arvamus: '+arvamus+'<br>'
        +'Raadio kuulamine: '+raadio+'<br>'
        +'Raadiojaamad: '+jaamad+'<br>'
        +'Valitud stiilid: '+stiil;

    koondvastus.style.backgroundColor="yellow";
}

function puhasta(){
    document.getElementById("vastus").innerHTML="0 tundi";
    document.getElementById("vastus2").innerHTML="";
    document.getElementById("vastusArvamus").innerHTML="";
    document.getElementById("vastusRaadio").innerHTML="";
    document.getElementById("vastusJaamad").innerHTML="";
    document.getElementById("vastus3").innerHTML="";
    document.getElementById("koondvastus").innerHTML="";
    document.getElementById("koondvastus").style.backgroundColor="";
    document.getElementById("pilt1").style.display="none";
    document.getElementById("pilt2").style.display="none";
}