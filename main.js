let myHeading = document.querySelector('button');

let buttonAdd = document.querySelector('.dodaj');
let buttonRemove = document.querySelector('.usun');
let pText = document.querySelector('.tekst');

buttonAdd.onclick = function () {

    pText.textContent = "test text";
    
}

buttonRemove.onclick = function () {
    pText.textContent = "";
}

