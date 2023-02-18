//changement d'image
let myImage = document.querySelector('img');

myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/recette-crepe.jpg') {
      myImage.setAttribute('src', 'images/recette-crepe.jpg');
    } else {
      myImage.setAttribute('src', 'images/crepesnutella.jpg');
    }
});

// message personnalisé avec bouton utilisateur

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
	let myName = prompt('Nom Prénom');
	localStorage.setItem('Rambault',myName);
	myHeading.textContent = 'Recette de pâte à crêpes ';
}

if (!localStorage.getItem('nom')){
	setUserName();
} else {
	let storedName = localStorage.getItem('nom');
	myHeading.textContent = 'Recette de pâte à crêpes ' ;
}
myButton.addEventListener('click', function() {
	setUserName();
});

