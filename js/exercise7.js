const songName = document.getElementById('songTextInput');
const elButton = document.getElementById('addButton');
const elList = document.getElementById('playlist');
let counter = 0;
var li;
var anchor;
console.log(songName)
console.log(elButton)
console.log(elList)

elButton.addEventListener('click', () => {

    if (!songName.value == " ") {
         li = document.createElement("li");
         anchor = document.createElement('a');
        li.appendChild(document.createTextNode(songName.value));
        elList.appendChild(li);
        li.appendChild(anchor);
        anchor.setAttribute('href', "#");
        anchor.style.float = 'right';
        anchor.innerText = "Del";
        li.id = counter;
        counter++;
        anchor.addEventListener('click', () => {
            elList.removeChild(elList.childNodes[counter]);
            counter--;
            });

    }
    else { window.alert("Enter a song name "); }
    console.log(counter);
})

