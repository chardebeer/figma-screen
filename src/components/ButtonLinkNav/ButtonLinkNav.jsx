/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ButtonLinkNav = ({ activeIndicator = true, text = "Label text" }) => {
  return (
    <div className="button-link-nav">
      <div className="label-text">{text}</div>
      {activeIndicator && <div className="active-indicator" />}
    </div>
  );
};

ButtonLinkNav.propTypes = {
  activeIndicator: PropTypes.bool,
  text: PropTypes.string,
};
