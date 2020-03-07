import React from "react";

const Smurf = props => {
  return (
    <ul>
      <li>
        <strong>{props.name}</strong> who is {props.age} years-old &&{" "}
        {props.height} short/tall
      </li>
    </ul>
  );
};

export default Smurf;
