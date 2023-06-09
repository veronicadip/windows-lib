import { FunctionComponent } from "react";
import "./styles.css";

interface Props {
  disabled: boolean;
  children: React.ReactNode;
}

const Button: FunctionComponent<Props> = (props) => {
  const { disabled, children } = props;
  return (
    <button
      className={`windowsButton ${disabled ? ` ` : `neutralButton`}`}
      disabled={disabled}
    >
      <div>
        <span>{children}</span>
      </div>
    </button>
  );
};

export default Button;
