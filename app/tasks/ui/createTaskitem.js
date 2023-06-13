import createelement from "../../helpers/createelement.js";
import onChangecheckbox from "../api/onChangecheckbox.js";
import deleteBtnListener from "../api/deleteBtnListener.js";
import editBtnListener from "../api/editBtnListener.js";


export default ({ id, text, status }) => {
  const li = createelement("li", {
    attrs: [{ key: "data-id", value: id }],
    classNames: "app__task-item",
  });

  const label = createelement("label", {
    attrs: [{ key: "for", value: id }],
    classNames: "app__task-item",
  });

  const checkbox = createelement("input", {
    attrs: [
      { key: "type", value: "checkbox" },
      { key: "id", value: id },
    ],
    classNames: "done",
  });
  checkbox.addEventListener("change", ({ target }) =>
    onChangecheckbox(id, target)
  );

  const p = createelement("p", {
    textContent: text,
    classNames: "app__task-desc",
  });

  const checkboxContainer = createelement("div", {
    classNames: "app__task-container",
  });

  checkboxContainer.appendChild(checkbox);
  checkboxContainer.appendChild(p);

  const buttonsContainer = createelement("div", {
    classNames: "app__task-controllers",
  });

  const editButton = createelement("button", {
    classNames: ["app__task-btn", "app__task-btn_edit"],
  });
  editButton.addEventListener("click", () =>
  editBtnListener(id, li, buttonsContainer)
  );

  const removeButton = createelement("button", {
    classNames: ["app__task-btn", "app__task-btn_remove"],
  });
  removeButton.addEventListener("click", () => deleteBtnListener(id, li));

  buttonsContainer.appendChild(editButton);
  buttonsContainer.appendChild(removeButton);

  label.appendChild(checkboxContainer);
  label.appendChild(buttonsContainer);

  li.appendChild(label);

  return li;
};



