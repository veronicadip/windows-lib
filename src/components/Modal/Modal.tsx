import {
  FunctionComponent,
  PropsWithChildren,
  ReactNode,
  useState,
} from "react";
import "./styles.css";
import Button from "../Button/Button";
import TitleBar from "../TitleBar/TitleBar";

interface Props extends PropsWithChildren {
  open?: boolean;
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
          <TitleBar
            icon={icon}
            title={title}
            onClose={() => setClosed()}
          ></TitleBar>
          <div className="windowsModalContent">{children}</div>
        </div>
      </>
      <Button clickEventHandler={() => setOpen()}>Open Modal</Button>
    </>
  );
};

export default Modal;
