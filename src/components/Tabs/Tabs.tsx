import {
  FunctionComponent,
  Children,
  PropsWithChildren,
  isValidElement,
} from "react";
import "./styles.css";

interface Props extends PropsWithChildren {
  selectedTab?: number;
}

const Tabs: FunctionComponent<Props> = (props) => {
  let { children, selectedTab } = props;
  if (!selectedTab) {
    selectedTab = 1;
  }
  const selectTab = function (value: number) {
    selectedTab = value;
  };
  let childrenNumber = Children.count(children);
  Children.map(children, (child) => {
    if (isValidElement(child)) {
      return (
        <child.type
          {...child.props}
          eventHandler={selectTab}
          selectedTab={selectedTab}
        />
      );
    }
    return child;
  });

  return (
    <div>
      <div className="windowsTabsList"></div>
      <div className="windowsTabsBody"></div>
    </div>
  );
};

export default Tabs;
