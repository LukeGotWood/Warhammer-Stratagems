import styles from "./Sidebar.module.css";

function Sidebar(props) {
  return (
    <nav className={styles["sidebar"]}>
      {props.factions.map((faction) => {
        return (
          <div key={faction.id} className={styles["link"]}>
            <button className={styles["btn"]}>{faction.name}</button>
          </div>
        );
      })}
    </nav>
  );
}

export default Sidebar;
