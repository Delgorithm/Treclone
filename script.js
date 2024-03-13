// Déclaration de la variable BtnToDo pour la colonne "To do"
const btnToDo = document.querySelector('section:nth-of-type(1) button');
btnToDo.addEventListener('click', () => {
    console.log('To do');
})

// Déclaration de la variable BtnDoing pour la colonne "Doing"
const btnDoing = document.querySelector('section:nth-of-type(2) button');
btnDoing.addEventListener('click', () => {
    console.log('Doing');
})

// Déclaration de la variable BtnDone pour la colonne "Done"
const btnDone = document.querySelector('section:nth-of-type(3) button');
btnDone.addEventListener('click', () => {
    console.log('Done');
})

