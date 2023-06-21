import React, { FunctionComponent, ReactNode } from "react";
import "./styles.css";

interface Props {
  icon: string;
  text: ReactNode;
}

const IconWithText: FunctionComponent<Props> = ({ icon, text }) => {
  return (
    <span className="windowsIconWithText">
      <img src={icon} /> {text}
    </span>
  );
};

export default IconWithText;
