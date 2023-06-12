import {
  FunctionComponent,
  Children,
  PropsWithChildren,
  isValidElement,
  useState,
} from "react";
import "./styles.css";

interface Props extends PropsWithChildren {
  selectedTab?: number;
}

const Tabs: FunctionComponent<Props> = (props) => {
  const { children, selectedTab = 1 } = props;
  const [currentTab, setCurrentTab] = useState(selectedTab);

  const selectTab = function (value: number) {
    setCurrentTab(value);
  };
  let childrenNumber = Children.count(children);
  const mappedChildren = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return (
        <child.type
          {...child.props}
          onSelect={selectTab}
          selectedTab={currentTab}
        />
      );
    }
    return child;
  });

  return <div className="windowsTabs">{mappedChildren}</div>;
};

export default Tabs;
