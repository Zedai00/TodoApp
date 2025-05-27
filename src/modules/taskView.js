import { dialogModel } from "./dialogModel"
import projects from "./projectModel"
import render from "./render"


function createIcon(iconName, className) {
  const iconDiv = document.createElement("div")
  iconDiv.classList.add(className)

  const icon = document.createElement("span")
  icon.classList.add("iconify")
  icon.dataset.icon = iconName

  iconDiv.append(icon)

  return iconDiv
}

function createTaskInfo(todo) {

  const taskInfo = document.createElement("div")
  taskInfo.classList.add("task-info")

  const desc = document.createElement("div")
  desc.textContent = `Description: ${todo.description}`

  const dueDate = document.createElement("div")
  dueDate.textContent = `Due Date: ${todo.dueDate || ""}`

  const priority = document.createElement("div")
  priority.textContent = ` Priority: ${todo.priority}`

  taskInfo.append(desc, dueDate, priority)

  return taskInfo
}


function createTask(todo) {
  const task = document.createElement("div")
  task.classList.add("task")
  task.id = todo.id

  const taskDiv = document.createElement("div")
  taskDiv.classList.add("task-div")

  const checkboxContainer = document.createElement("div")
  checkboxContainer.classList.add("checkbox")

  checkboxContainer.addEventListener("click", () => {
    todo.checked = true
    render()
  });

  const uncheckedBox = createIcon("mdi:circle-outline", "unchecked")
  const checkedBox = createIcon("mdi:check-circle-outline", "checked")

  checkboxContainer.append(uncheckedBox, checkedBox)

  const taskTitle = document.createElement("div")
  taskTitle.textContent = todo.title
  taskTitle.classList.add("task-title")

  taskTitle.addEventListener("click", () => {
    taskInfo.classList.toggle("hidden")
  })

  const actionsDiv = document.createElement("div")
  actionsDiv.classList.add("actions")

  const editAction = createIcon("mdi:pencil-outline", "edit-action")
  editAction.addEventListener("click", (e) => {
    dialogModel.getFormDialog(e.currentTarget.closest(".task").id).showModal();
  })
  const deleteAction = createIcon("mdi:bin-outline", "delete-action")
  deleteAction.addEventListener("click", (e) => {
    const todoId = e.currentTarget.closest('.task').id
    projects.getCurrentProject().remove(todoId)
  })

  actionsDiv.append(editAction, deleteAction)

  taskDiv.append(checkboxContainer, taskTitle, actionsDiv)
  const taskInfo = createTaskInfo(todo)
  taskInfo.classList.add("hidden")
  task.append(taskDiv, taskInfo)


  return task
}

function createCompletedTask(todo) {
  const task = document.createElement("div")
  task.classList.add("task")
  task.id = todo.id

  const taskDiv = document.createElement("div")
  taskDiv.classList.add("task-div")

  const checkboxContainer = document.createElement("div")
  checkboxContainer.classList.add("checkedBox")

  const checkedBox = createIcon("mdi:check-circle-outline", "checked")
  checkedBox.style.display = "block"

  checkboxContainer.append(checkedBox)

  const taskTitle = document.createElement("div")
  taskTitle.textContent = todo.title
  taskTitle.classList.add("task-title")

  taskTitle.addEventListener("click", () => {
    taskInfo.classList.toggle("hidden")
  })

  const actionsDiv = document.createElement("div")
  actionsDiv.classList.add("actions")

  const deleteAction = createIcon("mdi:bin-outline", "delete-action")
  deleteAction.addEventListener("click", (e) => {
    const todoId = e.currentTarget.closest('.task').id
    projects.getCurrentProject().remove(todoId)
  })


  actionsDiv.append(deleteAction)

  taskDiv.append(checkboxContainer, taskTitle, actionsDiv)
  const taskInfo = createTaskInfo(todo)
  taskInfo.classList.add("hidden")
  task.append(taskDiv, taskInfo)

  return task
}


function createCompletedSection() {
  const completedContainer = document.createElement("div")
  completedContainer.classList.add("completed")


  const completedTitle = document.createElement("div")
  completedTitle.classList.add("completed-title")
  completedTitle.addEventListener("click", () => {
    completedTaskList.classList.toggle("hidden")
    arrow.classList.toggle("rotated");
  })

  const arrow = createIcon("mdi:chevron-down", "arrow");
  completedTitle.appendChild(arrow);
  completedTitle.append("Completed")

  const completedTaskList = document.createElement("div")
  completedTaskList.classList.add("complete-list", "hidden")

  completedContainer.append(completedTitle, completedTaskList)

  return { completedContainer, completedTaskList }
}

function createProjectTitle(project) {

  const projectTitleSection = document.createElement("div")
  projectTitleSection.classList.add("project-title")

  const editProject = createIcon("mdi:pencil-outline", "edit-action")
  editProject.addEventListener("click", () => {
    dialogModel.getTitleForm().showModal()
  })

  const projectTitle = document.createElement("div")
  projectTitle.textContent = project.title

  const deleteProject = createIcon("mdi:bin-outline", "delete-action")
  deleteProject.addEventListener("click", () => {
    projects.remove(projects.getCurrentProject().id)
  })

  projectTitleSection.append(editProject, projectTitle, deleteProject)

  return projectTitleSection
}

function addTaskSection() {
  const addTaskDiv = document.createElement("div")
  addTaskDiv.classList.add("add-task");
  addTaskDiv.textContent = "+ Add Task"

  addTaskDiv.addEventListener("click", () => {
    dialogModel.getFormDialog().showModal()
  })

  return addTaskDiv;
}

function createTasksSection(project) {

  const tasksSection = document.createElement("div")
  tasksSection.classList.add("tasks-container")

  const { completedContainer, completedTaskList } = createCompletedSection()

  project.todoList.forEach(todo => {


    if (todo.checked) {
      completedTaskList.append(createCompletedTask(todo))
    } else {
      tasksSection.append(createTask(todo))
    }

  });
  const addTaskBtn = addTaskSection(project)
  tasksSection.append(addTaskBtn)

  return { tasksSection, completedContainer }
}


const createProjectSection = (project) => {
  const projectTitle = createProjectTitle(project)

  const { tasksSection, completedContainer } = createTasksSection(project)

  console.log(completedContainer)
  const mainDiv = document.createElement("div")
  mainDiv.classList.add("main")

  mainDiv.append(projectTitle, tasksSection, completedContainer)

  return mainDiv
}

export default createProjectSection
