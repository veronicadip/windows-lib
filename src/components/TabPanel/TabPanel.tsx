import { FunctionComponent, PropsWithChildren, ReactNode } from "react";
import "./styles.css";

interface Props extends PropsWithChildren {
  value: number;
  selectedTab?: number;
}

const TabPanel: FunctionComponent<Props> = ({
  value,
  children,
  selectedTab,
}) => {
  if (value === selectedTab) {
    return <div className="windowsTabsBody">{children}</div>;
  }
  return <></>;
};

export default TabPanel;
