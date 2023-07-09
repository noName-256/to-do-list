import { resizeElement } from ".";
let taskPopupContainer = document.querySelector(".task-popup-container");
let taskPopup = document.querySelector(".task-popup");
let addTaskButtons = document.querySelectorAll(".add-task-button");
let cancelTaskButton = taskPopup.querySelector("button.cancel");
let submitTaskButton = taskPopup.querySelector("button.submit");
let titleInput = taskPopup.querySelector("input.title");
let descriptionInput = taskPopup.querySelector("textarea.description");
let prioritySelectionButton = taskPopup.querySelector(".priority-button");
let prioritySelectionButtonText =
  prioritySelectionButton.querySelector(".text");
let prioritySelectionButtonImage = prioritySelectionButton.querySelector("img");
let projectSelectionButton = taskPopup.querySelector(".project-button");
let projectSelectionButtonImage = projectSelectionButton.querySelector("img");
let projectSelectionButtonText = projectSelectionButton.querySelector(".text");
let projectDropdown = taskPopup.querySelector(".project-dropdown");
let priorityDropdown = taskPopup.querySelector(".priority-dropdown");
let priorityDropdownOptions =
  priorityDropdown.querySelectorAll(".dropdown-option");
let projectDropdownOptions =
  projectDropdown.querySelectorAll(".dropdown-option");
let dateInput = taskPopup.querySelector("input.date-picker");

let getCurrentSection,
  currentEditingTask = {
    value: null,
  }; /* object so that it can be passed around files */
function setEditingTaskDefaultOptions() {
  titleInput.value = currentEditingTask.value.title;
  descriptionInput.value = currentEditingTask.value.description;
  dateInput.value = currentEditingTask.value.dueDate;
  let chosenPriorityOption = taskPopup.querySelector(
    `.priority-${
      currentEditingTask.value.priority
        ? currentEditingTask.value.priority
        : "none"
    }`
  );
  submitPriorityOption(chosenPriorityOption);
  let chosenProjectOption = taskPopup.querySelector(
    `.project-${currentEditingTask.value.project}`
  );
  if (chosenProjectOption) submitProjectOption(chosenProjectOption);
}
function setCurrentSectionDefaultOptions() {
  let currentSection = getCurrentSection();
  if (currentSection.includes("project-"))
    submitProjectOption(taskPopup.querySelector(`.${currentSection}`));
  else if (currentSection === "today") dateInput.valueAsDate = new Date();
}
function showTaskPopup() {
  setCurrentSectionDefaultOptions();
  if (currentEditingTask.value) setEditingTaskDefaultOptions();
  taskPopupContainer.style.display = "flex";
  taskPopupContainer.classList.add("visible");
  resizeElement(descriptionInput);
  titleInput.focus();
}
function hideTaskPopup() {
  taskPopupContainer.classList.remove("visible");
  let bodyStyles = window.getComputedStyle(document.body);
  let hideDelay = bodyStyles.getPropertyValue("--task-popup-snap-time");
  let numberOfSeconds = +hideDelay.replace(/[^0-9\.]+/g, "");
  setTimeout(() => {
    taskPopupContainer.style.display = "none";
    resetTaskPopup();
  }, numberOfSeconds * 1000);
}
function resetTaskPopup() {
  taskPopup.reset();
  prioritySelectionButton.classList.remove("p1");
  prioritySelectionButton.classList.remove("p2");
  prioritySelectionButton.classList.remove("p3");
  prioritySelectionButton.classList.remove("pn");
  prioritySelectionButtonImage.src = "flag-outline.svg";
  prioritySelectionButtonText.textContent = "Priority";
  projectSelectionButton.className = "project-button";
  projectSelectionButtonImage.src = "inbox.svg";
  projectSelectionButtonText.textContent = "Inbox";
}
function cancelTaskPopup(cancelFunction) {
  hideTaskPopup();
  cancelFunction(currentEditingTask);
}
function submitTaskPopup(submitFunction) {
  submitFunction(currentEditingTask);
  hideTaskPopup();
}
function editTask(task) {
  currentEditingTask.value = task;
  showTaskPopup();
}
function openDropdown(dropdownElement) {
  dropdownElement.classList.add("visible");
}
function closeDropdown(dropdownElement) {
  dropdownElement.classList.remove("visible");
}
function submitPriorityOption(pickedOption) {
  prioritySelectionButton.classList.remove("p1");
  prioritySelectionButton.classList.remove("p2");
  prioritySelectionButton.classList.remove("p3");
  prioritySelectionButton.classList.remove("pn");
  if (pickedOption.classList.contains("priority-1")) {
    prioritySelectionButton.classList.add("p1");
    prioritySelectionButtonImage.src = "flag.svg";
    prioritySelectionButtonText.textContent = "P1";
  } else if (pickedOption.classList.contains("priority-2")) {
    prioritySelectionButton.classList.add("p2");
    prioritySelectionButtonImage.src = "flag.svg";
    prioritySelectionButtonText.textContent = "P2";
  } else if (pickedOption.classList.contains("priority-3")) {
    prioritySelectionButton.classList.add("p3");
    prioritySelectionButtonImage.src = "flag.svg";
    prioritySelectionButtonText.textContent = "P3";
  } else if (pickedOption.classList.contains("priority-none")) {
    prioritySelectionButton.classList.add("pn");
    prioritySelectionButtonImage.src = "flag-outline.svg";
    prioritySelectionButtonText.textContent = "None";
  }
}
function submitProjectOption(pickedOption) {
  let pickedOptionText = pickedOption.querySelector(".text");
  let pickedOptionImgSrc = pickedOption.querySelector("img").src;
  projectSelectionButtonText.textContent = pickedOptionText.textContent;
  projectSelectionButtonImage.src = pickedOptionImgSrc;
  projectSelectionButton.className = pickedOption.className.replace(
    "dropdown-option",
    "project-button"
  );
}
function dropdownIsOpen(dropdownElement) {
  if (dropdownElement.classList.contains("visible")) return true;
  return false;
}
function initializePrioritySelection() {
  taskPopup.addEventListener("click", () => {
    closeDropdown(priorityDropdown);
  });
  taskPopupContainer.addEventListener("click", () => {
    closeDropdown(priorityDropdown);
  });
  prioritySelectionButton.addEventListener("click", (event) => {
    if (!dropdownIsOpen(priorityDropdown)) {
      openDropdown(priorityDropdown);
      closeDropdown(projectDropdown);
    } else closeDropdown(priorityDropdown);
    event.stopPropagation();
  });
  priorityDropdown.addEventListener("click", (event) => {
    event.stopPropagation;
  });
  priorityDropdownOptions.forEach((option) =>
    option.addEventListener("click", () => {
      submitPriorityOption(option);
    })
  );
}
function initializeProjectSelection() {
  taskPopup.addEventListener("click", () => {
    closeDropdown(projectDropdown);
  });
  taskPopupContainer.addEventListener("click", () => {
    closeDropdown(projectDropdown);
  });
  projectSelectionButton.addEventListener("click", (event) => {
    if (!dropdownIsOpen(projectDropdown)) {
      openDropdown(projectDropdown);
      closeDropdown(priorityDropdown);
    } else closeDropdown(projectDropdown);
    event.stopPropagation();
  });
  projectDropdown.addEventListener("click", (event) => {
    event.stopPropagation;
  });
  projectDropdownOptions.forEach((option) =>
    option.addEventListener("click", () => {
      submitProjectOption(option);
    })
  );
}

