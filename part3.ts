interface ToDoInterface{
    Tasks:string[];
    addTask(task:string):number;
    listAllTasks(): void;
    deleteTask(task:string):number;
}

class ToDo implements ToDoInterface{
    constructor(){}

    Tasks: string[] = [];

    //method called addtask that adds task to my Tasks array
    addTask(task: string):number {
        this.Tasks.push(task);
        console.log("Task: " + task + " add to my Tasks array.");
        return this.Tasks.length;
    }

    //method to loop through array Tasks
    listAllTasks(){
        for (let i = 0; i < this.Tasks.length; i++){
            console.log("Task "+(i+1)+" is "+this.Tasks[i]);
        }
    
        this.Tasks.forEach((item)=>{
            console.log(item);
        })
    }

    // //method to delete the item at the first index of the array Tasks
    deleteTask(task:string):number{
        let index:number = this.Tasks.indexOf(task);
        if (index > -1 ){
            this.Tasks.splice(index, 1);
            console.log("Task"+ task + "deleted from the array.");
        }
        else{
            console.log("Task"+ task + "not present in array.");
        }
        return this.Tasks.length;
    }
}
let myTodo = new ToDo();
myTodo.addTask("Eat");
myTodo.addTask("Work");
myTodo.addTask("Drink");
myTodo.listAllTasks();