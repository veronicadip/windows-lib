import { FunctionComponent } from "react";
import "./styles.css";

interface Props {
  type?: string;
  placeholder?: string;
}

const Input: FunctionComponent<Props> = (props) => {
  if (!props.type && !props.placeholder) {
    return <input type="text" className="windowsInput" />;
  }
  if (!props.type) {
    return (
      <input
        type="text"
        placeholder={props.placeholder}
        className="windowsInput"
      />
    );
  }
  if (props.placeholder && props.type) {
    return (
      <input
        type={props.type}
        placeholder={props.placeholder}
        className="windowsInput"
      />
    );
  }
  return <input type={props.type} className="windowsInput" />;
};

export default Input;
