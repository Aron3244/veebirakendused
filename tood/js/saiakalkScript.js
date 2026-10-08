function saiaKalk(){
    let vastus=document.getElementById("vastus");
    let saiatyyp=document.getElementById("saiatyyp");
    const juustu=2.00;
    const mooni=1.50;
    const pontsik=3.00;
    const kaneeli=1.30;
    let kogus =document.getElementById("kogus");
    let pilt=document.getElementById("pilt");

    //if valikud selectedIndex
    //1.rida selectedIndex=0
    if(saiatyyp.selectedIndex===0)
    {
        vastus.innerHTML=`palun vali saia tüüp`;
        vastus.style.color="red";
        pilt.src="https://meieeluilu.ee/wp-content/uploads/2020/01/IMG_3158.jpg"
    }
    if(saiatyyp.selectedIndex===1)
    {
        vastus.innerHTML=
            "Sa valisid "+saiatyyp.value + '<br>' +
        "Valitud kogus on " + kogus.value + "tk" + '<br>' +
        "Kokku hind on "+
         mooni*kogus.value+"€";
        vastus.style.color="Blue";
        pilt.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSug1GYswKHSpT7e9yx3ha2txzFRapKv932DUcb5kM-XzFR9dTyXfOKNzA&s=10"
    }
    if(saiatyyp.selectedIndex===2)
    {
        vastus.innerHTML=      "Sa valisid "+saiatyyp.value + '<br>' +
            "Valitud kogus on " + kogus.value + "tk" + '<br>' +
            "Kokku hind on "+juustu*kogus.value+"€";
        vastus.style.color="Blue";
        pilt.src="https://erlandia.ee/wp-content/uploads/2024/05/Juustusai.png"
    }
    if(saiatyyp.selectedIndex===3)
    {
        vastus.innerHTML=      "Sa valisid "+saiatyyp.value + '<br>' +
            "Valitud kogus on " + kogus.value + "tk" + '<br>' +
            "Kokku hind on "+pontsik*kogus.value+"€";
        vastus.style.color="Blue";
        pilt.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcp6ic6_w0IRwrz77B79wphT1w8uY2FlRIj18G6uNu_g&s=10"
    }
    if(saiatyyp.selectedIndex===4)
    {
        //toFixed(2) - ümardab 2 kohta peale koma
        vastus.innerHTML=      "Sa valisid "+saiatyyp.value + '<br>' +
            "Valitud kogus on " + kogus.value + "tk" + '<br>' +
            "Kokku hind on "+(kaneeli*kogus.value).toFixed(2)+"€";
        vastus.style.color="Blue";
        pilt.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFKvLNZAxDCACpZML04DJXddPxS2ocs_SxpaTs3gUEig&s=10"
    }
}