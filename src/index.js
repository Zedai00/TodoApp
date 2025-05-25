import "./styles.css"
import render from "./modules/render.js"
import projectModel from "./modules/projectModel.js"

const projects = projectModel()
const DailyProject = projects.add("Daily")
DailyProject.add("Hello")
DailyProject.add("Hello")
DailyProject.add("Hello")
DailyProject.add("Hello")
projects.add("Hello")
projects.add("Bye")
projects.setCurrentProject(DailyProject.id)

render(projects)


