import removeTask from "./removeTask.js";

export default (id, li) => {
    removeTask(id);
  li.remove();
};