import React, { useState } from "react";

import NavbarComp from "./components/NavbarComp/NavbarComp";
import PhaseBox from "./components/PhaseBox/PhaseBox";

import NECRON_STRATAGEMS from "./stratagems/Necrons.json";
import BLOOD_ANGEL_STRATAGEMS from "./stratagems/Blood-Angels.json";
// import ModalComp from "./components/ModalComp/ModalComp";

function App() {
  const [faction, setFaction] = useState({
    name: "Necron",
    stratagems: NECRON_STRATAGEMS,
  });

  const BATTLE_PHASES = [
    {
      id: "b1",
      name: "Before Battle",
      type: "gray",
      stratagems: faction.stratagems.filter((stratagem) =>
        stratagem.phase.includes("Before battle")
      ),
    },
    {
      id: "b2",
      name: "During Deployment",
      type: "gray",
      stratagems: faction.stratagems.filter((stratagem) =>
        stratagem.phase.includes("During deployment")
      ),
    },
    {
      id: "b3",
      name: "Command Phase",
      type: "green",
      stratagems: faction.stratagems.filter((stratagem) =>
        stratagem.phase.includes("Command phase")
      ),
    },
    {
      id: "b4",
      name: "Movement Phase",
      type: "green",
      stratagems: faction.stratagems.filter((stratagem) =>
        stratagem.phase.includes("Movement phase")
      ),
    },
    {
      id: "b5",
      name: "Enemy Movement Phase",
      type: "red",
      stratagems: faction.stratagems.filter((stratagem) =>
        stratagem.phase.includes("Enemy Movement phase")
      ),
    },
    {
      id: "b6",
      name: "Enemy Psychic Phase",
      type: "red",
      stratagems: faction.stratagems.filter((stratagem) =>
        stratagem.phase.includes("Enemy Psychic phase")
      ),
    },
    {
      id: "b7",
      name: "Shooting Phase",
      type: "green",
      stratagems: faction.stratagems.filter((stratagem) =>
        stratagem.phase.includes("Shooting phase")
      ),
    },
    {
      id: "b8",
      name: "Enemy Shooting Phase",
      type: "red",
      stratagems: faction.stratagems.filter((stratagem) =>
        stratagem.phase.includes("Enemy Shooting phase")
      ),
    },
    {
      id: "b9",
      name: "Enemy Charge Phase",
      type: "red",
      stratagems: faction.stratagems.filter((stratagem) =>
        stratagem.phase.includes("Enemy Charge phase")
      ),
    },
    {
      id: "b10",
      name: "Fight Phase",
      type: "green",
      stratagems: faction.stratagems.filter((stratagem) =>
        stratagem.phase.includes("Fight phase")
      ),
    },
    {
      id: "b11",
      name: "Enemy Fight Phase",
      type: "red",
      stratagems: faction.stratagems.filter((stratagem) =>
        stratagem.phase.includes("Enemy Fight phase")
      ),
    },
    {
      id: "b12",
      name: "Taking Casualties",
      type: "green",
      stratagems: faction.stratagems.filter((stratagem) =>
        stratagem.phase.includes("Taking casualties")
      ),
    },
  ];

  function factionSelectionHandler(faction) {
    switch (faction) {
      case "Blood Angels":
        setFaction({ name: "Blood Angel", stratagems: BLOOD_ANGEL_STRATAGEMS });
        break;
      default:
        setFaction({ name: "Necron", stratagems: NECRON_STRATAGEMS });
        break;
    }
  }

  return (
    <React.Fragment>
      {/* <ModalComp /> */}
      <NavbarComp onFactionSelection={factionSelectionHandler} />
      <h1 className="text-white">{faction.name} Stratagems</h1>
      <hr className="mt-0 mb-1" style={{ color: "white" }} />
      {BATTLE_PHASES.map((phase) => {
        if (phase.stratagems.length > 0) {
          return (
            <PhaseBox
              key={phase.id}
              type={phase.type}
              phase={phase.name}
              stratagems={phase.stratagems}
            />
          );
        } else {
          return null;
        }
      })}
    </React.Fragment>
  );
}

export default App;
