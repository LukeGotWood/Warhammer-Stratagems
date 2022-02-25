import styles from "./Sidebar.module.css";

function Sidebar(props) {
  return (
    <nav className={styles["sidebar"]}>
      <div key="ALL" className={styles["link"]}>
        <button
          className={styles["btn"]}
          onClick={(e) => {
            props.onClear(e);
          }}
        >
          All
        </button>
      </div>
      {props.factions.map((faction) => {
        return (
          <div key={faction.id} className={styles["link"]}>
            <button
              className={styles["btn"]}
              onClick={(e) => {
                props.onClick(e, faction.id);
              }}
            >
              {faction.name}
            </button>
          </div>
        );
      })}
    </nav>
  );
}

export default Sidebar;
