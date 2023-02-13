var ToDo = /** @class */ (function () {
    function ToDo() {
        this.Tasks = [];
    }
    //method called addtask that adds task to my Tasks array
    ToDo.prototype.addTask = function (task) {
        this.Tasks.push(task);
        console.log("Task: " + task + " add to my Tasks array.");
        return this.Tasks.length;
    };
    //method to loop through array Tasks
    ToDo.prototype.listAllTasks = function () {
        for (var i = 0; i < this.Tasks.length; i++) {
            console.log("Task " + (i + 1) + " is " + this.Tasks[i]);
        }
        this.Tasks.forEach(function (item) {
            console.log(item);
        });
    };
    // //method to delete the item at the first index of the array Tasks
    ToDo.prototype.deleteTask = function (task) {
        var index = this.Tasks.indexOf(task);
        if (index > -1) {
            this.Tasks.splice(index, 1);
            console.log("Task" + task + "deleted from the array.");
        }
        else {
            console.log("Task" + task + "not present in array.");
        }
        return this.Tasks.length;
    };
    return ToDo;
}());
var myTodo = new ToDo();
myTodo.addTask("Eat");
myTodo.addTask("Work");
myTodo.addTask("Drink");
myTodo.listAllTasks();
