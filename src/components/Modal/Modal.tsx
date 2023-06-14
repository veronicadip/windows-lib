import { FunctionComponent, ReactNode, useState } from "react";
import "./styles.css";
import Button from "../Button/Button";

interface Props {
  open?: boolean;
  children: ReactNode;
}

const Modal: FunctionComponent<Props> = ({ open, children }) => {
  const [isOpen, setIsOpen] = useState(open);
  function setClosed() {
    setIsOpen(false);
  }
  function setOpen() {
    setIsOpen(true);
  }

  if (!isOpen) {
    return <Button clickEventHandler={() => setOpen()}>Open Modal</Button>;
  }
  return (
    <>
      <>
        <div
          className="windowsModal--overlay"
          onClick={() => setClosed()}
        ></div>
        <div className="windowsModal">{children}</div>
      </>
      <Button clickEventHandler={() => setOpen()}>Open Modal</Button>
    </>
  );
};

export default Modal;
