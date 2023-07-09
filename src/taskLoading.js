import { editTask, deleteTask, completeTask, decompleteTask } from "./index";
import { loadAllNumbersOfTasks } from "./numbersOfTasks";
function addTaskToContent(task) {
  let taskCard = document.createElement("div");
  let tasksElement = document.querySelector("#content .tasks");
  let addTaskElement = tasksElement.querySelector(".add-task");
  tasksElement.insertBefore(taskCard, addTaskElement);
  taskCard.outerHTML = task.getTaskCardHTML();
  taskCard = document.querySelector(`.task-card.task-${task.id}`);
  let editIcon = taskCard.querySelector(".edit-icon"),
    deleteIcon = taskCard.querySelector(".delete-icon"),
    completeCheckbox = taskCard.querySelector(".checkbox");
  editIcon.addEventListener("click", () => {
    editTask(task);
  });
  deleteIcon.addEventListener("click", () => {
    deleteTask(task);
  });
  completeCheckbox.addEventListener("click", (event) => {
    event.preventDefault();
    if (!task.completed) completeTask(task);
    else decompleteTask(task);
  });
}
function removeAllTaskCards() {
  let allTaskCards = document.querySelectorAll(".task-card");
  allTaskCards.forEach((taskCard) => taskCard.remove());
}
function compareDates(date1, date2) {
  let date1GoesFirst = -1,
    date2GoesFirst = 1,
    equalDates = 0;
  if (date1.getTime() === date2.getTime()) return equalDates;
  if (!date1.getTime()) return date2GoesFirst;
  if (!date2.getTime()) return date1GoesFirst;
  return date1.getTime() - date2.getTime();
}
function sameWeekDates(date1, date2) {
  let oneWeekMilliseconds = 1000 * 3600 * 24 * 7;
  let datesWithin7Days =
    Math.abs(date2.getTime() - date1.getTime()) < oneWeekMilliseconds;
  if (!datesWithin7Days) return false;
  if (date1.getDate() === date2.getDate()) return true;

  let date1Earlier = date1.getTime() < date2.getTime(),
    date2Earlier = date1.getTime() > date2.getTime();

  let date1HasEarlierWeekDay = date1.getDay() < date2.getDay(),
    date2HasEarlierWeekDay = date2.getDay() < date1.getDay();

  if (date1Earlier) {
    return date1HasEarlierWeekDay;
  } else if (date2Earlier) {
    return date2HasEarlierWeekDay;
  } else
    throw new Error(
      "Odd times, this error should never be reached through code"
    );
}
function sameDayDates(date1, date2) {
  if (date1.getFullYear() !== date2.getFullYear()) return false;
  if (date1.getMonth() !== date2.getMonth()) return false;
  if (date1.getDate() !== date2.getDate()) return false;
  return true;
}
function comparePriorities(priority1, priority2) {
  let priority1GoesFirst = -1,
    priority2GoesFirst = 1,
    equalPriorities = 0;
  if (priority1 === priority2) return equalPriorities;
  if (!priority1) return priority2GoesFirst;
  if (!priority2) return priority1GoesFirst;
  return priority1 - priority2;
}
function sortedTaskList(taskList) {
  return taskList.sort(function (task1, task2) {
    let priorityComparison = comparePriorities(task1.priority, task2.priority);
    let datesComparison = compareDates(
      new Date(task1.dueDate),
      new Date(task2.dueDate)
    );
    if (priorityComparison) return priorityComparison;
    else return datesComparison;
  });
}
function Filters(search, todayOnly, thisWeekOnly, completedOnly, project) {
  function _validSearch(task) {
    if (
      search &&
      !task.title.toLowerCase().includes(search.toLowerCase()) &&
      !task.description.toLowerCase().includes(search.toLowerCase())
    )
      return false;
    return true;
  }
  function _validDate(taskDate) {
    if (!taskDate) return false;

    let currentDate = new Date();
    if (todayOnly && !sameDayDates(taskDate, currentDate)) return false;
    if (thisWeekOnly && !sameWeekDates(taskDate, currentDate)) return false;
    return true;
  }
  function _validCompletion(taskCompleted) {
    if (completedOnly && !taskCompleted) return false;
    if (!completedOnly && taskCompleted) return false;
    return true;
  }
  function _validProject(taskProject) {
    if (project && taskProject !== project.id) return false;
    return true;
  }
  function taskIsValid(task) {
    let taskDate = new Date(task.dueDate);
    if (!_validSearch(task)) return false;
    if (!_validDate(new Date(task.dueDate))) return false;
    if (!_validCompletion(task.completed)) return false;
    if (!_validProject(task.project)) return false;
    return true;
  }
  function setSearch(newSearch) {
    search = newSearch;
  }
  function getFilters() {
    return { search, todayOnly, thisWeekOnly, completedOnly, project };
  }
  return {
    taskIsValid,
    setSearch,
    getFilters,
  };
}
function loadTasks(taskList, projectList, filters) {
  taskList = sortedTaskList(taskList);
  removeAllTaskCards();
  let filteredTaskList = taskList.filter(filters.taskIsValid);
  filteredTaskList.forEach((task) => addTaskToContent(task));
  loadAllNumbersOfTasks(taskList, projectList);
}
export { Filters, loadTasks };
