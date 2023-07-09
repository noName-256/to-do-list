import {
  getTaskList,
  setTaskListFromJSON,
  getProjectList,
  setProjectListFromJSON,
  setDefaultFirstImpressionTasksAndProjects,
} from ".";
Storage.prototype.setObject = function (key, value) {
  this.setItem(key, JSON.stringify(value));
};
Storage.prototype.getObject = function (key) {
  return JSON.parse(this.getItem(key));
};
function storeData() {
  localStorage.setObject("tasks", getTaskList());
  localStorage.setObject("projects", getProjectList());
  localStorage.setItem("visitedSiteBefore", true);
}
function restoreData() {
  let visitedSiteBefore = localStorage.getItem("visitedSiteBefore");
  if (!visitedSiteBefore) {
    setDefaultFirstImpressionTasksAndProjects();
  } else {
    setTaskListFromJSON(localStorage.getObject("tasks"));
    setProjectListFromJSON(localStorage.getObject("projects"));
  }
}
window.addEventListener("beforeunload", storeData);

export { restoreData };
