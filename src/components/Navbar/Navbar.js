import styles from "./Navbar.module.css";

function Navbar(props) {
    return (
        <nav className={styles["navbar"]}>
            <h1 className={styles["title"]}>Warhammer Stratagems</h1>
        </nav>
    );
}

export default Navbar;