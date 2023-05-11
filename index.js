// Create variables with html tags
// const listContainer = document.createElement('div');
// listContainer.classList.add('listcontainer');
let btnNewTask = document.getElementById('btnNewTask');
let inputTask = document.getElementById('inputTask');
let listcontainer = document.querySelector('.listcontainer');

let tasks = [];

//Create function addtask to listcontainer

btnNewTask.addEventListener('click', addTask);

function addTask(e){
    e.preventDefault();
    let newTask = {
        text: inputTask.value,
        checked: false,
    }
    const div = document.createElement('div');
    div.classList.add('div-container');
    const checkbox = document.createElement('input');
    checkbox.classList.add('checked');
    checkbox.setAttribute('type', 'checkbox');
    const removbtn = document.createElement('button');
    removbtn.classList.add('removbtn');
    removbtn.setAttribute('data-action', 'delete')
    removbtn.textContent = 'delete';
    const span = document.createElement('span');
    span.textContent = newTask.text;
    div.append(span,checkbox,removbtn);
    const li = document.createElement('li');
    li.append(div);
    listcontainer.append(li);
    inputTask.value = '';
    return  tasks.push(newTask);
}

//create function delete task

listcontainer.addEventListener('click', removeTask);

function removeTask(e){
    if (e.target.dataset.action === 'delete'){
        const parenttag = e.target.closest('li');
        parenttag.remove()
    }
}

//create function done task
listcontainer.addEventListener('click', doneTask);

function doneTask(e){
    if (e.target.checked === true){
        const parenttag = e.target.closest('li');
        parenttag.classList.add('done')
    }
}


