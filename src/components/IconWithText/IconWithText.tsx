import React, { FunctionComponent } from "react";
import "./styles.css";

interface Props {
  icon: string;
  text: string;
}

const IconWithText: FunctionComponent<Props> = ({ icon, text }) => {
  return (
    <span className="windowsIconWithText">
      <img src={icon} /> {text}
    </span>
  );
};

export default IconWithText;
