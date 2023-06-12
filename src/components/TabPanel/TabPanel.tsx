import { FunctionComponent, ReactNode } from "react";
import "./styles.css";

interface Props {
  value: number;
  children: ReactNode;
  eventHandler?: Function;
  selectedTab?: number;
}

const TabPanel: FunctionComponent<Props> = (props) => {
  const { value, children, eventHandler, selectedTab } = props;
  if (value === selectedTab) {
    return <div>{children}</div>;
  }
  return <></>;
};

export default TabPanel;
