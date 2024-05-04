import styles from "./Header.module.css";
import svgLogo from "../assets/logo.svg";

export function Header() {
    return (
        <header className={styles.header}>
            <img
                className={styles.logo}
                src={svgLogo}
                alt=""
            />
        </header>
    );
}
