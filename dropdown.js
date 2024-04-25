
let dropbtn = document.getElementById('dropbtn');
 dropbtn.addEventListener('click',()=>{
    document.getElementById("dropbtncomponent").classList.toggle("show");
 })

 let dropbtn2 = document.getElementById('dropbtn2');
 dropbtn2.addEventListener('click',()=>{
    document.getElementById("dropbtncomponent2").classList.toggle("show");
 })



module.exports = {
   theme: {
     extend: {
       fontFamily: {
         roboto: ['Roboto', 'sans-serif'],
         // Add more custom font families here as needed
       }
     }
   }
 }