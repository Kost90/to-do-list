
import createTask from "./createTask.js";
import createTaskitem from "../ui/createTaskitem.js";

export default (e, ul) => {
  e.preventDefault();

  const form = e.target;

  const formData = new FormData(form);

  const taskText = formData.get("newtasks");

  if (taskText && taskText.trim() !== "") {
    const task = createTask(taskText.trim());
    form.reset();

    ul.prepend(createTaskitem(task));
  }
};

