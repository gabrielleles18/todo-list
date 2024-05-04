import styles from "./NotFound.module.css";
import {BsClipboard2Data} from "react-icons/bs";

export function NotFound() {
    return (
        <div className={styles.notfound}>
            <BsClipboard2Data size={60} className={styles.icon}/>
            <p><b>Você ainda não tem tarefas cadastradas</b></p>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}
