import { dialogModel } from "./dialogModel.js"
import render from "./render.js"

function createUserInfo(user) {
  const userInfo = document.createElement("div")
  userInfo.classList.add("userinfo")

  const avatar = document.createElement("span")
  avatar.classList.add("iconify")
  avatar.dataset.icon = "carbon:user-avatar"

  const userName = document.createElement("div")
  userName.textContent = user

  userInfo.append(avatar, userName)
  return userInfo
}

function createProjectsSection(projects) {
  const projectsDiv = document.createElement("div")
  projectsDiv.classList.add("projects")

  const projectTitle = document.createElement("p")
  projectTitle.textContent = "Projects"

  const projectListDiv = document.createElement("div")
  projectListDiv.classList.add("project-list")

  projects.getProjects().forEach(project => {
    const projectDiv = document.createElement("div")
    projectDiv.textContent = project.title
    projectDiv.addEventListener("click", () => {
      projects.setCurrentProject(project.id)
      render()
    })
    projectListDiv.append(projectDiv)
  })

  const addProjectButton = addProject(projects)

  projectsDiv.append(projectTitle, projectListDiv, addProjectButton)
  return projectsDiv
}

function addProject() {
  const addProjectButton = document.createElement("div")
  addProjectButton.textContent = "+"

  const addProjectButtonDiv = document.createElement("div")
  addProjectButtonDiv.classList.add("add-project-btn")
  addProjectButtonDiv.append(addProjectButton)

  addProjectButton.addEventListener("click", () => {
    dialogModel.getAddProjectTitleForm().showModal()
    // render(projects)
  })

  return addProjectButtonDiv
}



const createSidebar = (projects, user = "User") => {
  const sidebarContainer = document.createElement("div")
  sidebarContainer.classList.add("sidebar")

  const userInfo = createUserInfo(user)
  const projectsSection = createProjectsSection(projects)


  sidebarContainer.append(userInfo, projectsSection)
  return sidebarContainer
}

export default createSidebar
