import { FunctionComponent, PropsWithChildren, ReactNode } from "react";
import "./styles.css";

interface Props extends PropsWithChildren {
  value: number;
  onSelect?: Function;
  selectedTab?: number;
}

const Tab: FunctionComponent<Props> = ({
  children,
  value,
  onSelect,
  selectedTab,
}) => {
  if (!onSelect) {
    throw new Error("missing event handler");
  }

  if (value === selectedTab) {
    return (
      <div className="windowsTab selectedTab" onClick={() => onSelect(value)}>
        <span>{children}</span>
      </div>
    );
  }
  return (
    <div className="windowsTab" onClick={() => onSelect(value)}>
      <span>{children}</span>
    </div>
  );
};

export default Tab;
