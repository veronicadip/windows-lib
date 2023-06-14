import { FunctionComponent, ReactNode } from "react";
import "./styles.css";

interface Props {
  open?: boolean;
  children: ReactNode;
  onClose: () => void;
}

const Modal: FunctionComponent<Props> = ({ open, children, onClose }) => {
  if (!open) {
    return null;
  }

  return (
    <>
      <div className="windowsModal--overlay" onClick={() => onClose()}></div>
      <div className="windowsModal">{children}</div>
    </>
  );
};

export default Modal;
