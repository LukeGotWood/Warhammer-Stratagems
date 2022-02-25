import React from "react";

import StratagemGrid from "./components/StratagemGrid/StratagemGrid";

import Stratagems from "./data/Stratagems.json";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <StratagemGrid stratagems={Stratagems} />
    </React.Fragment>
  );
}

export default App;
