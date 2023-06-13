import {
  FunctionComponent,
  Children,
  PropsWithChildren,
  isValidElement,
} from "react";
import "./styles.css";
import Tab from "../Tab/Tab";

interface Props extends PropsWithChildren {
  onSelect?: Function;
  selectedTab?: number;
}

const TabList: FunctionComponent<Props> = (props) => {
  const { children, onSelect, selectedTab } = props;
  const mappedTabs = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return (
        <child.type
          {...child.props}
          onSelect={onSelect}
          selectedTab={selectedTab}
        />
      );
    }
    return child;
  });
  return <div className="windowsTabList">{mappedTabs}</div>;
};

export default TabList;
