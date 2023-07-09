import "./styles/content/style.scss";
import checkboxCheckIcon from "./assets/images/chekbox-check.svg";
import closeIcon from "./assets/images/close.svg";
import editIcon from "./assets/images/edit.svg";
import deleteIcon from "./assets/images/delete.svg";
import listBoxIcon from "./assets/images/list-box.svg";

import DOMPurify from "dompurify";
import {
  createNewProjectDropdownOption,
  initializeTaskPopup,
  editTask,
} from "./taskPopup.js";
import { Filters, loadTasks } from "./taskLoading.js";
import { restoreData } from "./localStorage";
import { initializeKeyboardShortcuts } from "./keyboardShorcuts";

let currentSection = "inbox";
let taskList = [];
let projectList = [];
let search = "";
let currentFilters = Filters(search, false, false, false, null);
let GetID = (function () {
  function getGlobalTaskID() {
    let maxTaskID = 0;
    taskList.forEach((task) => {
      if (task.id > maxTaskID) maxTaskID = task.id;
    });
    return maxTaskID;
  }
  function getGlobalProjectID() {
    let maxProjectID = 0;
    projectList.forEach((project) => {
      if (project.id > maxProjectID) maxProjectID = project.id;
    });
    return maxProjectID;
  }
  let globalTaskID;
  let globalProjectID;
  function forTask() {
    globalTaskID++;
    return globalTaskID;
  }
  function forProject() {
    globalProjectID++;
    return globalProjectID;
  }
  function initialize() {
    globalTaskID = getGlobalTaskID();
    globalProjectID = getGlobalProjectID();
  }
  return { forTask, forProject, initialize };
})();
function Task(
  title,
  description,
  dueDate,
  priority,
  project,
  completed = false,
  id = null
) {
  if (!id) id = GetID.forTask();
  dueDate = dueDate ? dueDate : null;
  function getPriorityClass() {
    if (priority === 1) return "p1";
    if (priority === 2) return "p2";
    if (priority === 3) return "p3";
    if (priority === null) return "pn";
  }
  function numberToMonthName(number) {
    switch (number) {
      case "01":
      case 1:
        return "Jan";
      case "02":
      case 2:
        return "Feb";
      case "03":
      case 3:
        return "March";
      case "04":
      case 4:
        return "April";
      case "05":
      case 5:
        return "May";
      case "06":
      case 6:
        return "June";
      case "07":
      case 7:
        return "July";
      case "08":
      case 8:
        return "Aug";
      case "09":
      case 9:
        return "Sep";
      case "10":
      case 10:
        return "Oct";
      case "11":
      case 11:
        return "Nov";
      case "12":
      case 12:
        return "Dec";
      default:
        throw new Error("Weird month number!");
    }
  }
  function getCleanDueDate() {
    if (!dueDate) return "No due date";
    let dueDateDateFormat = new Date(dueDate);
    let cleanDueDate =
      dueDateDateFormat.getDate() +
      " " +
      numberToMonthName(dueDateDateFormat.getMonth() + 1) +
      " " +
      dueDateDateFormat.getFullYear();
    return cleanDueDate;
  }
  function getProjectTitle() {
    let projectTitle = null;
    projectList.forEach((projectItem) => {
      if (projectItem.id === project) projectTitle = projectItem.title;
    });
    return projectTitle;
  }
  function getProjectTitleText() {
    let projectTitle = getProjectTitle();
    if (projectTitle) return " in " + projectTitle;
    else return "";
  }
  function getProjectTitleElement() {
    let projectTitleElement;
    if (!currentSection.includes("project"))
      projectTitleElement = `<span class="project-title">${getProjectTitleText()}</span>`;
    else projectTitleElement = "";
    return projectTitleElement;
  }
  let getTaskCardHTML = function () {
    let projectTitleElement = getProjectTitleElement();
    return DOMPurify.sanitize(`
    <div
      class="task-card example-card ${getPriorityClass()} task-${id}"
      data-priority="${priority}"
      data-date="${dueDate}"
    >
      <label class="checkbox">
        <input type="checkbox" />
        <img
          src="${
            currentSection !== "completed" ? checkboxCheckIcon : closeIcon
          }"
          alt="${currentSection !== "completed" ? "check" : "uncheck"}"
          class="check"
        />
      </label>
      <div class="data">
        <div class="title">${title}${projectTitleElement}</div>
        <div class="description">
          ${description}  
        </div>
        <div class="due-date">${getCleanDueDate()}</div>
      </div>
      <div class="icons">
        <img
          src=${editIcon}
          alt="edit"
          class="edit-icon icon"
        />
        <img
          src=${deleteIcon}
          alt="delete"
          class="delete-icon icon"
        />
      </div>
    </div>`);
  };
  return {
    id,
    title,
    description,
    dueDate,
    priority,
    project,
    completed,
    getTaskCardHTML,
  };
}
function Project(title, id = null, numberOfTasks = 0) {
  if (!id) id = GetID.forProject();
  function validProjectSection(projectSection) {
    if (projectSection.classList.contains(`project-${id}`)) return true;
    return false;
  }
  return { id, title, numberOfTasks, validProjectSection };
}
let Menu = (function () {
  let menu = document.querySelector("#menu");
  let addProject = menu.querySelector(".add-project");
  let projectForm = menu.querySelector(".project-form");
  let projectFormCancel = projectForm.querySelector(".cancel");
  let projectFormSubmit = projectForm.querySelector(".submit");

  let allSections = menu.querySelectorAll(".task-section, .project-section");
  function closeOnMobile() {
    const viewportWidth = window.innerWidth;
    if (viewportWidth < 800) menu.classList.add("hidden");
  }
  function closeOnClickOutsideOnMobile() {
    let content = document.querySelector("#content");
    content.addEventListener("click", closeOnMobile);
    menu.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  }
  function initializeHomeButton() {
    let homeButton = document.querySelector("header .home");
    homeButton.addEventListener("click", () => {
      selectTaskSection("Inbox");
      highlightSection(document.querySelector(".inbox"));
    });
  }
  function initializeMenuToggle() {
    let menu = document.querySelector("#menu");
    let menuToggle = document.querySelector("header .hamburger");
    menuToggle.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  }
  function highlightSection(selectedSection) {
    allSections.forEach((section) => section.classList.remove("selected"));
    selectedSection.classList.add("selected");
    closeOnMobile();
  }
  function removeAllTasksOfProject(project) {
    //we have to manually go through the array
    //otherwise the array would skip elements for each deleted element
    let taskListIndex = 0;
    while (taskListIndex < taskList.length) {
      let task = taskList[taskListIndex];
      if (task.project === project.id) {
        deleteTask(task);
      } else taskListIndex++;
    }
  }
  function removeProject(project) {
    removeAllTasksOfProject(project);
    let projectIndex = projectList.indexOf(project);
    projectList.splice(projectIndex, 1);
    let allProjectAppearances = document.querySelectorAll(
      `.project-${project.id}`
    );
    allProjectAppearances.forEach((projectElement) => projectElement.remove());
    selectTaskSection("Inbox");
    highlightSection(document.querySelector(".inbox"));
  }
  function initializeTaskSections() {
    allSections.forEach((section) =>
      section.addEventListener("click", () => {
        highlightSection(section);
      })
    );
  }
  function resetProjectForm() {
    projectForm.reset();
  }
  function openProjectForm() {
    addProject.classList.add("adding");
    projectForm.querySelector("input").focus();
  }
  function closeProjectForm() {
    addProject.classList.remove("adding");
    resetProjectForm();
  }
  function getProjectSectionHTML(project) {
    return `
    <button class="project-section project-${project.id}" title="${project.title}">
      <img src=${listBoxIcon} alt="your tasks" class="project-icon icon">
      <div class="title">${project.title}</div>
      <div class="number-of-tasks"></div>
      <img src=${deleteIcon} alt="delete" class="icon delete-icon">
    </button>`;
  }
  function addMenuProjectElementListeners(project) {
    let projectElement = document.querySelector(
      `#menu .projects-sections .project-${project.id}`
    );
    let projectDeleteIcon = projectElement.querySelector(".delete-icon");
    projectDeleteIcon.addEventListener("click", (event) => {
      removeProject(project);
      event.stopPropagation();
    });
    projectElement.addEventListener("click", () => {
      highlightSection(projectElement);
      loadProjectTasks(project);
    });
  }
  function submitProject() {
    let projectFormData = new FormData(projectForm);
    let title = projectFormData.get("title");
    let project = Project(title);
    projectList.push(project);

    let newProjectSection = document.createElement("div");
    addProject.parentElement.insertBefore(newProjectSection, addProject);
    newProjectSection.outerHTML = getProjectSectionHTML(project);
    addMenuProjectElementListeners(project);

    allSections = menu.querySelectorAll(
      ".task-section, .project-section:not(.add-project)"
    );
    createNewProjectDropdownOption(project);
  }
  function submitProjectFromData(project) {
    let newProjectSection = document.createElement("div");
    addProject.parentElement.insertBefore(newProjectSection, addProject);
    newProjectSection.outerHTML = getProjectSectionHTML(project);
    addMenuProjectElementListeners(project);

    allSections = menu.querySelectorAll(
      ".task-section, .project-section:not(.add-project)"
    );
    createNewProjectDropdownOption(project);
  }
  function submitAllProjectsFromData(projectList) {
    projectList.forEach(submitProjectFromData);
  }
  function initializeProjectForm() {
    projectFormCancel.addEventListener("click", closeProjectForm);
    projectForm.addEventListener("submit", () => {
      if (projectForm.matches(":valid")) {
        submitProject();
        closeProjectForm();
      }
      return false;
    });
    projectFormSubmit.addEventListener("click", () => {
      if (projectForm.matches(":valid")) {
        submitProject();
        closeProjectForm();
      }
    });
    addProject.addEventListener("click", openProjectForm);
  }
  function initialize() {
    closeOnMobile();
    closeOnClickOutsideOnMobile();
    initializeHomeButton();
    initializeMenuToggle();
    initializeTaskSections();
    initializeProjectForm();
  }
  return {
    initialize,
    submitAllProjectsFromData,
    highlightSection,
    openProjectForm,
    closeProjectForm,
    submitProject,
  };
})();
function selectAndHighlightTaskSection(taskSectionTitle) {
  selectTaskSection(taskSectionTitle);
  taskSectionTitle = taskSectionTitle.toLowerCase();
  let menu = document.querySelector("#menu");
  switch (taskSectionTitle) {
    case "inbox":
      Menu.highlightSection(menu.querySelector(".inbox"));
      break;
    case "today":
      Menu.highlightSection(menu.querySelector(".today"));
      break;
    case "this week":
      Menu.highlightSection(menu.querySelector(".this-week"));
      break;
    case "completed":
      Menu.highlightSection(menu.querySelector(".done"));
      break;
    default:
      throw new Error("Weird taskSectionTitle!");
  }
}
function hideLoadingScreen() {
  let loadingElement = document.querySelector("#loading-screen");
  let bodyStyles = window.getComputedStyle(document.body);
  let hideDelay = bodyStyles.getPropertyValue("--loading-screen-hide-delay");
  let numberOfSeconds = +hideDelay.replace(/[^0-9\.]+/g, "");
  window.addEventListener("click", () => {
    loadingElement.style.display = "none";
  });
  setTimeout(() => {
    loadingElement.style.display = "none";
  }, numberOfSeconds * 1000);
}
function resizeElement(element) {
  element.style.height = "auto";
  element.style.height = element.scrollHeight + "px";
}
function autoResizeElements() /* used for description textarea in task popup */ {
  let elements = document.querySelectorAll(".auto-resize");
  elements.forEach((element) => {
    element.addEventListener(
      "input",
      () => {
        resizeElement(element);
      },
      false
    );
  });
}
function cancelTask(editingTask) {
  editingTask.value = null;
}
function getTaskPopupData() {
  let taskPopup = document.querySelector(".task-popup");
  let taskPopupFormData = new FormData(taskPopup);
  let data = {};
  data.title = taskPopupFormData.get("title");
  data.description = taskPopupFormData.get("description");
  data.dueDate = taskPopupFormData.get("date");
  data.project = +taskPopup
    .querySelector(".project-button")
    .className.replace("project-button", "")
    .replace(" project-", "");
  let priorityOptionText = taskPopup.querySelector(
    ".priority-button .text"
  ).textContent;
  switch (priorityOptionText) {
    case "P1":
      data.priority = 1;
      break;
    case "P2":
      data.priority = 2;
      break;
    case "P3":
      data.priority = 3;
      break;
    default:
      data.priority = null;
  }
  return data;
}
function submitTask(editingTask) {
  let taskPopupData = getTaskPopupData();
  let newTask,
    editingACompletedTask = editingTask.value && currentSection === "completed";
  if (editingACompletedTask)
    newTask = Task(
      taskPopupData.title,
      taskPopupData.description,
      taskPopupData.dueDate,
      taskPopupData.priority,
      taskPopupData.project,
      true
    );
  else
    newTask = Task(
      taskPopupData.title,
      taskPopupData.description,
      taskPopupData.dueDate,
      taskPopupData.priority,
      taskPopupData.project,
      false
    );
  if (!editingTask.value) {
    taskList.push(newTask);
  } else {
    let editingTaskIndex = taskList.indexOf(editingTask.value);
    taskList[editingTaskIndex] = newTask;
    editingTask.value = null;
  }
  loadTasks(taskList, projectList, currentFilters);
}
function deleteTask(task) {
  let index = taskList.indexOf(task);
  taskList.splice(index, 1);
  loadTasks(taskList, projectList, currentFilters);
}
function completeTask(task) {
  let index = taskList.indexOf(task);
  taskList[index].completed = true;
  loadTasks(taskList, projectList, currentFilters);
}
function decompleteTask(task) {
  let index = taskList.indexOf(task);
  taskList[index].completed = false;
  loadTasks(taskList, projectList, currentFilters);
}
function getCurrentSection() {
  return currentSection;
}

