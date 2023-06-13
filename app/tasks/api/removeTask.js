
import { tasks } from './tasksdata.js';

export default (id) =>{
    const index = tasks.findIndex((task) => task.id === id);

    if(index !== -1){
        tasks.splice(index,1)
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

}



// function removeTask(e) {
//     if (e.target.dataset.action === 'delete') {
//         const parenttag = e.target.closest('li');
//         const id = Number(parenttag.id);
//         tasks = tasks.filter((task) => task.id !== id);
//         localStorage.setItem('tasks', JSON.stringify(tasks));
//         parenttag.remove()
//     }
// }