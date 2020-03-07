import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const SmurfsContext = createContext();

export const SmurfsProvider = props => {
  const [smurfs, setSmurfs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        //   console.log("AXIOS:", res.data);
        setSmurfs(res.data);
      })
      .catch(err => console.log("ERROR:", err));
  }, []);

  return (
    <SmurfsContext.Provider value={[smurfs, setSmurfs]}>
      {props.children}
    </SmurfsContext.Provider>
  );
};
