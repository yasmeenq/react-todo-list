import css from "./Task.module.css";
import { TaskProps } from "../interface/taskInterface";


export function Task({id, text, completed, deleteTask, taskCompleted}:TaskProps):JSX.Element{
    return (
        <div className={css.Task}>
			<li className={css.container}>
                <span>{text}</span>
                <button onClick={()=>deleteTask(id)}>Delete</button>
                <button onClick={()=>taskCompleted(id)}> {completed? 'Undo': 'Completed'} </button>
            </li>
        </div>
    );
}
