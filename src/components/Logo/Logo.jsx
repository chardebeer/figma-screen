/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Logo = ({
  text = "Label text",
  activeIndicator = true,
  size,
  style,
  sizeMedium = "https://generation-sessions.s3.amazonaws.com/4b79f7add0afd3aca8e576740b717f20/img/size-medium.svg",
}) => {
  return (
    <img
      className={`logo ${size}`}
      style={style}
      alt="Size large"
      src={
        size === "jumbo"
          ? "https://generation-sessions.s3.amazonaws.com/4b79f7add0afd3aca8e576740b717f20/img/size-jumbo.svg"
          : size === "medium"
          ? sizeMedium
          : size === "small"
          ? "https://generation-sessions.s3.amazonaws.com/4b79f7add0afd3aca8e576740b717f20/img/size-small.svg"
          : "https://generation-sessions.s3.amazonaws.com/4b79f7add0afd3aca8e576740b717f20/img/logo-1.svg"
      }
    />
  );
};

Logo.propTypes = {
  text: PropTypes.string,
  activeIndicator: PropTypes.bool,
  size: PropTypes.oneOf(["large", "jumbo", "medium", "small"]),
  sizeMedium: PropTypes.string,
};
