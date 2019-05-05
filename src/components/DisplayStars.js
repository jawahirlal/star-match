import React from "react";
import utils from "../utils";
const DisplayStars = props => {
  return utils
    .range(1, props.numberOfStars)
    .map(starId => <div key={starId} className="star" />);
};

export default DisplayStars;
