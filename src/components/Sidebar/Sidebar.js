import styles from "./Sidebar.module.css";

function Sidebar(props) {
  return (
    <nav className={styles["sidebar"]}>
      {props.factions.map((faction) => {
        return (
          <div key={faction.id} className={styles["link"]}>
            <div className={styles["text"]}>{faction.name}</div>
          </div>
        );
      })}
    </nav>
  );
}

export default Sidebar;
