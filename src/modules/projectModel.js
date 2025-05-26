import render from "./render";
import createTodo from "./todoModel";

const project = (title) => {
  const id = crypto.randomUUID();
  const todoList = [];

  const add = (title, description = "", dueDate, priority = "low") => {
    if (!title) return;
    const newTodo = createTodo(title, description, dueDate, priority)
    todoList.push(newTodo)
    render()
  };

  const remove = (todoId) => {
    const index = todoList.findIndex(todo => todo.id === todoId);
    if (index !== -1) {
      todoList.splice(index, 1);
    }
    render()
  };

  const getTodo = (id) => {
    return todoList.find(todo => todo.id === id)
  }

  return { id, title, todoList, add, remove, getTodo };
};

const projectModel = (() => {
  const projectList = [];
  let currentProject = null;

  const add = (title) => {
    const newProject = project(title);
    projectList.push(newProject);
    if (!currentProject) {
      currentProject = newProject
    }
    return newProject
  };

  const remove = (projectId) => {
    const index = projectList.findIndex(p => p.id === projectId);
    if (index !== -1) {
      if (currentProject?.id === projectId) {
        projectList.splice(index, 1);
        currentProject = projectList[0] || null;
      } else
        projectList.splice(index, 1);
    }
    render()
  };

  const setCurrentProject = (projectId) => {
    const project = projectList.find(p => p.id === projectId)
    if (project) {
      currentProject = project
    }
  }

  const getCurrentProject = () => currentProject;

  const getProjects = () => projectList;

  return { getProjects, add, remove, setCurrentProject, getCurrentProject };
})();

export default projectModel;
