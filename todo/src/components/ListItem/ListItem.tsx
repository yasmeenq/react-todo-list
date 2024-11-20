import css from "./ListItem.module.css";
import { Layout } from "../Layout/Layout";

interface props{
    task: string;
}

export function ListItem({task}: props): JSX.Element {
    return (
        <li className={css.ListItem}>
			<label>{task}</label>
            <button>delete</button>
            <button>edit</button>
            <button>complete</button>
        </li>
    );
}
