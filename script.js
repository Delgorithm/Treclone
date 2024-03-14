// Déclaration de la variable BtnToDo pour la colonne "To do"
const btnToDo = document.querySelector('section:nth-of-type(1) button');
const articleToDo = document.querySelector('section:nth-of-type(1)');


let newArticle;
let articleParagraph;


btnToDo.addEventListener('click', () => {
    newArticle = document.createElement('article');
    const newTask = prompt("Quel To do dois-je ajouter ? : ");
    articleParagraph = document.createElement('p');
    articleParagraph.draggable = "true"
    

    articleParagraph.style.backgroundColor = "#a6e0a6";
    articleParagraph.style.padding = "1rem";
    articleParagraph.style.margin = "0.1rem";


    articleParagraph.innerText = newTask;
    newArticle.appendChild(articleParagraph);
    articleToDo.appendChild(newArticle);

    // On commence le drag & drop
    newArticle.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('Text', e.target.id);
        e.dataTransfer.effectAllowed = "move";
    });
})





// // Déclaration de la variable BtnDoing pour la colonne "Doing"
// const btnDoing = document.querySelector('section:nth-of-type(2) button');
// btnDoing.addEventListener('click', () => {
//     const articleDoing = document.querySelector('section:nth-of-type(2)');
//     const newDoing = document.createElement('article');
//     articleDoing.appendChild(newDoing);
// })

// // Déclaration de la variable BtnDone pour la colonne "Done"
// const btnDone = document.querySelector('section:nth-of-type(3) button');
// btnDone.addEventListener('click', () => {
//     const articleDoing = document.querySelector('section:nth-of-type(3)');
//     const newDone = document.createElement('article');
//     articleDoing.appendChild(newDone);
// })

// Boucle forEach pour sélectionner tous mes nouveaux articles


