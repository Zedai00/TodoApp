import { projects } from "./projectModel";
import render from "./render";


function createTitleForm(elm) {
  const form = document.createElement("form");
  form.id = "todo-form";

  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.id = "title";
  titleInput.name = "title";
  titleInput.required = true;
  titleInput.value = elm.title;
  createField("Title:", titleInput, form);

  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.textContent = "Submit";
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
    elm.title = titleInput.value
    e.currentTarget.closest("dialog").close()
    render()
  })
  form.appendChild(submitBtn);
  return form
}

const createField = (labelText, inputElement, form) => {
  const label = document.createElement("label");
  label.textContent = labelText;
  label.htmlFor = inputElement.id;

  form.appendChild(label);
  form.appendChild(inputElement);
};

function createTodoForm(id) {
  const form = document.createElement("form");
  form.id = "todo-form";


  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.id = "title";
  titleInput.name = "title";
  titleInput.required = true;
  createField("Title:", titleInput, form);

  const descTextarea = document.createElement("textarea");
  descTextarea.id = "description";
  descTextarea.name = "description";
  createField("Description:", descTextarea, form);

  const dueDateInput = document.createElement("input");
  dueDateInput.type = "datetime-local";
  dueDateInput.id = "dueDate";
  dueDateInput.name = "dueDate";
  createField("Due Date:", dueDateInput, form);

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
  createField("Priority:", prioritySelect, form);

  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.textContent = "Submit";
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
    saveTodo(id, titleInput.value, descTextarea.value, dueDateInput.value, prioritySelect.value);
    e.currentTarget.closest("dialog").close()
    render()
  })
  form.appendChild(submitBtn);

  if (id) {
    editForm(id, titleInput, descTextarea, dueDateInput, prioritySelect);
  }

  return form;
}

function saveTodo(id, title, desc, dueDate, priority) {
  if (id) {
    const todo = projects.getCurrentProject().getTodo(id)
    console.log(todo)
    console.log(title)
    todo.edit(title, desc, dueDate, priority)
    console.log(todo)
    console.log("h")
    render()
  } else {
    console.log(projects.getCurrentProject())
    projects.getCurrentProject().add(title, desc, dueDate, priority)
    render()
  }
}

function editForm(id, titleInput, descTextarea, dueDateInput, prioritySelect) {
  const todo = projects.getCurrentProject().getTodo(id)
  titleInput.value = todo.title;
  descTextarea.value = todo.description;
  dueDateInput.value = todo.dueDate;
  prioritySelect.value = todo.priority;
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

  const getFormDialog = (id) => {
    clearDialog()
    const todoForm = createTodoForm(id)
    todoForm.style.display = "flex"
    dialog.append(todoForm)
    return dialog
  }

  const getTitleForm = () => {
    clearDialog()
    const project = projects.getCurrentProject()
    const projectTitleForm = createTitleForm(project)
    dialog.append(projectTitleForm)
    return dialog
  }

  const getAddProjectTitleForm = () => {
    clearDialog()
    const project = projects.add("New Project")
    const projectTitleForm = createTitleForm(project)
    dialog.append(projectTitleForm)
    return dialog
  }

  const clearDialog = () => {
    dialog.innerHTML = ""
    dialog.append(createCloseBtn(dialog))
  };

  const getDialog = () => dialog

  return { getDialog, getFormDialog, getTitleForm, getAddProjectTitleForm }
})();
