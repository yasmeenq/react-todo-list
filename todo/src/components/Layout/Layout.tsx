import css from "./Layout.module.css";
import { ListItem } from "../ListItem/ListItem";
import { useState } from "react";

export function Layout(): JSX.Element {
    const [task, setTask] = useState(""); 
    const [tasks, setTasks] = useState<string[]>([]); 

    const fetchData = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (task.trim()) {
            setTasks([...tasks, task]);
            setTask(""); 
        }
    };

    return (
        <div className={css.Layout}>
            <form id="myForm" onSubmit={fetchData}>
                <h1>Todo list:</h1>
                <label>Add Task: </label>
                <input
                    type="text"
                    id="task"
                    name="task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <input type="submit" value="+" />
            </form>
            <br />
            <ol>
                {tasks.map((t, index) => (
                    <ListItem key={index} task={t} />
                ))}
            </ol>
        </div>
    );
}