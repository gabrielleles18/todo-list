import {Header} from "./components/Header.tsx";
import styles from "./App.module.css";
import {BiPlusCircle} from "react-icons/bi";
import {Counter} from "./components/Counter.tsx";
import {NotFound} from "./components/NotFound.tsx";
import {Card} from "./components/Card.tsx";
import React, {useState} from "react";

function App() {
    const [tasks, setTasks] = useState<Array<string>>([]);
    const [newTask, setNewTask] = useState<string>('');
    const [completedTasks, setCompletedTasks] = useState<number>(0);
    const [createdTasks, setCreatedTasks] = useState<number>(0);

    function completeTask(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.checked) {
            setCompletedTasks(completedTasks + 1);
        } else {
            setCompletedTasks(completedTasks - 1);
        }
    }

    function handleTaskCreation(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (tasks.filter(task => task === newTask).length > 0) {
            alert('Tarefa já cadastrada.');
            return;
        } else {
            setTasks([...tasks, newTask]);
            setCreatedTasks(createdTasks + 1)
        }
        setNewTask('');
    }

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('');
        setNewTask(event.target.value);
    }

    function handleNewTaskValidation(event: React.FormEvent<HTMLInputElement>) {
        // @ts-ignore
        event.target.setCustomValidity('Por favor, preencha este campo.');
    }

    function deleteTask(task: string) {
        setTasks(tasks.filter(t => t !== task));
        setCreatedTasks(createdTasks - 1);
    }

    return (
        <>
            <Header/>
            <main className={styles.main}>
                <form
                    className={styles.form}
                    onSubmit={handleTaskCreation}
                >
                    <input
                        name={'task'}
                        className={styles.input}
                        type="text"
                        placeholder="Adicione uma nova tarefa"
                        value={newTask}
                        onChange={handleInputChange}
                        onInvalid={handleNewTaskValidation}
                        required
                    />

                    <button
                        className={styles.button}
                        type="submit"
                        disabled={newTask.length === 0}
                    >
                        Criar
                        <BiPlusCircle size={24}/>
                    </button>
                </form>

                <div className={styles.content}>
                    <div className={styles.head}>
                        <Counter
                            name={'Tarefas criadas'}
                            color={'var(--blue)'}
                            value={createdTasks}
                        />
                        <Counter
                            name={'Concluídas'}
                            color={'var(--purple)'}
                            value={completedTasks}
                        />
                    </div>

                    {tasks.length === 0 ? (
                        <NotFound/>
                    ) : (
                        tasks.map((task) => (
                            <Card
                                key={task}
                                text={task}
                                onDeleteTask={deleteTask}
                                onCompleteTask={completeTask}
                            />
                        ))
                    )}
                </div>
            </main>
        </>
    )
}

export default App
