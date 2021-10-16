var divColors;
var divSelected;
function initGrid() {
    // collect colors in an array
    var colors = [];
    var range = ["00", "33", "66", "99", "cc", "ff"];

    for (var r = 0; r < range.length; r++) {
        for (var g = 0; g < range.length; g++) {
            for (var b = 0; b < range.length; b++) {
                colors.push("#" + range[r] + range[g] + range[b]);
            }
        }
    }
    colors.forEach((color)=>{
            var square = document.createElement('div');
            square.style.backgroundColor=color;
            square.setAttribute('class',"square"); 
            square.setAttribute('id',color); 
            square.setAttribute('width',"10px"); 
            divColors.appendChild(square);
            square.addEventListener('click',()=>{
                divSelected.style.backgroundColor=square.getAttribute('id');
                divSelected.innerText= hexToRgb(square.getAttribute('id'));
            });
           
    });
    // TODO complete the rest
}
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if(result){
        var r= parseInt(result[1], 16);
        var g= parseInt(result[2], 16);
        var b= parseInt(result[3], 16);
        return "rgb("+r+","+g+","+b+")";//return 23,14,45 -> reformat if needed 
    } 
    return null;
}
window.onload = function () {
divColors=document.getElementById('colors');
divSelected=document.getElementById('selected');
    initGrid();
}
