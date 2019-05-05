import React from "react";

const DisplayPayNumbers = props => (
  <button
    className="number"
    onClick={() => props.onClick(props.num)}
    style={{ backgroundColor: colors[props.status] }}
  >
    {props.num}
  </button>
);
const colors = {
  available: "lightgray",
  used: "lightgreen",
  wrong: "lightcoral",
  candidate: "deepskyblue"
};
export default DisplayPayNumbers;
