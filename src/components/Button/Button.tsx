import { FunctionComponent } from "react";
import "./styles.css";

interface Props {}

const Button: FunctionComponent<Props> = () => {
  return (
    <button className="neutral">
      <div>
        <span>Click me</span>
      </div>
    </button>
  );
};

export default Button;