function selectTaskSection(taskSectionTitle) {
  let contentTitle = document.querySelector(".content-title");
  contentTitle.textContent = taskSectionTitle;
  taskSectionTitle = taskSectionTitle.toLowerCase();
  let filters;
  switch (taskSectionTitle) {
    case "inbox":
      filters = Filters(search, false, false, false, null);
      break;
    case "today":
      filters = Filters(search, true, false, false, null);
      break;
    case "this week":
      filters = Filters(search, false, true, false, null);
      break;
    case "completed":
      filters = Filters(search, false, false, true, null);
      break;
    default:
      throw new Error("Weird taskSectionTitle!");
  }
  currentSection = taskSectionTitle;
  currentFilters = filters;
  loadTasks(taskList, projectList, filters);
}
function loadProjectTasks(project) {
  let contentTitle = document.querySelector(".content-title");
  contentTitle.textContent = project.title;
  currentSection = `project-${project.id}`;
  let filters = Filters(search, false, false, false, project);
  currentFilters = filters;
  loadTasks(taskList, projectList, filters);
}
function initializeLoadTaskListeners() {
  let taskSections = document.querySelectorAll(".task-section");
  let searchBar = document.querySelector("#search-field");

  taskSections.forEach((taskSection) =>
    taskSection.addEventListener("click", () => {
      let taskSectionTitle = taskSection.querySelector(".title").textContent;
      selectTaskSection(taskSectionTitle);
    })
  );
  searchBar.addEventListener("input", () => {
    search = searchBar.value;
    currentFilters.setSearch(search);
    loadTasks(taskList, projectList, currentFilters);
  });
  searchBar.addEventListener("keydown", (event) => {
    if (event.key === "Escape") searchBar.blur();
  });
}

