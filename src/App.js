import React, { useState } from "react";

import StratagemGrid from "./components/StratagemGrid/StratagemGrid";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";

import Stratagems from "./data/Stratagems.json";
import Factions from "./data/Factions.json";

import "./App.css";

function App() {
  const [filterArg, setFilterArg] = useState("");

  function filterStratagems(e, id) {
    setFilterArg(id);
  }

  function clearFilter(e) {
    setFilterArg("");
  }

  let filteredStratagems = Stratagems.filter(
    (stratagem) => stratagem.faction_id === filterArg
  );

  return (
    <React.Fragment>
      <Navbar />
      <div className="wrapper">
        <Sidebar
          factions={Factions}
          onClick={filterStratagems}
          onClear={clearFilter}
        />
        <StratagemGrid
          stratagems={filterArg === "" ? Stratagems : filteredStratagems}
        />
      </div>
    </React.Fragment>
  );
}

export default App;
