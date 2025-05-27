# 📝 TodoApp

A minimal yet functional task management application built with vanilla JavaScript, HTML, and CSS. This app allows users to create, manage, and organize their to-dos across multiple projects, with data persistence using `localStorage`.

---

## 🚀 Features

- **Project Management**: Create and manage multiple projects to categorize your tasks.
- **Task Operations**: Add, edit, and delete tasks within each project.
- **Task Details**: Include descriptions, due dates, and priority levels for each task.
- **Completion Tracking**: Mark tasks as completed to keep track of progress.
- **Data Persistence**: All data is stored in the browser's `localStorage`, ensuring your tasks remain intact across sessions.

---

## 🛠️ Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Zedai00/TodoApp.git
   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd TodoApp
   ```

3. **Install Dependencies**:

   Ensure you have [Node.js](https://nodejs.org/) installed. Then, install the required packages:

   ```bash
   npm install
   ```

4. **Start the Development Server**:

   ```bash
   npm start
   ```

   This will launch the app in your default browser at `http://localhost:8080/`.

---

## 📁 Project Structure

```
TodoApp/
├── src/
│   ├── index.html
│   ├── styles.css
│   ├── index.js
│   ├── projectModel.js
│   ├── todoModel.js
│   ├── render.js
│   └── storage.js
├── package.json
├── webpack.config.js
└── README.md
```

- `index.html`: The main HTML file.
- `styles.css`: Contains the styling for the app.
- `index.js`: Entry point for the JavaScript application.
- `projectModel.js`: Handles project-related data and operations.
- `todoModel.js`: Manages individual to-do items.
- `render.js`: Responsible for rendering the UI based on the current state.
- `storage.js`: Manages saving and retrieving data from `localStorage`.

---

## 🧪 Usage

- **Adding a Project**: Use the "Add Project" button to create a new project.
- **Adding a Task**: Within a project, click "Add Task" to create a new to-do item.
- **Editing a Task**: Click on a task to edit its details.
- **Deleting a Task**: Use the delete icon next to a task to remove it.
- **Marking as Completed**: Click the checkbox next to a task to mark it as completed.

---

## 🧑‍💻 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the Repository**:

   Click the "Fork" button at the top right of the repository page.

2. **Create a New Branch**:

   ```bash
   git checkout -b feature/YourFeature
   ```

3. **Make Your Changes**:

   Implement your feature or bug fix.

4. **Commit Your Changes**:

   ```bash
   git commit -m "Add YourFeature"
   ```

5. **Push to Your Fork**:

   ```bash
   git push origin feature/YourFeature
   ```

6. **Submit a Pull Request**:

   Go to your forked repository and click "New Pull Request".

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 📬 Contact

For any questions or suggestions, feel free to reach out:

- GitHub: [@Zedai00](https://github.com/Zedai00)
