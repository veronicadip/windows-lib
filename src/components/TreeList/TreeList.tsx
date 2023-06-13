import { FunctionComponent, ReactNode } from "react";
import "./styles.css";

interface Props {
  children: ReactNode;
}

const TreeList: FunctionComponent<Props> = (props) => {
  const { children } = props;
  return <div className="windowsTreeList">{children}</div>;
};

export default TreeList;
