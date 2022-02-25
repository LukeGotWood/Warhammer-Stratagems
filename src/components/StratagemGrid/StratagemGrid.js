import StratagemCard from "../StratagemCard/StratagemCard";

import styles from "./StratagemGrid.module.css";

function StratagemGrid(props) {
  return (
    <main className={styles["content"]}>
      <section className={styles["cards"]}>
        {props.stratagems.map((stratagem) => {
          return (
            <StratagemCard
              key={stratagem.id}
              name={stratagem.name}
              cp_cost={stratagem.cp_cost}
              type={stratagem.type}
              description={stratagem.description}
            />
          );
        })}
      </section>
    </main>
  );
}

export default StratagemGrid;
