import "./styles.css"
import render from "./modules/render.js"
import projects from "./modules/projectModel.js"

// const projects = projectModel
const DailyProject = projects.add("Daily")
let tzoffset = (new Date()).getTimezoneOffset() * 60000;
DailyProject.add("Hello", "oajdfda", (new Date(Date.now() - tzoffset)).toISOString().slice(0, 16), "low")
DailyProject.add("Hello")
DailyProject.add("Hello")
DailyProject.add("Hello")
projects.add("Hello")
projects.add("Bye")
projects.setCurrentProject(DailyProject.id)

render(projects)


