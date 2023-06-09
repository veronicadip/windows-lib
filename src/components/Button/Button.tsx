import { FunctionComponent } from "react";
import "./styles.css";

interface Props {
  disabled: boolean;
  children: React.ReactNode;
  id?: string;
}

const Button: FunctionComponent<Props> = (props) => {
  const { disabled, children, id } = props;
  return (
    <button
      className={`windowsButton ${disabled ? ` ` : `neutralButton`}`}
      disabled={disabled}
      id={id}
    >
      <div>
        <span>{children}</span>
      </div>
    </button>
  );
};

export default Button;
