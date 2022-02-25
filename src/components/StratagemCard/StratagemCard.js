import styles from "./StratagemCard.module.css";

function StratagemCard(props) {
  return (
    <article className={styles["card"]} key={props.id}>
      <p className={styles["card-header"]}>
        <span className={styles["card-name"]}>{props.name}</span>
        <span className={styles["card-cp"]}>{props.cp_cost}CP</span>
      </p>
      <div className={styles["card-body"]}>
        <p>{props.type}</p>
        <p>{props.description}</p>
      </div>
    </article>
  );
}

export default StratagemCard;
