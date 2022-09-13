var tasks = [];//array to store incompleted tasks
let compleTasks = []; //array to store completed tasks

//function to get text from user and push it into array 
function addTask() {
  let task = document.getElementById("new-task").value;
  var ob = {
    task: task,
    flag: 0,
    uid: Math.ceil(Math.random()*100)
  };
  tasks.push(ob);
  console.log(tasks);
  display();
}


//function to display incomplete tasks
function display() {
  let str = "";
  var data;
  let i;
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].flag == 0) {
      str +=
        '<input type="checkbox" onclick="showComplete(\'' +
        tasks[i].uid +
        "')\">" +
        tasks[i].task +
        '<input type="button" onclick="edit(\'' +
        tasks[i].uid+ 
        '\')" value="Edit"><input type="button" onclick="delFun(\'' +
        tasks[i].uid+
        '\')" value="Delete"><br>';
    }
  }
  document.getElementById("incomplete-tasks").innerHTML = str;
}


//function to remove checked tasks from incomplete array to add them to array of completed tasks
function showComplete(val) {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].uid == val) {
      compleTasks.push(tasks[i]);
      tasks.splice(i, 1);
    }
  }
  display();
  displayCompleted();
}

//function to display completed tasks
function displayCompleted() {
  let str = "";
  var data;
  let i;
  for (let i = 0; i < compleTasks.length; i++) {
    if (compleTasks[i].flag == 0) {
      // console.log("hey in for " + tasks[i].task);
      str +=
        '<input type="checkbox"onclick="showComplete2(\'' +
        compleTasks[i].uid +
        "')\" checked>" +
        '<h4 style="text-decoration:line-through;display:inline">' +
        compleTasks[i].task +
        "</h4>" +
        '<input type="button" onclick="edit2(\'' +
        compleTasks[i].uid +
        '\')" value="Edit"><input type="button" onclick="delFun2(\'' +
        compleTasks[i].uid +
        '\')" value="Delete"><br>';
    }
  }
  document.getElementById("completed-tasks").innerHTML = str;
}

//function to delete tasks of incomplete tasks array
function delFun(val) {
  // console.log("in del "+val.uid);
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].uid == val) {
      tasks.splice(i, 1);
    }
  }
  display();
}

//function to delete tasks of complete tasks array
function delFun2(val) {
  for (let i = 0; i < compleTasks.length; i++) {
    if (compleTasks[i].uid == val) {
      compleTasks.splice(i, 1);
    }
  }
  displayCompleted();
}


//function to edit/update the value of old incomplete tasks
function edit(uid) {
  // document.getElementById("new-task").value = val;
  document.getElementById("addButton").style.display = "none";
  document.getElementById("updateButton").style.display = "inline";
  document.getElementById("updateButton").onclick = function () {
    let new_val = document.getElementById("new-task").value;
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].uid == uid) {
        tasks[i].task = new_val;
        tasks[i].flag = 0;
      }
    }
    document.getElementById("addButton").style.display = "inline";
    document.getElementById("updateButton").style.display = "none";
    display();
  };
}

//function to edit/update the value of old completed tasks
function edit2(val) {
  // document.getElementById("new-task").value = val;
  document.getElementById("addButton").style.display = "none";
  document.getElementById("updateButton").style.display = "inline";
  document.getElementById("updateButton").onclick = function () {
    let new_val = document.getElementById("new-task").value;
    for (let i = 0; i < compleTasks.length; i++) {
      if (compleTasks[i].uid == val) {
        compleTasks[i].task = new_val;
        compleTasks[i].flag = 0;
      }
    }
    document.getElementById("addButton").style.display = "inline";
    document.getElementById("updateButton").style.display = "none";
    displayCompleted();
  };
}

//function to remove tasks from completed tasks and add them in incomplete tasks array
function showComplete2(val) {
  for (let i = 0; i < compleTasks.length; i++) {
    if (compleTasks[i].uid == val) {
      tasks.push(compleTasks[i]);
      compleTasks.splice(i, 1);
    }
  }
  display();
  displayCompleted();
}
