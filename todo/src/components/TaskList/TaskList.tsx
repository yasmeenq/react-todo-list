import css from "./TaskList.module.css";
import { Task } from "../Task/Task";
import { TaskProps } from "../interface/taskInterface";
import { useState } from "react";

export function TaskList(): JSX.Element {

    const[taskList, setTaskList] = useState<TaskProps[]>([]);
    const[newTask, setNewTask] = useState<string>('');

    const fetchTask = (event:any) =>{
        setNewTask(event.target.value);
        console.log(newTask);
    }

    function addTask(){
        if(newTask.trim()==='') return;
        const newInput: TaskProps={
            id: taskList.length+1,
            text: newTask,
            completed: false,
            deleteTask: deleteTask,
            taskCompleted: completeTask
        }
        setTaskList([...taskList, newInput]);
        setNewTask('');
    }

    function deleteTask(id:number){
        const listAfterDelete = taskList.filter((todo:TaskProps)=>todo.id!==id);
        setTaskList(listAfterDelete);
    }

    function completeTask(id:number){
        const listAfterComplete = taskList.map((todo:TaskProps)=>{
            return todo.id==id? {...todo, completed: !todo.completed}  : todo
        })
        setTaskList(listAfterComplete);
    }

    return (
        <div className={css.TaskList}>
			<h1>Todo List:</h1>
            <input type="text" value={newTask} onChange={fetchTask}/>
            <button onClick={addTask}>Add</button>
            <ol>
                {
                    taskList.map( (todo:TaskProps)=>
                        <Task 
                        key={todo.id}
                        id ={todo.id}
                        text={todo.text}
                        completed={todo.completed}
                        deleteTask = {() => deleteTask(todo.id)}
                        taskCompleted = {() => completeTask(todo.id)}                        
                        />
                    )
                }
            </ol>
        </div>
    );
}
