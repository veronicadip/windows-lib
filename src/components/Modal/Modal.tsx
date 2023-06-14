import { FunctionComponent, ReactNode, useState } from "react";
import "./styles.css";
import Button from "../Button/Button";

interface Props {
  open?: boolean;
  children: ReactNode;
  title?: ReactNode;
  icon?: ReactNode;
}

const Modal: FunctionComponent<Props> = ({ open, children, title, icon }) => {
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
        <div className="windowsModal">
          <div className="windowsModalBar">
            <span className="modalBarTitle">
              <div className="modalBarIcon">{icon}</div>
              {title}
            </span>
            <div>
              <button className="modalBarButtons modalMinimize"></button>
              <button className="modalBarButtons modalExpand"></button>
              <button
                className="modalBarButtons modalClose"
                onClick={() => setClosed()}
              ></button>
            </div>
          </div>
          <div className="windowsModalContent">{children}</div>
        </div>
      </>
      <Button clickEventHandler={() => setOpen()}>Open Modal</Button>
    </>
  );
};

export default Modal;
