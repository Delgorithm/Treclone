const containerTodo = document.querySelector('main > article:nth-child(1)');
const containerDoing = document.querySelector('main > article:nth-child(2)');
const containerDone = document.querySelector('main > article:nth-child(3)');

const btnTodo = document.querySelector('article:nth-child(1) > section > button');
const btnDoing = document.querySelector('article:nth-child(2) > section > button');
const btnDone = document.querySelector('article:nth-child(3) > section > button');

btnCreateTask = document.querySelectorAll('button');

btnCreateTask.forEach((e) => {
    // Creation of new paragraph included into our new sections
    e.addEventListener('click', () => {
        if (e === btnTodo){
            createTask('section', 'sectionTodo', containerTodo, "#c0dfb1");
        } else if (e === btnDoing) {
            createTask('section', 'sectionTodo', containerDoing, "#b1cfdf");
        } else {
            createTask('section', 'sectionTodo', containerDone, "#dd7474");
        }
    });
});

function handleDragover(ev) {
    ev.preventDefault();
    ev.target.classList.add('hovered');
}

function handleDragleave(ev) {
    ev.preventDefault();
    ev.target.classList.remove('hovered');
}

function createTask(tag, classname = null, parent, color = null) {
    const element = document.createElement(tag);
    element.classList.add(classname);
    element.setAttribute('draggable', 'true');
    element.style.backgroundColor = color;
    parent.appendChild(element)
    
    const newText = document.createElement('p');
    const newPrompt = prompt('Que faut-il ajouter ? : ');
    newText.innerText = newPrompt;
    element.appendChild(newText);

    element.addEventListener('dragover', handleDragover);
    element.addEventListener('dragleave', handleDragleave);

    return element;
};

const myDragover = document.querySelectorAll('.sectionTodo');

myDragover.forEach((element) => {
    element.addEventListener('dragover', handleDragover);
    element.addEventListener('dragleave', handleDragleave);
    element.appendChild(sectionTodo)
});
