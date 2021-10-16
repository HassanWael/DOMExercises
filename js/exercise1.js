const changeText=function(bool){
    
    (bool)? document.getElementById("mydiv").textContent="Can I help you?":document.getElementById("mydiv").textContent="Hello World!"
}