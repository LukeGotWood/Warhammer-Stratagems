import React from "react";

import Stratagems from "./data/Stratagems.json";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <section className="cards">
        {Stratagems.map((stratagem) => {
          return (
            <article className="card" key={stratagem.id}>
              <p className="card-header">
                <span className="card-name">{stratagem.name}</span>
                <span className="card-cp">{stratagem.cp_cost}CP</span>
              </p>
              <div className="card-body">
              <p>{stratagem.type}</p>
              <p>{stratagem.description}</p>
              </div>
            </article>
          );
        })}
      </section>
    </React.Fragment>
  );
}

export default App;
