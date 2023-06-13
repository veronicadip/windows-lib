import { FunctionComponent, ReactNode } from "react";
import "./styles.css";

interface Props {
  value: number;
  children: ReactNode;
  selectedTab?: number;
}

const TabPanel: FunctionComponent<Props> = (props) => {
  const { value, children, selectedTab } = props;
  if (value === selectedTab) {
    return <div className="windowsTabsBody">{children}</div>;
  }
  return <></>;
};

export default TabPanel;
