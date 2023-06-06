import { FunctionComponent } from "react";
import "./styles.css";

interface Props {}

const Button: FunctionComponent<Props> = () => {
  return (
    <button className="neutral">
      <p>Click me</p>
    </button>
  );
};

export default Button;
