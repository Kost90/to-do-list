import createelement from "../../helpers/createelement.js";
import createTaskitem from "./createTaskitem.js";

export default (tasks) => {
  const ul = createelement("ul", {
    classNames: "app__task-list",
  });

  tasks.forEach((task) => {
    const li = createTaskitem(task);

    ul.prepend(li);
  });

  return ul;
};