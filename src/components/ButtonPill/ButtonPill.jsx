/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconPlaceholder } from "../IconPlaceholder";
import "./style.css";

export const ButtonPill = ({
  showLabel = true,
  showRightIcon = true,
  showLeftIcon = true,
  showQty = true,
  style,
  styleOverride,
  text = "Button Label",
  override = (
    <IconPlaceholder
      style={{
        minWidth: "20px",
        position: "relative",
        width: "unset",
      }}
    />
  ),
  override1 = (
    <IconPlaceholder
      style={{
        minWidth: "20px",
        position: "relative",
        width: "unset",
      }}
    />
  ),
  buttonStyle,
}) => {
  return (
    <div className={`button-pill ${style}`} style={styleOverride}>
      {showLeftIcon && <>{override1}</>}

      {style === "outlined" && (
        <div className="button" style={buttonStyle}>
          {showLabel && <div className="button-label">{text}</div>}

          {showQty && <div className="element">(00)</div>}
        </div>
      )}

      {style === "filled" && (
        <>
          <>
            {showLabel && (
              <div className="text-wrapper" style={buttonStyle}>
                {text}
              </div>
            )}
          </>
        </>
      )}

      {showRightIcon && <>{override}</>}
    </div>
  );
};

ButtonPill.propTypes = {
  showLabel: PropTypes.bool,
  showRightIcon: PropTypes.bool,
  showLeftIcon: PropTypes.bool,
  showQty: PropTypes.bool,
  style: PropTypes.oneOf(["filled", "outlined"]),
  text: PropTypes.string,
};
