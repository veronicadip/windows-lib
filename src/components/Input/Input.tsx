import { FunctionComponent } from "react";
import "./styles.css";

interface Props {
  type?: "email" | "number" | "password" | "search" | "tel" | "text" | "url";
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  id?: string;
}

const Input: FunctionComponent<Props> = (props) => {
  const { type, placeholder, required, disabled, id } = props;
  if (
    type !== "email" &&
    type !== "number" &&
    type !== "password" &&
    type !== "search" &&
    type !== "tel" &&
    type !== "text" &&
    type !== "url"
  ) {
    return <></>;
  }
  if (!type && !placeholder) {
    return (
      <input
        type="text"
        className="windowsInput"
        required={required}
        disabled={disabled}
        id={id}
      />
    );
  }
  if (!type) {
    return (
      <input
        type="text"
        placeholder={placeholder}
        className="windowsInput"
        required={required}
        disabled={disabled}
        id={id}
      />
    );
  }
  if (placeholder && type) {
    return (
      <input
        type={type}
        placeholder={placeholder}
        className="windowsInput"
        required={required}
        disabled={disabled}
        id={id}
      />
    );
  }
  return (
    <input
      type={type}
      className="windowsInput"
      required={required}
      disabled={disabled}
      id={id}
    />
  );
};

export default Input;
