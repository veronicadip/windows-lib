import { FunctionComponent, ReactNode, useState } from "react";
import "./styles.css";

interface Props {
  title?: ReactNode;
  icon?: ReactNode;
  onClose?: () => void;
  onMinimize?: () => void;
  onExpand?: () => void;
}

const TitleBar: FunctionComponent<Props> = ({
  title,
  icon,
  onClose,
  onExpand,
  onMinimize,
}) => {
  return (
    <div className="windowsBar">
      <span className="barTitle">
        <div className="barIcon">
          {" "}
          {icon ? <img src={`${icon}`} alt={`${title} icon`} /> : null}
        </div>
        {title}
      </span>
      <div>
        <button
          className="barButtons minimize"
          onClick={onMinimize ? () => onMinimize() : undefined}
        ></button>
        <button
          className="barButtons expand"
          onClick={onExpand ? () => onExpand() : undefined}
        ></button>
        <button
          className="barButtons close"
          onClick={onClose ? () => onClose() : undefined}
        ></button>
      </div>
    </div>
  );
};

export default TitleBar;
