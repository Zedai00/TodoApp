import "./styles.css"
import render from "./modules/render.js"
import { projects } from "./modules/projectModel.js"
import storage from "./modules/storage.js"


if (localStorage.getItem("projects")) {
  storage().retrieve()
} else {
  const DailyProject = projects.add("Daily")
  let tzoffset = (new Date()).getTimezoneOffset() * 60000;
  DailyProject.add("Secret", "Conquer the world", (new Date(Date.now() - tzoffset)).toISOString().slice(0, 16), "High")
  projects.setCurrentProject(DailyProject.id)
}


render(projects)

