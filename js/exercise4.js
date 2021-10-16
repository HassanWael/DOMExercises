var form =document.getElementsByName("form");
var text =document.getElementById('text');
console.log(form);
console.log(form[0][1].value);

form[0][1].addEventListener('change',()=>{

    text.style.fontSize=form[0][1].value;

        });
form[0][0].addEventListener('change',()=>{

    text.style.fontFamily=form[0][0].value;

        });
form[0][4].addEventListener('change',()=>{

    (form[0][4].checked) ? text.style.textDecoration='underline':text.style.textDecoration='none';

        });
form[0][3].addEventListener('change',()=>{

    (form[0][3].checked) ? text.style.fontWeight='bold':text.style.fontWeight='';

        });
form[0][2].addEventListener('change',()=>{

    (form[0][2].checked) ? text.style.fontStyle='italic':text.style.fontStyle='';

        });



function changeText(){
    text.style.color='green';
}
changeText();