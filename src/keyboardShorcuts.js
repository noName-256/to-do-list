import {
  selectAndHighlightTaskSection,
  openAddProject,
  closeAddProject,
  submitAddProject,
  submitTask,
  cancelTask,
} from ".";
import {
  showTaskPopup,
  submitTaskPopup,
  cancelTaskPopup,
  submitPriorityOption,
} from "./taskPopup";
let menu = document.querySelector("#menu");
let serachbar = document.querySelector("#search-field");
let projectForm = menu.querySelector(".project-form");
let pressedA = false;
function focusInInput() {
  let activeElement = document.activeElement;
  return activeElement.matches("input");
}
function focusInTextarea() {
  let activeElement = document.activeElement;
  return activeElement.matches("textarea");
}
function focusInSubmitButton() {
  let activeElement = document.activeElement;
  return activeElement.matches("button.submit");
}
function taskPopupVisible() {
  let taskPopupContainer = document.querySelector(".task-popup-container");
  if (taskPopupContainer.classList.contains("visible")) return true;
  return false;
}
function projectFormOpen() {
  let addingProject = document.querySelector(".add-project.adding");
  return addingProject ? true : false;
}
function proccessKeyOutsideForms(event) {
  let activeElement = document.activeElement;
  let focusInInput = activeElement.matches("input");
  if (event.ctrlKey) return;
  if (focusInInput) return;

  let key = event.key.toLowerCase();
  let preventDefault = true;
  switch (key) {
    case "m":
      menu.classList.toggle("hidden");
      break;
    case "s":
      serachbar.focus();
      break;
    case "h":
    case "i":
      selectAndHighlightTaskSection("Inbox");
      break;
    case "d":
      selectAndHighlightTaskSection("Today");
      break;
    case "w":
      selectAndHighlightTaskSection("This week");
      break;
    case "c":
      selectAndHighlightTaskSection("Completed");
      break;
    case "a":
      pressedA = true;
      setTimeout(() => {
        pressedA = false;
      }, 5000);
      break;
    case "t":
      if (pressedA) showTaskPopup();
      break;
    case "p":
      if (pressedA) openAddProject();
      break;
    default:
      preventDefault = false;
  }
  if (key !== "a") pressedA = false;
  if (preventDefault) event.preventDefault();
}
function proccessKeyWithingTaskForm(event) {
  switch (event.key) {
    case "1":
      if (focusInInput() || focusInTextarea()) return;
      let priority1Option = document.querySelector(".task-popup .priority-1");
      submitPriorityOption(priority1Option);
      break;
    case "2":
      if (focusInInput() || focusInTextarea()) return;
      let priority2Option = document.querySelector(".task-popup .priority-2");
      submitPriorityOption(priority2Option);
      break;
    case "3":
      if (focusInInput() || focusInTextarea()) return;
      let priority3Option = document.querySelector(".task-popup .priority-3");
      submitPriorityOption(priority3Option);
      break;
    case "n":
      if (focusInInput() || focusInTextarea()) return;
      let priorityNoneOption = document.querySelector(
        ".task-popup .priority-none"
      );
      submitPriorityOption(priorityNoneOption);
      break;
  }
  if ((event.keyCode === 10 || event.keyCode === 13) && event.ctrlKey) {
    let taskPopup = document.querySelector(".task-popup");
    if (focusInInput()) return;
    //this is because pressing enter in an input element triggers a form submition,
    //so it would trigger twice with this shorcut
    if (focusInSubmitButton()) return;
    //same for the submit button in the form,
    if (!taskPopup.matches(":valid")) return;
    submitTaskPopup(submitTask);
    event.stopPropagation();
  }
  if (event.keyCode === 27) {
    cancelTaskPopup(cancelTask);
    event.stopPropagation();
  }
}
function proccesKeyWithinProjectForm(event) {
  if ((event.keyCode === 10 || event.keyCode === 13) && event.ctrlKey) {
    let projectForm = document.querySelector(".project-form");
    if (focusInInput()) return;
    //this is because pressing enter in an input element triggers a form submition,
    //so it would trigger twice with this shorcut
    if (focusInSubmitButton()) return;
    //same for the submit button in the form,
    if (!projectForm.matches(":valid")) return;
    submitAddProject();
    event.stopPropagation();
  }
  if (event.keyCode === 27) {
    closeAddProject();
    event.stopPropagation();
  }
  console.log(event);
}
function proccessKey(event) {
  if (taskPopupVisible()) proccessKeyWithingTaskForm(event);
  else if (projectFormOpen()) proccesKeyWithinProjectForm(event);
  else proccessKeyOutsideForms(event);
}

export function initializeKeyboardShortcuts() {
  window.addEventListener("keydown", proccessKey);
}
