import { FunctionComponent } from "react";
import "./styles.css";

interface Props {
  disabled: boolean;
  children: React.ReactNode;
}

const Button: FunctionComponent<Props> = (props) => {
  if (!props.disabled) {
    return (
      <button className="windowsButton neutralButton">
        <div>
          <span>{props.children}</span>
        </div>
      </button>
    );
  } else {
    return (
      <button className="windowsButton" disabled>
        <div>
          <span>{props.children}</span>
        </div>
      </button>
    );
  }
};

export default Button;
