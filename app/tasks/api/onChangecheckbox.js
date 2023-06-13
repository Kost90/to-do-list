import { tasks } from './tasksdata.js';

export default (id, target) => {
  const index = tasks.findIndex((task) => task.id === id);
  if (index !== -1) {
    tasks[index].status = target.checked;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    if(target.checked === true){
      const parenttag = target.closest('li');
      parenttag.classList.add('done');
    } else if(target.checked === false){
      const parenttag = target.closest('li');
      parenttag.classList.remove('done');
    }
  }
};