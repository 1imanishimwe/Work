
let dropbtn = document.getElementById('dropbtn');
 dropbtn.addEventListener('click',()=>{
    document.getElementById("dropbtncomponent").classList.toggle("show");
 })

 let dropbtn2 = document.getElementById('dropbtn2');
 dropbtn2.addEventListener('click',()=>{
    document.getElementById("dropbtncomponent2").classList.toggle("show");
 })

 let myProgressBar = new CircularProgressBar(360, 360, 'my-container', {
    strokeSize: 30,
    backgroundColor: 'rgba(0,0,0,.35)',
    strokeColor: '#ff3333',
    showProgressNumber: false,
    centerIcon: 'img/done_icon_yellow.svg',
    oncomplete: () => console.log('Task completed!')
});