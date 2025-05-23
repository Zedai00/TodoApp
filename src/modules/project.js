const project = (title) => {
  const id = crypto.randomUUID();
  const todoList = [];

  const add = (todo) => {
    if (todo) {
      todoList.push(todo);
    }
  };

  const remove = (todoId) => {
    const index = todoList.findIndex(todo => todo.id === todoId);
    if (index !== -1) {
      todoList.splice(index, 1);
    }
  };

  return { id, title, todoList, add, remove };
};

const projects = () => {
  const projectList = [];

  const add = (title) => {
    const newProject = project(title);
    projectList.push(newProject);
  };

  const remove = (projectId) => {
    const index = projectList.findIndex(p => p.id === projectId);
    if (index !== -1) {
      projectList.splice(index, 1);
    }
  };

  return { projectList, add, remove };
};

export default projects;
