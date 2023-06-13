import createelement from "../../helpers/createelement.js";
import createForm from "./createForm.js";
import createTasklist from "./createTasklist.js";

export default (tasksData) => {
  const modal = createelement("div");

  const appHeading = createelement("h1", {
    textContent: "Todo App",
    classNames: "app__heading",
  });
  const list = createTasklist(tasksData);
  const form = createForm(list);

  modal.appendChild(appHeading);
  modal.appendChild(form);
  modal.appendChild(list);

  return modal;
};