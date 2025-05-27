import render from "./render";

const todoModel = (
  title, description = "", dueDate, priority = "low") => {
  const id = crypto.randomUUID()
  const checked = false
  dueDate = formatTimestamp(dueDate)

  function edit(newTitle, newDescription, newDueDate, newPriority) {
    this.title = newTitle;
    this.description = newDescription;
    this.dueDate = formatTimestamp(newDueDate);
    this.priority = newPriority;
  };

  function formatTimestamp(timestamp) {
    if (!timestamp) return "";

    const date = new Date(timestamp);
    if (isNaN(date.getTime())) return "";

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;
    const formattedHours = String(hours).padStart(2, "0");

    return `${year}-${month}-${day} ${formattedHours}:${minutes} ${ampm}`;
  }


  return { title, description, dueDate, priority, id, checked, edit }
}

export default todoModel


