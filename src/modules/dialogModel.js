function createTodoForm() {
  const form = document.createElement("form");
  form.id = "todo-form";

  const createField = (labelText, inputElement) => {
    const label = document.createElement("label");
    label.textContent = labelText;
    label.htmlFor = inputElement.id;

    form.appendChild(label);
    form.appendChild(inputElement);
  };

  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.id = "title";
  titleInput.name = "title";
  titleInput.required = true;
  createField("Title:", titleInput);

  const descTextarea = document.createElement("textarea");
  descTextarea.id = "description";
  descTextarea.name = "description";
  createField("Description:", descTextarea);

  const dueDateInput = document.createElement("input");
  dueDateInput.type = "datetime-local";
  dueDateInput.id = "dueDate";
  dueDateInput.name = "dueDate";
  createField("Due Date:", dueDateInput);

  const prioritySelect = document.createElement("select");
  prioritySelect.id = "priority";
  prioritySelect.name = "priority";
  ["low", "medium", "high"].forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value.charAt(0).toUpperCase() + value.slice(1);
    if (value === "low") option.selected = true;
    prioritySelect.appendChild(option);
  });
  createField("Priority:", prioritySelect);

  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.textContent = "Add Todo";
  form.appendChild(submitBtn);

  document.body.appendChild(form);

  return form;
}

function createCloseBtn(dialog) {
  const closeBtn = document.createElement("div")
  closeBtn.classList.add("close-button")

  const closeIcon = document.createElement("span")
  closeIcon.classList.add("iconify")
  closeIcon.dataset.icon = "mdi:cross-circle-outline"

  closeBtn.append(closeIcon)
  closeBtn.addEventListener("click", () => dialog.close())
  return closeBtn
}

function createDialog() {
  const dialog = document.createElement("dialog")
  const closeBtn = createCloseBtn(dialog)
  dialog.append(closeBtn)
  return dialog
}

export const dialogModel = (() => {
  let dialog = createDialog()

  const getFormDialog = () => {
    clearDialog()
    const todoForm = createTodoForm()
    todoForm.style.display = "flex"
    dialog.append(todoForm)
    return dialog
  }

  const clearDialog = () => {
    dialog.innerHTML = ""
    dialog.append(createCloseBtn(dialog))
  };

  const getDialog = () => dialog

  return { getDialog, getFormDialog }
})();
