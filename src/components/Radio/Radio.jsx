/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Radio = ({ text = "Text", selected }) => {
  return (
    <div className="radio">
      <div className="d-control-radio">{selected && <div className="ellipse" />}</div>
      <div className="text">{text}</div>
    </div>
  );
};

Radio.propTypes = {
  text: PropTypes.string,
  selected: PropTypes.bool,
};
