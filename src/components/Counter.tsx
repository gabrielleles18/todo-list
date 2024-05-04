import styles from "./Counter.module.css";

interface CounterProps {
    name: string;
    value: number;
    color?: string;
}

export function Counter({name, color = 'var(--gray-300)', value}: CounterProps) {
    return (
        <div className={styles.counter} style={{color: color}}>
            <p>{name}</p>
            <span>{value}</span>
        </div>
    );
}
