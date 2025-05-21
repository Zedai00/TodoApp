import { format } from "date-fns"

const todo = (
  title, description = "", dueDate, priority = "low") => {
  const id = crypto.randomUUID()
  if (dueDate) {
    dueDate = format(new Date(dueDate), "Pp")
  }
  const checked = false
  return { title, description, dueDate, priority, id, checked }
}

export default todo


