let url = 'https://646288967a9eead6fad1a037.mockapi.io/todolist/';

let data = {};

fetch(`${url}tasks`, {
    method: 'GET',
    headers: {'content-type':'application/json'},
}).then(res => {
    if (res.ok) {
        return res.json();
    }
}).then(tasks => {
    data = tasks;
}).catch(error => {
});

console.log(data);

