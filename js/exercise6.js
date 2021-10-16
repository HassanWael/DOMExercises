var show1 = document.getElementById('p1_show');
var show2 = document.getElementById('p2_show');
var show3 = document.getElementById('p3_show');
var hide1 = document.getElementById('hide1');
var hide2 = document.getElementById('hide2');
var hide3 = document.getElementById('hide3');

hide1.addEventListener('click', () => {
    document.getElementById('p1_text').style.display = 'none';
});
hide2.addEventListener('click', () => {
    document.getElementById('p2_text').style.display = 'none';
});
hide3.addEventListener('click', () => {
    document.getElementById('p3_text').style.display = 'none';
});
show1.addEventListener('click', () => {
    document.getElementById('p1_text').style.display = '';
});
show2.addEventListener('click', () => {
    document.getElementById('p2_text').style.display = '';
});
show3.addEventListener('click', () => {
    document.getElementById('p3_text').style.display = '';
});
