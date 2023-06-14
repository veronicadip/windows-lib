import { FunctionComponent, PropsWithChildren, ReactNode } from "react";
import "./styles.css";

interface Props extends PropsWithChildren {}

const TreeList: FunctionComponent<Props> = ({ children }) => {
  return <div className="windowsTreeList">{children}</div>;
};

export default TreeList;
