import React, { useState, useEffect } from "react";
import "./App.css";

import { SmurfsProvider } from "../contexts/SmurfsContext";
import SmurfsList from "./SmurfsList";
import AddSmurf from "./AddSmurf";

function App() {
  //   console.log("SMURFS:", smurfs);
  return (
    <SmurfsProvider>
      <AddSmurf />
      <SmurfsList />
    </SmurfsProvider>
  );
}

export default App;
