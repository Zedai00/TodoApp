const project = (title = "Main") => {
  todoList = []

  insertTodo = (todo) => {
    if (todo) {
      todoList.push(todo);

    }
  }

  deleteTodo = (id) => {
    const index = todoList.findIndex(todo => todo.id === id);
    if (index != -1) {
      todoList.splice(index, 1);
    }
  }
}

export default project