function getTaskList() {
  return taskList;
}
function getProjectList() {
  return projectList;
}
function setTaskListFromJSON(newTaskList) {
  taskList = [];
  newTaskList.forEach((task) => {
    taskList.push(
      Task(
        task.title,
        task.description,
        task.dueDate,
        task.priority,
        task.project,
        task.completed,
        task.id
      )
    );
  });
}
function setProjectListFromJSON(newProjectList) {
  projectList = [];
  newProjectList.forEach((project) => {
    projectList.push(Project(project.title, project.id, project.numberOfTasks));
  });
}
function getThisWeekDate() {
  let today = new Date();
  let thisWeekDate = new Date();
  let oneDayInMilliseconds = 24 * 60 * 60 * 1000;
  if (today.getDay() !== 0) {
    thisWeekDate.setTime(today.getTime() - oneDayInMilliseconds);
  } else {
    thisWeekDate.setTime(today.getTime() + oneDayInMilliseconds);
  }
  return thisWeekDate;
}
function setDefaultFirstImpressionTasksAndProjects() {
  GetID.initialize();
  let todayDueDate = new Date();
  let thisWeekDueDate = getThisWeekDate();
  let exampleProject = Project("Example");
  let shortcutsProject = Project("Shortcuts");
  let welcomeToVertexTask = Task(
    "Welcome to Vertex!",
    " We are here to help you boost your productivity! Feel free to create any task or project you wish! You can delete these tasks anytime! ",
    null,
    1,
    null
  );
  let projectsForOrganizingTask = Task(
    "Use projects for organizing!",
    " Organize all of your tasks through projects. Sorting everything has never been easier! ",
    "",
    1,
    exampleProject.id
  );
  let shortcutsTask = Task(
    "Shortcuts",
    " Use your keyboard on desktop to navigate your tasks faster. ",
    null,
    1,
    shortcutsProject.id
  );
  let completedTask = Task(
    "Completed tasks",
    " You can see all of your completed tasks here. Be amazed at how much you have been able to do. ",
    todayDueDate,
    1,
    null,
    true
  );
  let sortYourTasksTask = Task(
    " Sort your tasks however you want! ",
    " We offer 4 color coded priority options for you to sort your tasks. You can also set a due date for each specific one. ",
    null,
    1,
    null
  );
  let weeklyTask = Task(
    "Weekly tasks",
    " You can also see the tasks for this week in the this week section ",
    thisWeekDueDate,
    2,
    null
  );
  let todayTask = Task(
    "Today tasks",
    " You can see the tasks for today in the today section in the menu. ",
    todayDueDate,
    2,
    null
  );
  let taskSectionsTask = Task(
    "Task sections",
    " Navigate through task sections by pressing keys: press I or H for inbox, D for today, W for this week and C for completed. ",
    null,
    3,
    shortcutsProject.id
  );
  let menuTask = Task(
    "Menu",
    " Toggle your menu with M ",
    null,
    3,
    shortcutsProject.id
  );
  let searchTask = Task(
    "Search",
    " Enter the searchbar with S ",
    null,
    3,
    shortcutsProject.id
  );
  let addProjectsAndTasksTask = Task(
    "Add projects and tasks",
    " Use keyboard combos to open forms: A+T for adding a task and A+P for adding a project ",
    null,
    3,
    shortcutsProject.id
  );
  let taskFormTask = Task(
    "Task form",
    " The task form also has it's own shortcuts: CTRL+ENTER to submit it, ESC to cancel it and 1,2,3,N to select their respective priorities. ",
    null,
    3,
    shortcutsProject.id
  );
  let projectFormTask = Task(
    "Project form",
    " The project form can also be submitted with CTRL+ENTER and canceled with ESC ",
    null,
    3,
    shortcutsProject.id
  );
  projectList.push(exampleProject, shortcutsProject);
  taskList.push(
    welcomeToVertexTask,
    projectsForOrganizingTask,
    shortcutsTask,
    completedTask,
    sortYourTasksTask,
    todayTask,
    weeklyTask,
    taskSectionsTask,
    menuTask,
    searchTask,
    addProjectsAndTasksTask,
    taskFormTask,
    projectFormTask
  );
}
function initializeData() {
  restoreData();
  GetID.initialize();
  //GetID gets base id from taskList and projectList,
  //therefore need to load them first
  Menu.submitAllProjectsFromData(projectList);
  loadTasks(taskList, projectList, Filters(search, false, false, false, null));
}
hideLoadingScreen();
Menu.initialize();
initializeData();
autoResizeElements();
initializeTaskPopup(submitTask, cancelTask, getCurrentSection);
initializeLoadTaskListeners();
initializeKeyboardShortcuts();
export { resizeElement };
export { editTask, deleteTask, completeTask, decompleteTask };
export {
  getTaskList,
  setTaskListFromJSON,
  getProjectList,
  setProjectListFromJSON,
  setDefaultFirstImpressionTasksAndProjects,
};
let openAddProject = Menu.openProjectForm;
let closeAddProject = Menu.closeProjectForm;
let submitAddProject = Menu.submitProject;
export {
  selectAndHighlightTaskSection,
  openAddProject,
  closeAddProject,
  submitAddProject,
  submitTask,
  cancelTask,
};
