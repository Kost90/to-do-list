
import createelement from "../../helpers/createelement.js";
import onSubmitForm from "../api/onSubmitForm.js";

export default (ul) => {
      const form = createelement("form", {
        attrs: [{ key: "id", value: "newtask-form" }],
        classNames: "app__newtask-form",
      });
    
      const inputTask = createelement("input", {
        classNames: "app__newtask-input",
        attrs: [
          { key: "type", value: "text" },
          { key: "name", value: "newtasks" },
          { key: "id", value: "newtask-input" },
          { key: "placeholder", value: "Add a new task" },
        ],
      });
    
      const submitButton = createelement("button", {
        attrs: [{ key: "type", value: "submit" }],
        textContent: "Add",
        classNames: "app__newtask-button",
      });
    
      form.append(inputTask);
      form.append(submitButton);
    
      form.addEventListener("submit", (e) => onSubmitForm(e, ul));
    
      return form;
    };
