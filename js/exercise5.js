var pass1=document.getElementById('password1');
var pass2=document.getElementById('password2');
var err = document.getElementById('pw1_check');
var err2 = document.getElementById('pw2_check');
var bool_short=false;
var bool_samesame=false;

pass1.addEventListener('change',()=>{
 
   if(pass1.value.length<6){
    err.textContent="Too short "; bool_short=false;}else{
    err.textContent=" ";bool_short=true;}
    
    if(pass2.value!=pass1.value){
        err2.textContent="The two passwords must match ";bool_samesame=false;}else{
        err2.textContent=" ";bool_samesame=true;}
        showmaker();
    
});
pass2.addEventListener('change',()=>{
  
   if(pass2.value!=pass1.value){
    err2.textContent="The two passwords must match ";bool_samesame=false;}else{
    err2.textContent=" ";bool_samesame=true;}
    showmaker();


});

function showmaker(){
    (bool_samesame&&bool_short)?document.getElementById("submitBtn").style.display='':document.getElementById("submitBtn").style.display='none'

}
showmaker();

