/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ButtonLink = ({
  showLeftArrow = true,
  showRightArrow = true,
  isActive = true,
  size,
  style,
  linkLabelStyle,
  text = "Link label",
  elementStyle,
}) => {
  return (
    <div className="button-link" style={style}>
      {showLeftArrow && <div className={`div size-${size}`}>←</div>}

      <div className={`link-label size-0-${size}`} style={linkLabelStyle}>
        {text}
      </div>
      {showRightArrow && (
        <div className={`element-2 size-1-${size}`} style={elementStyle}>
          →
        </div>
      )}
    </div>
  );
};

ButtonLink.propTypes = {
  showLeftArrow: PropTypes.bool,
  showRightArrow: PropTypes.bool,
  isActive: PropTypes.bool,
  size: PropTypes.oneOf(["large", "small"]),
  text: PropTypes.string,
};
