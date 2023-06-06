import { FunctionComponent } from "react";
import "./styles.css";

interface Props {}

const Button: FunctionComponent<Props> = () => {
  return (
    <button className="neutral">
      <span>Click me</span>
    </button>
  );
};

export default Button;
