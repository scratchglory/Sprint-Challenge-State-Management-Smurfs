import React, { useState, useContext } from "react";
import { SmurfsContext } from "../contexts/SmurfsContext";
import axios from "axios";

const AddSmurf = () => {
  // state for each individual feature
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  // passing in prev smurfs
  const [smurfs, setSmurfs] = useContext(SmurfsContext);

  // HANDLERS
  const updateName = event => {
    setName(event.target.value);
  };
  const updateAge = event => {
    setAge(event.target.value);
  };
  const updateHeight = event => {
    setHeight(event.target.value);
  };

  const addSmurf = event => {
    event.preventDefault();
    const data = {
      name: name,
      age: age,
      height: height
    };
    setSmurfs(prevSmurfs => [
      ...prevSmurfs,
      { name: name, age: age, height: height }
    ]);

    axios
      .post("http://localhost:3333/smurfs", data)
      .then(res => console.log("POST:", res))
      .catch(err => console.log("POST_ERROR:", err));
  };

  // form
  return (
    <form onSubmit={addSmurf}>
      <input type="text" name="name" onChange={updateName} placeholder="NAME" />
      <input type="text" name="age" onChange={updateAge} placeholder="AGE" />
      <input
        type="text"
        name="height"
        onChange={updateHeight}
        placeholder="HEIGHT"
      />

      <button>Add!</button>
    </form>
  );
};

export default AddSmurf;
