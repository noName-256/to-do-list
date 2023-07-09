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
  sessionStorage.setObject("tasks", getTaskList());
  sessionStorage.setObject("projects", getProjectList());
  sessionStorage.setItem("visitedSiteBefore", true);
}
function restoreData() {
  let visitedSiteBefore = sessionStorage.getItem("visitedSiteBefore");
  if (!visitedSiteBefore) {
    setDefaultFirstImpressionTasksAndProjects();
  } else {
    setTaskListFromJSON(sessionStorage.getObject("tasks"));
    setProjectListFromJSON(sessionStorage.getObject("projects"));
  }
}
window.addEventListener("beforeunload", storeData);

export { restoreData };
