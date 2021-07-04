import React from "react";

import PhaseBox from "./components/PhaseBox/PhaseBox";

import NECRON_STRATAGEMS from "./stratagems.json"

function App() {
  const BATTLE_PHASES = [
    {
      id: "b1",
      name: "Before Battle",
      type: "gray",
      stratagems: NECRON_STRATAGEMS.filter((stratagem) =>
        stratagem.phase.includes("Before Battle")
      ),
    },
    {
      id: "b2",
      name: "During Deployment",
      type: "gray",
      stratagems: NECRON_STRATAGEMS.filter((stratagem) =>
        stratagem.phase.includes("During Deployment")
      ),
    },
    {
      id: "b3",
      name: "Command Phase",
      type: "green",
      stratagems: NECRON_STRATAGEMS.filter((stratagem) =>
        stratagem.phase.includes("Command Phase")
      ),
    },
    {
      id: "b4",
      name: "Movement Phase",
      type: "green",
      stratagems: NECRON_STRATAGEMS.filter((stratagem) =>
        stratagem.phase.includes("Movement Phase")
      ),
    },
    {
      id: "b5",
      name: "Enemy Movement Phase",
      type: "red",
      stratagems: NECRON_STRATAGEMS.filter((stratagem) =>
        stratagem.phase.includes("Enemy Movement Phase")
      ),
    },
    {
      id: "b6",
      name: "Enemy Psychic Phase",
      type: "red",
      stratagems: NECRON_STRATAGEMS.filter((stratagem) =>
        stratagem.phase.includes("Enemy Psychic Phase")
      ),
    },
    {
      id: "b7",
      name: "Shooting Phase",
      type: "green",
      stratagems: NECRON_STRATAGEMS.filter((stratagem) =>
        stratagem.phase.includes("Shooting Phase")
      ),
    },
    {
      id: "b8",
      name: "Enemy Shooting Phase",
      type: "red",
      stratagems: NECRON_STRATAGEMS.filter((stratagem) =>
        stratagem.phase.includes("Enemy Shooting Phase")
      ),
    },
    {
      id: "b9",
      name: "Enemy Charge Phase",
      type: "red",
      stratagems: NECRON_STRATAGEMS.filter((stratagem) =>
        stratagem.phase.includes("Enemy Charge Phase")
      ),
    },
    {
      id: "b10",
      name: "Fight Phase",
      type: "green",
      stratagems: NECRON_STRATAGEMS.filter((stratagem) =>
        stratagem.phase.includes("Fight Phase")
      ),
    },
    {
      id: "b11",
      name: "Enemy Fight Phase",
      type: "red",
      stratagems: NECRON_STRATAGEMS.filter((stratagem) =>
        stratagem.phase.includes("Enemy Fight Phase")
      ),
    },
    {
      id: "b12",
      name: "Taking Casualties",
      type: "green",
      stratagems: NECRON_STRATAGEMS.filter((stratagem) =>
        stratagem.phase.includes("Taking Casualties")
      ),
    },
  ];

  return (
    <React.Fragment>
      <h1>Necron Stratagems</h1>
      {BATTLE_PHASES.map((phase) => {
        return <PhaseBox key={phase.id} type={phase.type} phase={phase.name} stratagems={phase.stratagems} />;
      })}
    </React.Fragment>
  );
}

export default App;
