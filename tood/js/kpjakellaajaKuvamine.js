function tanaOn() {
    const now = new Date();

    const paev = now.getDate();
    const kuu = now.getMonth();
    const aasta = now.getFullYear();
    const tunnid = now.getHours();
    const minutid = now.getMinutes();

    let vastus = document.getElementById("vastus");

    vastus.innerHTML = 'Täna on ' + paev + '.' + kuu + '.' + aasta + '<br>' +
        'Kellaaeg on ' + tunnid + ':' + minutid;
}

function synnipaevani(){
    const synnipaev=new Date(2027, 5, 26); //aasta, kuu, päev
    const tana=new Date();

    const vahe=synnipaev.getTime()-tana.getTime();
    const paevad=vahe/(1000 * 60 * 60 * 24);

    let vastus2=document.getElementById("vastus2");

    vastus2.innerHTML="Minu sünnipäevani "+ paevad.toFixed(0) + "päeva";
}