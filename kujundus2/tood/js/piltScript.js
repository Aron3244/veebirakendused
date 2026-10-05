//random pilt mis tuleb piltide massivist
function randomPilt() {
    const pildid =[
        '../pildid/1.png',
        '../pildid/2.png',
        '../pildid/3.png',
        '../pildid/tyhi.png',
    ];
    //random pilt
    //Math.floor - ümardab täisarvuni
    const pilt = Math.floor(Math.random() * pildid.length);
    const rpilt=pildid[pilt];
    const randomPilt=document.getElementById("randomPilt");
    randomPilt.src=rpilt;
}