import {
  FunctionComponent,
  Children,
  PropsWithChildren,
  isValidElement,
} from "react";
import "./styles.css";

interface Props extends PropsWithChildren {
  onSelect?: Function;
  selectedTab?: number;
}

const TabList: FunctionComponent<Props> = ({
  children,
  onSelect,
  selectedTab,
}) => {
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
