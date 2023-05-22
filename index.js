// variables with html tags
let btnNewTask = document.getElementById('btnNewTask');
let inputTask = document.getElementById('inputTask');
let listcontainer = document.querySelector('.listcontainer');

let tasks = [];

//function to render saved data from localstorage

renderPage();

function renderPage() {
    if (!tasks.length){
        return console.log(`array is empty`);
    }
    let tasksData = localStorage.getItem('tasks');
    tasks = JSON.parse(tasksData);
    tasks.forEach((task) => {
        const div = document.createElement('div');
        div.classList.add('div-container');
        const checkbox = document.createElement('input');
        checkbox.classList.add('checked');
        checkbox.setAttribute('type', 'checkbox');
        const removbtn = document.createElement('button');
        removbtn.classList.add('removbtn');
        removbtn.setAttribute('data-action', 'delete')
        removbtn.textContent = 'x';
        const editbtn = document.createElement('button');
        editbtn.classList.add('editbtn');
        editbtn.setAttribute('data-action', 'edit')
        editbtn.textContent = 'edit';
        const span = document.createElement('span');
        span.textContent = task.text;
        span.setAttribute('id', `${task.id}`);
        span.append(editbtn)
        div.append(span, checkbox, removbtn);
        const li = document.createElement('li');
        li.setAttribute('id', `${task.id}`);
        li.append(div);
        if (task.status === true) {
            li.classList.add('done');
            checkbox.checked = true;
        } else if (task.status === false) {
            li.classList.remove('done');
            checkbox.checked = false;
        }
        listcontainer.append(li);
    });
}

//function addtask to listcontainer

btnNewTask.addEventListener('click', addTask);

function addTask(e) {
    e.preventDefault();
    let newTask = {
        text: inputTask.value,
        status: false,
        id: Date.now(),
    }
    if (newTask.text === '') {
        return
    } else {
        const div = document.createElement('div');
        div.classList.add('div-container');
        const checkbox = document.createElement('input');
        checkbox.classList.add('checked');
        checkbox.setAttribute('type', 'checkbox');
        const removbtn = document.createElement('button');
        removbtn.classList.add('removbtn');
        removbtn.setAttribute('data-action', 'delete')
        removbtn.textContent = 'x';
        const editbtn = document.createElement('button');
        editbtn.classList.add('editbtn');
        editbtn.setAttribute('data-action', 'edit')
        editbtn.textContent = 'edit';
        const span = document.createElement('span');
        span.textContent = newTask.text;
        span.setAttribute('id', `${newTask.id}`);
        span.append(editbtn)
        div.append(span, checkbox, removbtn);
        const li = document.createElement('li');
        li.setAttribute('id', `${newTask.id}`);
        li.append(div);
        listcontainer.append(li);
        inputTask.value = '';
        tasks.push(newTask);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
}

//function delete task

listcontainer.addEventListener('click', removeTask);

function removeTask(e) {
    if (e.target.dataset.action === 'delete') {
        const parenttag = e.target.closest('li');
        const id = Number(parenttag.id);
        tasks = tasks.filter((task) => task.id !== id);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        parenttag.remove()
    }
}


//function done task
listcontainer.addEventListener('click', doneTask);

function doneTask(e) {
    if (e.target.checked === true) {
        const parenttag = e.target.closest('li');
        parenttag.classList.add('done');
        const id = Number(parenttag.id);
        tasks.forEach((task) => {
            if (task.id === id) {
                task.status = true;
            }
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    } else if (e.target.checked === false) {
        const parenttag = e.target.closest('li');
        parenttag.classList.remove('done');
        const id = Number(parenttag.id);
        tasks.forEach((task) => {
            if (task.id === id) {
                task.status = false;
            }
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
}


//function edit task

listcontainer.addEventListener('click', editTask);


function editTask(e) {
    if (e.target.dataset.action === 'edit') {
        const newInput = document.createElement('input');
        const editWindow = document.createElement('div');
        const closebtn = document.createElement('button');
        closebtn.classList.add('closebtn');
        const changebtn = document.createElement('button');
        changebtn.classList.add('changebtn');
        const parenttag = e.target.closest('span');
        const id = Number(parenttag.id);
        newInput.setAttribute('type', 'text');
        editWindow.classList.add('modalwindow');
        changebtn.textContent = 'change'
        closebtn.textContent = 'X'
        editWindow.append(newInput, changebtn, closebtn);
        listcontainer.append(editWindow);

        changebtn.addEventListener('click', () =>{
            tasks.forEach((task) => {
                if (task.id === id) {
                    const editbtn = document.createElement('button');
                    editbtn.classList.add('editbtn');
                    editbtn.setAttribute('data-action', 'edit')
                    editbtn.textContent = 'edit';
                    task.text = newInput.value;
                    parenttag.textContent = `${task.text}`;
                    parenttag.append(editbtn);
                    editWindow.remove();
                }
            });
            localStorage.setItem('tasks', JSON.stringify(tasks));
        })
        closebtn.addEventListener('click', () =>{
            editWindow.remove();
    })
    }
}




