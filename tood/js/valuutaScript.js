function valuutaKalk(){
    let vastus3=document.getElementById('vastus3');
    let euro=document.getElementById('euro');
    let valuuta=document.getElementById('valuuta');

const dollar=1.12;
const yen=7.49;
const lyra= 55.30;
const zloty=4.384;

    if(valuuta.value=="dollar"){
        vastus3.innerHTML= euro.value+"€ = "+(euro.value*dollar).toFixed(2) + "$";
    }
    if(valuuta.value=="yen")
    {
        vastus3.innerHTML= euro.value+"€ = "+(euro.value*yen).toFixed(2) + "¥";

    }
    if(valuuta.value=="lyra")
    {
        vastus3.innerHTML= euro.value+"€ = "+(euro.value*lyra).toFixed(2) + "LYRA";

    }
    if(valuuta.value=="zloty")
    {
        vastus3.innerHTML= euro.value+"€ = "+(euro.value*zloty).toFixed(2) + "PLN";

    }

    if(valuuta.value=="")
    {
      vastus3.innerHTML= "sisesta valuuta õigesti"
    }
}