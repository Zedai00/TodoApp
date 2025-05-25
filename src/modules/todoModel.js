import render from "./render";

const todo = (
  title, description = "", dueDate, priority = "low") => {
  const id = crypto.randomUUID()
  const checked = false

  function edit(newTitle, newDescription, newDueDate, newPriority) {
    this.title = newTitle;
    this.description = newDescription;
    this.dueDate = newDueDate;
    this.priority = newPriority;
  };

  return { title, description, dueDate, priority, id, checked, edit }
}

export default todo


