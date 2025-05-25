import createSidebar from "./sidebarView.js"
import createMainDiv from "./taskView.js"

function render(projects) {
  const app = document.querySelector(".app");
  app.innerHTML = ""
  const sidebar = createSidebar(projects);
  const mainDiv = createMainDiv(projects.getCurrentProject())
  app.prepend(sidebar, mainDiv)
}

export default render




