import { dialogModel } from "./dialogModel"


function createIcon(iconName, className) {
  const iconDiv = document.createElement("div")
  iconDiv.classList.add(className)

  const icon = document.createElement("span")
  icon.classList.add("iconify")
  icon.dataset.icon = iconName

  iconDiv.append(icon)

  return iconDiv
}

function createTask(todo) {
  const task = document.createElement("div")
  task.classList.add("task")

  const checkboxContainer = document.createElement("div")
  checkboxContainer.classList.add("checkbox")

  const uncheckedBox = createIcon("mdi:circle-outline", "unchecked")
  const checkedBox = createIcon("mdi:check-circle-outline", "checked")

  checkboxContainer.append(uncheckedBox, checkedBox)

  const taskTitle = document.createElement("div")
  taskTitle.textContent = todo.title

  const actionsDiv = document.createElement("div")
  actionsDiv.classList.add("actions")

  const editAction = createIcon("mdi:pencil-outline", "edit-action")
  editAction.addEventListener("click", () => {
    dialogModel.getFormDialog().showModal();
  })
  const deleteAction = createIcon("mdi:bin-outline", "delete-action")
  const archiveAction = createIcon("tabler:archive", "archive-action")

  actionsDiv.append(editAction, deleteAction, archiveAction)

  task.append(checkboxContainer, taskTitle, actionsDiv)

  return task
}


function createCompletedSection() {
  const completedContainer = document.createElement("div")
  completedContainer.classList.add("completed")

  const completedTitle = document.createElement("div")
  completedTitle.classList.add("completed-title")
  completedTitle.textContent = "Completed"

  completedContainer.append(completedTitle)

  return completedContainer
}

function createProjectTitle(project) {

  const projectTitleSection = document.createElement("div")
  projectTitleSection.classList.add("project-title")

  const editProject = createIcon("mdi:pencil-outline", "edit-action")
  editProject.addEventListener("click", () => {
    projectTitle.contentEditable = true
    projectTitle.focus(HTMLOptionElement)
  })

  const projectTitle = document.createElement("div")
  projectTitle.textContent = project.title

  const deleteProject = createIcon("mdi:bin-outline", "delete-action")

  projectTitleSection.append(editProject, projectTitle, deleteProject)

  return projectTitleSection
}

function createTasksSection(project) {

  const tasksSection = document.createElement("div")
  tasksSection.classList.add("tasks-container")

  const completedSection = createCompletedSection()

  project.todoList.forEach(todo => {

    const task = createTask(todo)

    if (todo.checked) {
      completedSection.append(task)
    } else {
      tasksSection.append(task)
    }

  });

  return { tasksSection, completedSection }
}

const createProjectSection = (project) => {
  const projectTitle = createProjectTitle(project)

  const { tasksSection, completedSection } = createTasksSection(project)

  const mainDiv = document.createElement("div")
  mainDiv.classList.add("main")

  mainDiv.append(projectTitle, tasksSection, completedSection)

  return mainDiv
}

export default createProjectSection
