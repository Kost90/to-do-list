// Create variables with html tags
let btnNewTask = document.getElementById('btnNewTask');
let inputTask = document.getElementById('inputTask');
let listcontainer = document.querySelector('.listcontainer');

let tasks = [];

//Create function to render saved data from localstorage

renderPage();

function renderPage() {
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
        removbtn.textContent = 'delete';
        const editbtn = document.createElement('button');
        editbtn.classList.add('editbtn');
        editbtn.setAttribute('data-action', 'edit')
        editbtn.textContent = 'edit';
        const span = document.createElement('span');
        span.textContent = task.text;
        div.append(span, checkbox, editbtn, removbtn);
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

//Create function addtask to listcontainer

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
        removbtn.textContent = 'delete';
        const editbtn = document.createElement('button');
        editbtn.classList.add('editbtn');
        editbtn.setAttribute('data-action', 'edit')
        editbtn.textContent = 'edit';
        const span = document.createElement('span');
        span.textContent = newTask.text;
        span.setAttribute('id', `${newTask.id}`);
        div.append(span, checkbox, editbtn, removbtn);
        const li = document.createElement('li');
        li.classList.add('notdone');
        li.setAttribute('id', `${newTask.id}`);
        li.append(div);
        listcontainer.append(li);
        inputTask.value = '';
        tasks.push(newTask);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
}

//create function delete task

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


//create function done task
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


//crete function edit task

listcontainer.addEventListener('click', editTask);

//
function editTask(e) {
    if (e.target.dataset.action === 'edit') {
        const newInput = document.createElement('input');
        const editWindow = document.createElement('div');
        const closebtn = document.createElement('button');
        newInput.setAttribute('type', 'text');
        editWindow.classList.add('modalwindow');
        closebtn.textContent = 'X'
        editWindow.append(newInput, closebtn);
        listcontainer.append(editWindow);

        //Need to add to placeholder of newinput value of parent span tag


        //Need to make code for change parent span tag and chenge text key in objects

        // const id = Number(parenttag.id);
        // tasks.forEach((task) => {
        //     if (task.id === id) {
        //         parenttag.append(newInput);
        //         task.text = newInput.value;
        //         localStorage.setItem('tasks', JSON.stringify(tasks));
        //     }
        // });

        //


        //close button must close modal window


    }
}




