import React from "react";

import StratagemGrid from "./components/StratagemGrid/StratagemGrid";

import Stratagems from "./data/Stratagems.json";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <nav className="sidebar">
          <div className="link">
            <div className="text">Home</div>
          </div>
          <div className="link">
            <div className="text">Projects</div>
          </div>
          <div className="link">
            <div className="text">Art</div>
          </div>
          <div className="link">
            <div className="text">Social</div>
          </div>
          <div className="link">
            <div className="text">Setup</div>
          </div>
          <div className="link">
            <div className="text">Help</div>
          </div>
        </nav>
        <main className="content">
            <StratagemGrid stratagems={Stratagems} />
        </main>
      </div>
    </React.Fragment>
  );
}

export default App;
