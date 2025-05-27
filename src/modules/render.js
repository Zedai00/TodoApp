import createSidebar from "./sidebarView.js"
import createMainDiv from "./taskView.js"
import { dialogModel } from "./dialogModel.js";
import { projects } from "./projectModel.js"
import storage from "./storage.js";

function render() {
  storage().store(projects)
  const app = document.querySelector(".app");
  app.innerHTML = ""
  const sidebar = createSidebar(projects);
  const mainDiv = createMainDiv(projects.getCurrentProject())
  const dialog = dialogModel.getDialog()
  app.prepend(sidebar, mainDiv, dialog)
}

export default render




