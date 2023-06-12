import { FunctionComponent, ReactNode } from "react";
import "./styles.css";

interface Props {
  children: ReactNode;
  value: number;
  eventHandler?: Function;
  selectedTab?: number;
}

const Tab: FunctionComponent<Props> = (props) => {
  const { children, value, eventHandler, selectedTab } = props;

  if (!eventHandler) {
    throw new Error("missing event handler");
  }

  return (
    <div className="windowsTab" onClick={eventHandler(value)}>
      <span>{children}</span>
    </div>
  );
};

export default Tab;
