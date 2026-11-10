//sirge joon
function sirgeJoon(){
    //määrame tahvli
    const tahvel=document.getElementById("tahvel");

    if(tahvel.getContext){
        let t= tahvel.getContext("2d");
        //joon
        t.beginPath();
        t.strokeStyle="red";
        t.lineWidth = 2;
        t.moveTo(50,50);//alguspunkt
        t.lineTo(150,200);//lõppunkt
        t.stroke();
    }
}
function puhasta(){
    const tahvel=document.getElementById("tahvel");
    if(tahvel.getContext){
        let t= tahvel.getContext("2d");
        t.clearRect(0,0,300,400);
    }
}
//kolmnurk
function kolmnurk(){
    const tahvel=document.getElementById("tahvel");

    if(tahvel.getContext){
        let t= tahvel.getContext("2d");
        //kolmnurk
        t.beginPath();
        t.strokeStyle="red";
        t.fillStyle="lightblue";
        t.lineWidth = 2;
        t.moveTo(50,50);//alguspunkt
        t.lineTo(150,200);//lõppunkt
        t.lineTo(50,200);
        t.lineTo(50,50);
        t.stroke();
        t.fill();
    }
}
function puhasta(){
    const tahvel=document.getElementById("tahvel");
    if(tahvel.getContext){
        let t= tahvel.getContext("2d");
        t.clearRect(0,0,300,400);
    }
}

function ristkylik()
{
        const tahvel=document.getElementById("tahvel");
        const laius=document.getElementById("laius");
        const korgus=document.getElementById("korgus");
        if(tahvel.getContext){
            let t= tahvel.getContext("2d");
            t.fillStyle="olive";
            t.fillRect(100,50,laius.value,korgus.value);// alguspunkt - x, y, laius, kõrgus
    }
}
function ring(){
    const tahvel=document.getElementById("tahvel");
    const r=document.getElementById("raadius");
    const varv=document.getElementById("varv");

    if(tahvel.getContext){
        let t= tahvel.getContext("2d");
        t.fillStyle=varv.value;
        t.arc(100,50,r.value,0, 2*Math.PI, true);// alguspunkt - x, y, raadius 2x180kraadi
        t.fill();
    }
}

function nagu(){
    const tahvel=document.getElementById("tahvel");

    if(tahvel.getContext){
        let t= tahvel.getContext("2d");
        t.beginPath();
        t.fillStyle="yellow";
        t.arc(140,170,50,0, 2*Math.PI, true);// alguspunkt - x, y, raadius 2x180kraadi
        t.fill();

    }
}

function silm1(){
    const tahvel=document.getElementById("tahvel");


    if(tahvel.getContext){
        let t= tahvel.getContext("2d");
        t.beginPath();
        t.fillStyle = "black";
        t.arc(120, 155, 8,0, 2*Math.PI, true);// alguspunkt - x, y, raadius 2x180kraadi
        t.fill();

    }
}
function silm2(){
    const tahvel=document.getElementById("tahvel");


    if(tahvel.getContext){
        let t= tahvel.getContext("2d");
        t.beginPath();
        t.fillStyle = "black";
        t.arc(160, 155, 8,0, 2*Math.PI, true);// alguspunkt - x, y, raadius 2x180kraadi
        t.fill();

    }
}
function suu(){
    //määrame tahvli
    const tahvel=document.getElementById("tahvel");

    if(tahvel.getContext){
        let t= tahvel.getContext("2d");
        t.beginPath();
        t.strokeStyle="black";
        t.lineWidth = 2;
        t.moveTo(110, 195);
        t.lineTo(170, 195);
        t.stroke();
    }
}




    function nina()
    {
        const tahvel=document.getElementById("tahvel");

        if(tahvel.getContext){
            let t= tahvel.getContext("2d");
            t.beginPath();
            t.fillStyle="black";
            t.fillRect(135, 165, 10, 15);// alguspunkt - x, y, laius, kõrgus
        }
    }
function kõrv1()
{
    const tahvel=document.getElementById("tahvel");

    if(tahvel.getContext){
        let t= tahvel.getContext("2d");
        t.beginPath();
        t.fillStyle="black";
        t.fillRect(75, 155, 15, 30);// alguspunkt - x, y, laius, kõrgus
    }
}
function kõrv2()
{
    const tahvel=document.getElementById("tahvel");

    if(tahvel.getContext){
        let t= tahvel.getContext("2d");
        t.beginPath();
        t.fillStyle="black";
        t.fillRect(190, 155, 15, 30);// alguspunkt - x, y, laius, kõrgus
    }
}


//pilt failist // drawImage()
function pilt(){
    const tahvel=document.getElementById("tahvel");
    if(tahvel.getContext) {
        let t = tahvel.getContext("2d");
        const fail =new Image();
        fail.src="https://img.magnific.com/free-psd/cute-3d-smiling-happy-face-emoji_84443-82699.jpg?semt=ais_hybrid&w=740&q=80";
        fail.onload=()=>{
            t. drawImage(fail, 50, 50, 100, 100);
        }
    }
}

function smile(){
    puhasta();
    silm1();
}