function getProjectDropdownOptionHTML(project) {
  return `
  <button type="button" class="dropdown-option project-${project.id}">
    <img src="list-box.svg" alt="project">
    <div class="text">${project.title}</div>
  </button>`;
}
function createNewProjectDropdownOption(project) {
  let newDropdownOption = document.createElement("div");
  projectDropdown.appendChild(newDropdownOption);
  newDropdownOption.outerHTML = getProjectDropdownOptionHTML(project);
  newDropdownOption = document.querySelector(
    `.task-popup .project-select .project-${project.id}`
  );
  newDropdownOption.addEventListener("click", () => {
    submitProjectOption(newDropdownOption);
  });
}

function initializeTaskPopup(
  submitFunction,
  cancelFunction,
  getCurrentSectionFunction
) {
  getCurrentSection = getCurrentSectionFunction;
  addTaskButtons.forEach((taskButton) =>
    taskButton.addEventListener("click", () => {
      showTaskPopup();
    })
  );
  taskPopup.addEventListener("click", (event) => {
    event.stopPropagation();
  });
  taskPopupContainer.addEventListener("click", () => {
    cancelTaskPopup(cancelFunction);
  });
  cancelTaskButton.addEventListener("click", () => {
    cancelTaskPopup(cancelFunction);
  });
  submitTaskButton.addEventListener("click", () => {
    if (taskPopup.matches(":valid")) submitTaskPopup(submitFunction);
  });
  taskPopup.addEventListener("submit", () => {
    if (taskPopup.matches(":valid")) submitTaskPopup(submitFunction);
  });
  initializePrioritySelection();
  initializeProjectSelection();
}
export {
  editTask,
  createNewProjectDropdownOption,
  initializeTaskPopup,
  showTaskPopup,
  cancelTaskPopup,
  submitTaskPopup,
  submitPriorityOption,
};
