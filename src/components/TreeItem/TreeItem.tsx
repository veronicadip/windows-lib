import {
  FunctionComponent,
  PropsWithChildren,
  ReactNode,
  useState,
} from "react";
import "./styles.css";

interface Props extends PropsWithChildren {
  label: ReactNode;
  openBranch?: boolean;
}

const TreeItem: FunctionComponent<Props> = ({
  children,
  label,
  openBranch,
}) => {
  const [isOpen, setIsOpen] = useState(!openBranch ? false : true);
  return (
    <div className="windowsTreeItem">
      <div
        className="windowsTreeItem--label"
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
      </div>
      <div
        className={`windowsTreeItem--children ${
          isOpen ? "windowsTreeItem--children__open" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default TreeItem;
