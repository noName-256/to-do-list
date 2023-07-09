import { Filters } from "./taskLoading";
function countTasks(taskList, filters) {
  let filteredTaskList = taskList.filter(filters.taskIsValid);
  return filteredTaskList.length;
}
function loadForTaskSection(section, taskList) {
  section = section.toLowerCase();
  let taskSection = document.querySelector(`.tasks-sections .${section}`);
  let numberOfTasksElement = taskSection.querySelector(".number-of-tasks");
  let filters;
  switch (section) {
    case "inbox":
      filters = Filters("", false, false, false, null);
      break;
    case "today":
      filters = Filters("", true, false, false, null);
      break;
    case "this-week":
      filters = Filters("", false, true, false, null);
      break;
    case "done":
      filters = Filters("", false, false, true, null);
      break;
    default:
      throw new Error("Weird taskSectionTitle!");
  }
  let numberOfTasks = countTasks(taskList, filters);
  numberOfTasksElement.textContent = numberOfTasks ? numberOfTasks : "";
}
function loadForAllTaskSections(taskList) {
  loadForTaskSection("inbox", taskList);
  loadForTaskSection("today", taskList);
  loadForTaskSection("this-week", taskList);
  loadForTaskSection("done", taskList);
}
function loadForProjectSection(taskList, project) {
  let filters = Filters("", false, false, false, project);
  let projectSectionElement = document.querySelector(
    `.projects .project-${project.id}`
  );
  let numberOfTasksElement =
    projectSectionElement.querySelector(".number-of-tasks");
  project.numberOfTasks = countTasks(taskList, filters);
  numberOfTasksElement.textContent = project.numberOfTasks
    ? project.numberOfTasks
    : "";
}
function loadForAllProjectSections(taskList, projectList) {
  projectList.forEach((project) => loadForProjectSection(taskList, project));
}
export function loadAllNumbersOfTasks(taskList, projectList) {
  loadForAllTaskSections(taskList);
  loadForAllProjectSections(taskList, projectList);
}
