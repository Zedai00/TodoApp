import projectsFactory from "./project.js";

function createUserInfo(user) {
  const userInfo = document.createElement("div");
  userInfo.classList.add("userinfo");

  const avatar = document.createElement("span");
  avatar.classList.add("iconify");
  avatar.dataset.icon = "carbon:user-avatar";

  const userName = document.createElement("div");
  userName.textContent = user;

  userInfo.append(avatar, userName);
  return userInfo;
}

function createProjectsSection() {
  const projectsDiv = document.createElement("div");
  projectsDiv.classList.add("projects");

  const projectTitle = document.createElement("p");
  projectTitle.textContent = "Projects";
  projectsDiv.append(projectTitle);

  const projectListDiv = document.createElement("div");
  projectListDiv.classList.add("project-list");

  const projects = projectsFactory();
  projects.add("Daily");
  projects.add("Work");
  projects.add("Fitness");

  projects.projectList.forEach(project => {
    const projectDiv = document.createElement("div");
    projectDiv.textContent = project.title;
    projectListDiv.append(projectDiv);
  });

  projectsDiv.append(projectListDiv);
  return projectsDiv;
}

function createArchiveSection() {
  const archiveContainer = document.createElement("div");
  archiveContainer.classList.add("archive");

  const archiveLabel = document.createElement("div");
  archiveLabel.textContent = "Archive";

  archiveContainer.append(archiveLabel);
  return archiveContainer;
}


const createSiderbar = (user = "User") => {
  const sidebarContainer = document.createElement("div");
  sidebarContainer.classList.add("sidebar");

  const userInfo = createUserInfo(user);
  const projectsSection = createProjectsSection();
  const archiveSection = createArchiveSection();


  sidebarContainer.append(userInfo, projectsSection, archiveSection);
  return sidebarContainer;
};

export default createSiderbar;
