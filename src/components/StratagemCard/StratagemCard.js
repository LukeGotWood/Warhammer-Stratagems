import styles from "./StratagemCard.module.css";

function StratagemCard(props) {
  return (
    <article className={styles["card"]} key={props.id}>
      <p className={styles["header"]}>
        <span className={styles["name"]}>{props.name}</span>
        <span className={styles["cp"]}>{props.cp_cost}CP</span>
      </p>
      <div className={styles["body"]}>
        <p>{props.type}</p>
        <hr className={styles["divider"]}/>
        <p>{props.description}</p>
      </div>
    </article>
  );
}

export default StratagemCard;
