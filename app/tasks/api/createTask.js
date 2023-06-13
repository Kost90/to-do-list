
import { tasks } from './tasksdata.js';

 export default (text) => {
    const task = {
        text: `${text}`,
        status: false,
        id: Date.now(),
    }

    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    return task;
};