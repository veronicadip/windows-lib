import { FunctionComponent, ReactNode } from "react";
import "./styles.css";

interface Props {
  value: number;
  children: ReactNode;
  onSelect?: Function;
  selectedTab?: number;
}

const TabPanel: FunctionComponent<Props> = (props) => {
  const { value, children, onSelect, selectedTab } = props;
  if (value === selectedTab) {
    return <div className="windowsTabsBody">{children}</div>;
  }
  return <></>;
};

export default TabPanel;
