import React, { useState, useContext } from "react";
import Smurf from "./Smurf";
import { SmurfsContext } from "../contexts/SmurfsContext";

const SmurfsList = () => {
  const [smurfs, setSmurfs] = useContext(SmurfsContext);

  return (
    <div>
      <h1>TheSmurfs</h1>

      {smurfs.map(smurf => (
        <Smurf name={smurf.name} age={smurf.age} height={smurf.height} />
      ))}
    </div>
  );
};

export default SmurfsList;
