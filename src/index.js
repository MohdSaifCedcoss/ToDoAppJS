var tasks = [];
let compleTasks = [];
function addTask() {
  let task = document.getElementById("new-task").value;
  var ob = {
    task: task,
    flag: 0,
  };
  tasks.push(ob);
  display();
}

function display() {
  let str = "";
  var data;
  let i;
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].flag == 0) {
      str +=
        '<input type="checkbox" onclick="showComplete(\'' +
        tasks[i].task +
        "')\">" +
        tasks[i].task +
        '<input type="button" onclick="edit(\'' +
        tasks[i].task +
        '\')" value="Edit"><input type="button" onclick="delFun(\'' +
        tasks[i].task +
        '\')" value="Delete"><br>';
    }
  }
  document.getElementById("incomplete-tasks").innerHTML = str;
}

function showComplete(val) {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].task == val) {
      compleTasks.push(tasks[i]);
      tasks.splice(i, 1);
    }
  }
  display();
  displayCompleted();
}
function displayCompleted() {
  let str = "";
  var data;
  let i;
  for (let i = 0; i < compleTasks.length; i++) {
    if (compleTasks[i].flag == 0) {
      // console.log("hey in for " + tasks[i].task);
      str +=
        '<input type="checkbox"onclick="showComplete2(\'' +
        compleTasks[i].task +
        "')\" checked>" +
        '<h4 style="text-decoration:line-through;display:inline">' +
        compleTasks[i].task +
        "</h4>" +
        '<input type="button" onclick="edit2(\'' +
        compleTasks[i].task +
        '\')" value="Edit"><input type="button" onclick="delFun2(\'' +
        compleTasks[i].task +
        '\')" value="Delete"><br>';
    }
  }
  document.getElementById("completed-tasks").innerHTML = str;
}
function delFun(val) {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].task == val) {
      tasks.splice(i, 1);
    }
  }
  display();
}
function delFun2(val) {
  for (let i = 0; i < compleTasks.length; i++) {
    if (compleTasks[i].task == val) {
      compleTasks.splice(i, 1);
    }
  }
  displayCompleted();
}

function edit(val) {
  document.getElementById("new-task").value = val;
  document.getElementById("addButton").style.display = "none";
  document.getElementById("updateButton").style.display = "inline";
  document.getElementById("updateButton").onclick = function () {
    let new_val = document.getElementById("new-task").value;
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].task == val) {
        tasks[i].task = new_val;
        tasks[i].flag = 0;
      }
    }
    document.getElementById("addButton").style.display = "inline";
    document.getElementById("updateButton").style.display = "none";
    display();
  };
}
function edit2(val) {
  document.getElementById("new-task").value = val;
  document.getElementById("addButton").style.display = "none";
  document.getElementById("updateButton").style.display = "inline";
  document.getElementById("updateButton").onclick = function () {
    let new_val = document.getElementById("new-task").value;
    for (let i = 0; i < compleTasks.length; i++) {
      if (compleTasks[i].task == val) {
        compleTasks[i].task = new_val;
        compleTasks[i].flag = 0;
      }
    }
    document.getElementById("addButton").style.display = "inline";
    document.getElementById("updateButton").style.display = "none";
    displayCompleted();
  };
}
function showComplete2(val) {
  for (let i = 0; i < compleTasks.length; i++) {
    if (compleTasks[i].task == val) {
      tasks.push(compleTasks[i]);
      compleTasks.splice(i, 1);
    }
  }
  display();
  displayCompleted();
}
