import createSidebar from "./sidebar.js"

const content = document.querySelector(".content");
const sidebar = createSidebar();
content.prepend(sidebar)


