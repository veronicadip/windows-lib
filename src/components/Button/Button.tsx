import { EventHandler, FunctionComponent } from "react";
import "./styles.css";

interface Props {
  disabled?: boolean;
  children: React.ReactNode;
  id?: string;
  customFunction?: () => void | Function;
  clickEventHandler?: () => void | Function;
}

const Button: FunctionComponent<Props> = (props) => {
  const { disabled, children, id, customFunction, clickEventHandler } = props;
  return (
    <button
      className={`windowsButton ${disabled ? ` ` : `neutralButton`}`}
      disabled={disabled}
      id={id}
      onClick={clickEventHandler ? () => clickEventHandler() : undefined}
    >
      <div>
        <span>{children}</span>
      </div>
    </button>
  );
};

export default Button;
