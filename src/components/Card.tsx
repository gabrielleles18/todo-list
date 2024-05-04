import styles from "./Card.module.css";
import {MdDeleteOutline} from "react-icons/md";

interface CardProps {
    text: string;
    onDeleteTask: Function;
    onCompleteTask: Function;
}

export function Card({text, onDeleteTask, onCompleteTask}: CardProps) {
    return (
        <div className={styles.card}>
            <label className={styles.label}>
                <input type="checkbox" onChange={(event) => onCompleteTask(event)}/>
                <span></span>
                <p>{text}</p>
            </label>
            <MdDeleteOutline
                size={26}
                className={styles.icon}
                onClick={() => onDeleteTask(text)}
            />
        </div>
    )
}
