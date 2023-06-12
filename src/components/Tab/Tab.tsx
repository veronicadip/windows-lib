import { FunctionComponent, ReactNode } from "react";
import "./styles.css";

interface Props {
  children: ReactNode;
  value: number;
  onSelect?: Function;
  selectedTab?: number;
}

const Tab: FunctionComponent<Props> = (props) => {
  const { children, value, onSelect, selectedTab } = props;

  if (!onSelect) {
    throw new Error("missing event handler");
  }

  return (
    <div className="windowsTab" onClick={() => onSelect(value)}>
      <span>{children}</span>
    </div>
  );
};

export default Tab;
