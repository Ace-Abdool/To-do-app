import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import TaskInput from "./TaskInput";

function TaskPanel(props) {
    const [tasks, updateTasks] = useState(JSON.parse(sessionStorage.getItem('myTasks') || '[]'));
    useEffect(() => {
        const interval = setInterval(() => {
            const stored = sessionStorage.getItem("myTasks"); 
            const parsed = stored ? JSON.parse(stored) : [];
            updateTasks(parsed);
        }, 1000)
        return () => clearInterval(interval);
    }, []);

    const addTask = (task) => { 
        const updated = [...tasks, task]; 
        updateTasks(updated); 
        sessionStorage.setItem("myTasks", JSON.stringify(updated)); 
    };
    const removeTask = (index) => { 
        const updatedTasks = tasks.filter((_, i) => i !== index); 
        updateTasks(updatedTasks); 
        sessionStorage.setItem("myTasks", JSON.stringify(updatedTasks));
    };
    return (
        <div className={props.class}>
            <TaskInput addTask={addTask} head='task-head' subclass='task-input'/>
            <h2>Tasks</h2>
            <div className={props.tasks}>
                {  
                    tasks.map((task, index) => (
                    <p key={index}><span>{task}</span><button onClick={()=> removeTask(index)}><FontAwesomeIcon icon={faTrash}/> </button></p>
                ))}
            </div>
        </div>
    )
}

export default TaskPanel;