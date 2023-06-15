import { FunctionComponent, PropsWithChildren, ReactNode } from "react";
import "./styles.css";

interface Props extends PropsWithChildren {
  fullHeight?: boolean;
}

const TreeList: FunctionComponent<Props> = ({ children, fullHeight }) => {
  if (fullHeight) {
    return <div className="windowsTreeList TreeFullHeight">{children}</div>;
  }
  return <div className="windowsTreeList">{children}</div>;
};

export default TreeList;
