import { FunctionComponent, PropsWithChildren } from "react";
import "./styles.css";

interface Props extends PropsWithChildren {
  disabled?: boolean;
  id?: string;
  clickEventHandler?: () => void | Function;
}

const Button: FunctionComponent<Props> = ({
  disabled,
  children,
  id,
  clickEventHandler,
}) => {
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
