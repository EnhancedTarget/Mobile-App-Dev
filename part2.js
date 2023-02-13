var Tasks = [];
//method called addtask that adds task to my Tasks array
function addTask(task) {
    Tasks.push(task);
    console.log("Task: " + task + " add to my Tasks array.");
    return Tasks.length;
}
//method to loop through array Tasks 
function listAllTasks() {
    for (var i = 0; i < Tasks.length; i++) {
        console.log("Task " + (i + 1) + " is " + Tasks[i]);
    }
    Tasks.forEach(function (item) {
        console.log(item);
    });
}
//method to delete the item at the first index of the array Tasks
function deleteTask(task) {
    var index = Tasks.indexOf(task);
    if (index > -1) {
        Tasks.splice(index, 1);
        console.log("Task" + task + "deleted from the array.");
    }
    else {
        console.log("Task" + task + "not present in array.");
    }
    return Tasks.length;
}
addTask("Eat");
addTask("Work");
addTask("Sleep");
listAllTasks();
deleteTask("eat");
listAllTasks();
