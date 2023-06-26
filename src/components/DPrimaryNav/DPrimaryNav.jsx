/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ButtonLinkNav } from "../ButtonLinkNav";
import { ButtonPill } from "../ButtonPill";
import { IconBasket } from "../IconBasket";
import { Logo } from "../Logo";
import "./style.css";

export const DPrimaryNav = ({
  visible = true,
  buttonPill = (
    <IconBasket
      hasItems={false}
      style={{
        minWidth: "20px",
        width: "unset",
      }}
      union="https://generation-sessions.s3.amazonaws.com/4b79f7add0afd3aca8e576740b717f20/img/union-3.svg"
    />
  ),
}) => {
  return (
    <div className="d-primary-nav">
      {visible && (
        <Logo
          size="medium"
          sizeMedium="https://generation-sessions.s3.amazonaws.com/4b79f7add0afd3aca8e576740b717f20/img/logo-2.svg"
          style={{
            left: "unset",
            minWidth: "200px",
            position: "relative",
            top: "unset",
            width: "unset",
          }}
        />
      )}

      <div className="menu-items-and-cart">
        <ButtonLinkNav activeIndicator={false} text="Shop" />
        <ButtonLinkNav activeIndicator={false} text="Newsstand" />
        <ButtonLinkNav activeIndicator={false} text="Who we are" />
        <ButtonLinkNav activeIndicator={false} text="My Profile" />
        <ButtonPill
          buttonStyle={{
            flex: "unset",
            marginBottom: "unset",
            marginTop: "unset",
            width: "fit-content",
          }}
          override1={buttonPill}
          showRightIcon={false}
          style="outlined"
          styleOverride={{
            alignSelf: "stretch",
            height: "unset",
            width: "fit-content",
          }}
          text="Basket"
        />
      </div>
    </div>
  );
};

DPrimaryNav.propTypes = {
  visible: PropTypes.bool,
};
