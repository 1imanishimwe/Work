
// dropbutton
// dropcontent

let dropbutton=document.getElementById("dropbutton");
dropbutton.addEventListener('click',()=>{
    document.getElementById('dropcontent').classList.toggle('show');
})

let dropbuttonsecond=document.getElementById("dropbuttonsecond");
dropbuttonsecond.addEventListener('click',()=>{
    document.getElementById('dropcontentsecond').classList.toggle('show');
})

let buttondot=document.getElementById('buttondot');
buttondot.addEventListener('click',()=>{
    document.getElementById('dotcontent').classList.toggle('show');
})