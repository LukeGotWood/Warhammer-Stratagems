import React from "react";

import StratagemGrid from "./components/StratagemGrid/StratagemGrid";
import Sidebar from "./components/Sidebar/Sidebar";

import Stratagems from "./data/Stratagems.json";
import Factions from "./data/Factions.json";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <Sidebar factions={Factions} />
        <main className="content">
          <StratagemGrid stratagems={Stratagems} />
        </main>
      </div>
    </React.Fragment>
  );
}

export default App;
