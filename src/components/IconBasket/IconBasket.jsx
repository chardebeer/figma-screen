/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const IconBasket = ({
  hasItems,
  style,
  union = "https://generation-sessions.s3.amazonaws.com/4b79f7add0afd3aca8e576740b717f20/img/union-2.svg",
}) => {
  return (
    <div className="icon-basket" style={style}>
      <img
        className="union"
        alt="Union"
        src={
          hasItems
            ? "https://generation-sessions.s3.amazonaws.com/4b79f7add0afd3aca8e576740b717f20/img/union-1.svg"
            : union
        }
      />
    </div>
  );
};

IconBasket.propTypes = {
  hasItems: PropTypes.bool,
  union: PropTypes.string,
};
