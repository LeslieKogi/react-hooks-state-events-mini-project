import React,{useState} from "react";
import Task from "./Task";

function TaskList({tasks, categoryFilter}) {
  const [taskList, setTasklist]=useState(tasks)


  function handleDelete(text){
   console.log("Deleted")
   
   const filteredTasks=tasks.filter((task)=>(
    task.text !== text
   ))
   setTasklist(filteredTasks)

  }
  const tasksToDisplay=taskList.filter((task)=>{
   if(categoryFilter ==="All") return true
   return task.category === categoryFilter

})

  return (
    <div  className="tasks">
      {tasksToDisplay.map((task)=>(
        <Task keyt={task.text} text={task.text} category={task.category} handleDelete={handleDelete}/>))}
      
    </div>
  );
}

export default TaskList;
