import { projects, projectModel } from "./projectModel";
import todoModel from "./todoModel";

const storage = () => {

  function store(projects) {
    const projectList = []
    projects.getProjects().forEach(project => {
      const projectObject = setProjectObject(project)
      projectList.push(projectObject)
    });

    const projectsObject = {
      projectList: projectList,
    }

    localStorage.setItem("projects", JSON.stringify(projectsObject))
  }

  function setProjectObject(project) {
    const todoList = []
    project.todoList.forEach(todo => {
      const todoObject = setTodoObject(todo)
      todoList.push(todoObject)
    });

    return {
      id: project.id,
      title: project.title,
      todoList: todoList,
    }
  }

  function setTodoObject(todo) {
    return {
      id: todo.id,
      title: todo.title,
      description: todo.description,
      dueDate: todo.dueDate,
      priority: todo.priority,
      checked: todo.checked,
    }
  }

  function retrieve() {
    const projectsObject = JSON.parse(localStorage.getItem("projects"))

    const projectList = []
    projectsObject.projectList.forEach(projectObject => {
      const project = getProjectObject(projectObject);
      projectList.push(project)
    });
    projects.setProjects(projectList)
    projects.setCurrentProject(projects.getProjects()[0].id)
  }

  function getProjectObject(projectObject) {
    const project = projectModel(projectObject.title)

    projectObject.todoList.forEach(todoObject => {
      const todo = getTodoObject(todoObject)
      todo.checked = todoObject.checked
      project.todoList.push(todo)
    });

    return project
  }

  function getTodoObject(todoObject) {
    const todo = todoModel(todoObject.title, todoObject.description, todoObject.dueDate, todoObject.priority)
    console.log("Todo:", todo)
    return todo
  }

  return { store, retrieve }

}

export default storage
