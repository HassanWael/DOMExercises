var counter=1;
window.addEventListener('load', (event) => {

   var div= document.getElementById("mydiv");
    div.style.backgroundColor=changeColors(div,Math.floor(Math.random()*(3)+1));
    div.addEventListener('click',()=>{
changeColors(div,counter);
console.log(counter);
    });


});

function changeColors(div,count){
    switch(count){
case 1: div.style.backgroundColor='red';break;
case 2: div.style.backgroundColor='green';break;
case 3: div.style.backgroundColor='blue';counter=0;break;
    }
    counter++;
}