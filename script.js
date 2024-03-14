// Déclaration de la variable BtnToDo pour la colonne "To do"
let newArticle;
let articleParagraph;

function createArticle(section) {
    newArticle = document.createElement('article');
    const task = prompt(`Quelle tâche pour '${section}' ? : `);
    articleParagraph = document.createElement('p');
    
    articleParagraph.style.padding = "1rem";
    articleParagraph.style.margin = "0.4rem";
    articleParagraph.innerText = task;

    articleParagraph.draggable = true;

    newArticle.appendChild(articleParagraph);
    console.log(`Section : ${section} - fait`);
};

// Todo button
const btnToDo = document.querySelector('section:nth-of-type(1) button');
const articleToDo = document.querySelector('section:nth-of-type(1)');
btnToDo.addEventListener('click', () => {
    createArticle('Doing');
    articleParagraph.style.background = '#7cc5ff';
    articleToDo.appendChild(newArticle);
});

// Doing boutton
const btnDoing = document.querySelector('section:nth-of-type(2) button');
const articleDoing = document.querySelector('section:nth-of-type(2)');
btnDoing.addEventListener('click', () => {
    createArticle('Doing');
    articleParagraph.style.background = '#7cff9b';
    articleDoing.appendChild(newArticle);
});

// Done Boutton
const btnDone = document.querySelector('section:nth-of-type(3) button');
const articleDone = document.querySelector('section:nth-of-type(3)');
btnDone.addEventListener('click', () => {
    createArticle('Done');
    articleParagraph.style.background = '#ff937c';
    articleDone.appendChild(newArticle);
});

for (article of newArticle) {
    article.addEventListener('dragstart', (e) => {
        let selected = e.target;


    })
}

// On va passer sur des classes et des id car mon cerveau chauffe trop