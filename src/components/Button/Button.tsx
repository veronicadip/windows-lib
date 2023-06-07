import { FunctionComponent } from "react";
import "./styles.css";

interface Props {
  disabled: boolean;
}

const Button: FunctionComponent<Props> = (props) => {
  if (!props.disabled) {
    return (
      <button className="windowsButton neutralButton">
        <div>
          <span>Click me</span>
        </div>
      </button>
    );
  } else {
    return (
      <button className="windowsButton" disabled>
        <div>
          <span>Click me</span>
        </div>
      </button>
    );
  }
};

export default Button;
